

import { blogService } from "@/service/blog.service";


export default async function Home() {

  const {data} = await blogService.getBlogsPost()

  console.log(data);


  
  return (
    <div></div>
  );
}
