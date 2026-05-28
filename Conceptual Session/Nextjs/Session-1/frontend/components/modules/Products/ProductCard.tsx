/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProductCard = ({ product }: { product: any }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };
  return (
    <div className="h-full w-full">
      <Card className="p-3 h-full flex flex-col border hover:shadow-lg transition-all duration-300">
        {/* Product Image */}
        <CardHeader className="p-0 aspect-square overflow-hidden rounded-lg relative">
          <Link href={`/products/${product?._id}`} passHref>
            <Image
              src="https://res.cloudinary.com/dervoi2c1/image/upload/v1769194875/b6vl01w2rmr-1769194873969-images-cjdo7eijqg5-1748271037088-images-Lenovo-IdeaPad-Slim-3i-15IRH8-4.webp" // your static image
              alt={product?.name}
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </Link>
        </CardHeader>

        {/* Product Info */}
        <CardContent className="p-0 mt-3 flex-1 space-y-2">
          <Link href={`/products/${product?._id}`} passHref>
            <CardTitle className="font-semibold text-base sm:text-lg line-clamp-2 min-h-[3rem]">
              {product?.name}
            </CardTitle>
          </Link>

          <p className="text-gray-600 text-sm line-clamp-2">
            {product?.description}
          </p>

          <div className="font-bold text-lg sm:text-xl mt-2">
            ${product?.price.toFixed(2)}
          </div>
        </CardContent>

        <CardFooter className="p-0 mt-3 sm:mt-4">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-2 w-full">
              <Link
                href={`/products/${product?._id}`}
                passHref
                className="flex-1"
              >
                <Button
                  size="sm"
                  className="w-full bg-primary text-secondary hover:bg-secondary/90 hover:text-primary"
                >
                  Details
                </Button>
              </Link>

              <Button
                disabled={product?.stock === 0}
                size="sm"
                className="flex-1 bg-secondary hover:bg-primary/90 hover:text-secondary text-primary"
                // onClick={() => handleAddProduct(product)}
              >
                <ShoppingCart className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Add to Cart</span>
              </Button>
            </div>

            <Button
              variant="outline"
              size="sm"
              className={`w-full ${
                isWishlisted
                  ? "text-red-500 border-red-500"
                  : "bg-secondary hover:bg-primary/90 hover:text-secondary text-primary"
              }`}
              onClick={toggleWishlist}
            >
              <Heart
                className="h-4 w-4 mr-2"
                fill={isWishlisted ? "currentColor" : "none"}
              />
              {isWishlisted ? "Wishlisted" : "Wishlist"}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;