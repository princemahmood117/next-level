"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface PAginationControlsProps {
  meta: {
    limit: number;
    page: number;
    totalCount: number;
    totalPageCount: number;
  };
}

const PaginationControl = ({ meta }: PAginationControlsProps) => {
  const {
    limit,
    page: currentPage,
    totalCount,
    totalPageCount,
  } = meta;
  console.log("meta", meta);

  const searchParams = useSearchParams(); // in client component, to take url's search-params - use "useSearchParams" (unmodify-able)

  const router = useRouter();

  const navigateToPage = (page: number) => {
    const searchParamsToString = searchParams.toString(); // Converts params to string: "page=2"
    const params = new URLSearchParams(searchParamsToString); // creates new object from the string (modify-able)

    params.set("page", page.toString());

    router.push(`?${params.toString()}`);
  };

//* showing 1 to 5 of 21 --> page 1   
//* showing 6 to 10 of 21 --> page 2   
//* showing 11 to 15 of 21 --> page 3 (and so on)   

  const start = (currentPage - 1) * limit + 1; // {(1-1)*5}+1 = 1 (start_value for page 1) | {(2-1)*5}+1 = 6 (start_value for page 2)

  const end = Math.min(currentPage * limit, totalCount); // 1 * 5 = 5 (end_value for page-1) | 2 * 5 = 10 (end_value for page-2)

  return (
    <div className="flex mt-5 items-center justify-center md:mr-20 border-t py-3">
      <div className="text-sm text-muted-foreground mr-2">
        Showing {start} to {end} of {totalCount} results
      </div>

      <div className="flex space-x-2 items-center">
        <Button
          disabled={currentPage === 1}
          variant={"outline"}
          size={"icon"}
          onClick={() => navigateToPage(1)}
        >
          <ChevronsLeft className="h-4 w-4"> </ChevronsLeft>
        </Button>

        <Button
          disabled={currentPage === 1}
          variant={"outline"}
          size={"icon"}
          onClick={() => navigateToPage(currentPage - 1)}
        >
          <ChevronLeft className="h-4 w-4"></ChevronLeft>
        </Button>



        <div className="flex items-center gap-1">
          <span className="text-sm font-medium">Page {currentPage} of {totalPageCount} </span>
        </div>



        <Button
          disabled={currentPage === totalPageCount}
          variant={"outline"}
          size={"icon"}
          onClick={() => navigateToPage(currentPage + 1)}
        >
          <ChevronRight className="h-4 w-4"></ChevronRight>
        </Button>

        <Button
          disabled={currentPage === totalPageCount}
          variant={"outline"}
          size={"icon"}
          onClick={() => navigateToPage(totalPageCount)}
        >
          <ChevronsRight className="h-4 w-4"></ChevronsRight>
        </Button>
      </div>
    </div>
  );
};

export default PaginationControl;
