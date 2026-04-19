import BlogCard from "@/components/modules/homepage/BlogCard";
import { blogService } from "@/service/blog.service";
import { BlogPost } from "@/types";
// import productivity from "../../../public/productivity.jpg";
import Image from "next/image";


export default async function Home() {
  // const { data } = await blogService.getBlogsPost(
  //   {isFeatured: false,search: ""},
  //   {cache: "no-store",revalidate : 10},
  // );


  const postPromise = blogService.getBlogsPost(
    {isFeatured: false},
    {cache: "no-store"},
  );

  const featuredPostPromise = blogService.getBlogsPost(
    {isFeatured: true}
  );


  //* this is sequential promise render (more time : 3+3=6 seconds)
  // console.time('sequential...');
  // await new Promise((resolve) => setTimeout(resolve,3000))
  // await new Promise((resolve) => setTimeout(resolve,3000))
  // console.timeEnd('sequential end...');


  //* this is parallel promise render (less time : 3 seconds)
  // console.time("parallel....");
  // const promise1 = new Promise((resolve) => setTimeout(resolve,3000))
  // const promise2 = new Promise((resolve) => setTimeout(resolve,3000))

  // await Promise.all([promise1, promise2])
  // console.timeEnd("parallel end....");


  const [post,featuredPost] = await Promise.all([postPromise,featuredPostPromise])



  return (
    <>
      <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-6">
        {post?.data?.posts?.map((post: BlogPost) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

        <div className="max-w-7xl mx-auto px-4">
          ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </div>

        <h2 className="text-2xl flex justify-center max-w-7xl px-4 font-bold my-3">This is Image section</h2>

      <div className="relative flex mx-auto w-96 h-96 mb-6 border-4">

        {/* this is using import */}
        {/* <Image fill src={productivity} alt="prodctivity" className="object-cover"/> */}



        {/* this is using direct link + configuring the 'next.config.ts' file */}
        <Image fill priority src="https://i.ibb.co.com/zVsgX8zv/productivity.jpg" alt="productivity"/>
      </div>

        <div className="max-w-7xl mx-auto px-4">
          ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </div>

      <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-6">
        {featuredPost?.data?.posts?.map((post: BlogPost) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
