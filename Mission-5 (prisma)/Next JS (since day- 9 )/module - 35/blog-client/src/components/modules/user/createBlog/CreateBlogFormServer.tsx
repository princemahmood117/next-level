import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CreateBlogFormServer = () => {
  const createBlog = async (formData: FormData) => {
    "use server";

    const title = formData.get("title") as string
    const content = formData.get("content") as string
    const tags = formData.get("tags") as string

    const blogData = {
        title,
        content,
        tags : tags.split(",").map(item => item.trim()).filter(item => item !== "")
    }
    console.log("these are the blog data : ", JSON.stringify(blogData));
  };


  return (
    <div>
      <h1 className="text-2xl">blog form creation in server</h1>

      <Card className="mt-4 max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Blog</CardTitle>
          <CardDescription>Create your blog here...!</CardDescription>
        </CardHeader>

        <CardContent>
          <form id="blog-form" action={createBlog}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="title">Title</FieldLabel>
                <Input id="title" type="text" name="title" placeholder="Blog Title" required></Input>
              </Field>

              <Field>
                <FieldLabel htmlFor="content">Content</FieldLabel>
                <Textarea id="content" name="content" placeholder="Write your blog" required/>
              </Field>

              <Field>
                <FieldLabel htmlFor="tags">Tags (comma separated)</FieldLabel>
                <Input id="tags" name="tags" placeholder="nextjs, web" required></Input>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>

        <CardFooter>
          <Button className="w-full cursor-pointer" form="blog-form" type="submit">
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateBlogFormServer;
