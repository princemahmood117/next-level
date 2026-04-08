import CreateBlogFormServer from "@/components/modules/user/createBlog/CreateBlogFormServer";
import { blogService } from "@/service/blog.service";
import { BlogPost } from "@/types";




const CreateBlogPage = async () => {

    const {data} = await blogService.getBlogsPost()
    console.log(data.posts);


    return (
        <div>
            <CreateBlogFormServer></CreateBlogFormServer>
            {
                data.posts.map((item : BlogPost) => <p key={item.id}>{item.title}</p>)
            }
        </div>
    );
};

export default CreateBlogPage;