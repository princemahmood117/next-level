
import HistoryTable from "@/components/modules/user/history/HistoryTable";
import PaginationControl from "@/components/ui/pagination-control";
import { blogService } from "@/service/blog.service";

const History = async ({searchParams} : {searchParams : Promise<{page : string; limit : string}>}) => {

    const {page,limit}  = await searchParams; // in server component we take searchParams like this in props 
  

    const response = await blogService.getBlogsPost({page,limit})
    const posts = response.data?.posts || []

    const posts2 = response
    console.log(posts2);

    const paginationInfo = response?.data?.paginationData || {limit : 10, page : 1, totalCount : 0, totalPageCount : 1}


    return (
        <div className="p-6">
            <h1 className="text-2xl my-3">This is history page for users</h1>

            <HistoryTable posts={posts}></HistoryTable>
            <PaginationControl meta={paginationInfo}></PaginationControl>
        </div>
    );
};

export default History;