
import BlogCard from "@/components/modules/homepage/BlogCard";
import { blogService } from "@/service/blog.service";
import { BlogPost } from "@/types";


export default async function Home() {

  const {data} = await blogService.getBlogsPost({
    isFeatured : false,
    search : "",
  }, {
    cache : "no-store",
    // revalidate : 10
  }
)

  console.log(data.posts);

  
  return (
      <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-6">
      {data?.posts?.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
