// import { getSingleProduct } from '@/src/service/products';
// import React from 'react';

import { getSingleProduct } from "@/src/service/products";

// const page = async ({params} : {params:Promise<{productId:string}>}) => {
//     const {productId} = await params;
//     const {data:product} = await getSingleProduct(productId)

//     if(!product) {
//         return <p>Product Not Found</p>
//     }
//     return (
//         <div>
//             Product is: {product.name}
//         </div>
//     );
// };

// export default page;






export default async function Page({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const { data } = await getSingleProduct(productId);
  return (
    <div className="max-w-3xl mx-auto p-4">
      {" "}
      {/* Product Image */}{" "}
      <img
        src="https://res.cloudinary.com/dervoi2c1/image/upload/v1769194875/b6vl01w2rmr-1769194873969-images-cjdo7eijqg5-1748271037088-images-Lenovo-IdeaPad-Slim-3i-15IRH8-4.webp"
        alt={"Image"}
        className="w-full h-auto rounded-lg mb-6"
      />{" "}
      {/* Product Details */}{" "}
      <h1 className="text-3xl font-bold mb-2">{data?.name}</h1>{" "}
      <p className="text-gray-600 mb-4">{data?.description}</p>{" "}
      <p className="text-xl font-semibold mb-2">Price: ${data?.price}</p>{" "}
      <p className="text-gray-500">Category: {data?.category}</p>{" "}
      <p className="text-gray-400 text-sm mt-4">
        {" "}
        Created at: {new Date(data?.createdAt).toLocaleString()}{" "}
      </p>{" "}
    </div>
  );
}
