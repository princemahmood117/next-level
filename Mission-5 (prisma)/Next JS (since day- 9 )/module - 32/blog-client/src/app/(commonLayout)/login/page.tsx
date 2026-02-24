
// const LoginPage = () => {
//     return (
//         <div>
//             this is login page
//         </div>
//     );
// };

// export default LoginPage;



import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
