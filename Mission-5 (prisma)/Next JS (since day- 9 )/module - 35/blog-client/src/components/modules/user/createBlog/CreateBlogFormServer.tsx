import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";


const CreateBlogFormServer = () => {

    const createBlog = async(formData : FormData) => {
        "use server"

        console.log(formData.get("title....")); // form data will be here..........

    } 
  return (
    <div>
      <h1 className="text-2xl">blog form creation in server</h1>

      <Card className="mt-4 max-w-2xl mx-auto">
        <CardHeader>
            <CardTitle>Blog</CardTitle>
            <CardDescription>Write your description</CardDescription>
        </CardHeader>


        <CardContent>
            <form id="blog-form" action={createBlog}>
                <FieldGroup>
                    <Field>
                        <FieldLabel>Title</FieldLabel>
                        <Input type="text" name="title"></Input>
                    </Field>

                    <Field>
                        <FieldLabel>Content</FieldLabel>
                        <Input type="text" name="title"></Input>
                    </Field>
                    
                    <Field>
                        <FieldLabel>Tags</FieldLabel>
                        <Input type="text" name="title"></Input>
                    </Field>
                </FieldGroup>
            </form>
        </CardContent>


        <CardFooter>
            <Button className="w-full" form="blog-form" type="submit">Submit</Button>
        </CardFooter>
      </Card>

    </div>
  );
};

export default CreateBlogFormServer;




