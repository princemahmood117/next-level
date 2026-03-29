"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { authClient } from "@/lib/auth-client"
import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import * as z from "zod"


// zod validation

const formSchema = z.object({
  name : z.string().min(1, "this field is required!"),
  password : z.string().min(6, "minimum length is 6 character!"),
  email : z.email(),
})





export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {

  const form = useForm({
    defaultValues : {
      name : "",
      email : "",
      password : ""
    },

    validators : {
      onSubmit : formSchema
    },

    onSubmit : async ({value}) => {
      const toastId = toast.loading("creating user!please wait!")
      try {
        const {data, error} = await authClient.signUp.email(value)

        if(error) {
          toast.error(error.message, {id : toastId})
          return
        }
        toast.success("User Created Successfully!", {id : toastId})

      } catch (error) {
        toast.error("Something went wrong!", {id : toastId})
      }
    }
  })


  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>


      <CardContent>
        <form id="loginForm" onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit();
        }}
        >

          <FieldGroup>
            {/* name field */}
            <form.Field 
            name="name" 
            children={(field) => {

              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                  <Input id={field.name} type="text"
                  name={field.name}
                  value={field.state.value} 
                  onChange={(e) => field.handleChange(e.target.value)}/>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
            />


            {/* email field */}
            <form.Field 
            name="email" 
            children={(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Field>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input id={field.name} type="email"
                  name={field.name}
                  value={field.state.value} 
                  onChange={(e) => field.handleChange(e.target.value)}/>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
            />


            {/* password field */}
            <form.Field 
            name="password" 
            children={(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Field>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <Input id={field.name} type="password"
                  name={field.name}
                  value={field.state.value} 
                  onChange={(e) => field.handleChange(e.target.value)}/>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
            />

          </FieldGroup>

        </form>
      </CardContent>


      <CardFooter className="flex justify-end">
          <Button form="loginForm" type="submit">Register</Button>
      </CardFooter>
    </Card>
  )
}
