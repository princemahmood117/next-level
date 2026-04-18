
import HistoryTable from "@/components/modules/user/history/HistoryTable";
import { blogService } from "@/service/blog.service";

const History = async () => {

    const response = await blogService.getBlogsPost()
    const posts = response.data?.posts || []

    console.log(posts);
    return (
        <div className="p-6">
            <h1 className="text-2xl my-3">This is history page for users</h1>

            <HistoryTable posts={posts}></HistoryTable>
        </div>
    );
};

export default History;