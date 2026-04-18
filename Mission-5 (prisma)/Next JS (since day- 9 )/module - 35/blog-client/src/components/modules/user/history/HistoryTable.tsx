import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BlogPost } from "@/types";

const HistoryTable = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>View</TableHead>
            <TableHead>Content</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {posts.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.tags}</TableCell>
              <TableCell>{item.views}</TableCell>
              <TableCell>{item.content.slice(0,15)}...</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default HistoryTable;
