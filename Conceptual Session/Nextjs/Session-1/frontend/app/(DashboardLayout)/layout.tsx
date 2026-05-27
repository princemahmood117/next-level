
import { AppSidebar } from "@/components/shared/sidebar/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";


import { redirect } from "next/navigation";

import { getUser } from "@/src/service/auth";



export default async function DashboardLayout({
  admin,
  user,
}: {
  admin: React.ReactNode;
  user: React.ReactNode;
}) {


  const {role} = await getUser()



  const userData = await getUser()
  console.log("this is from get User : ", userData);

  return (
    <SidebarProvider>
      <AppSidebar userRole={role} />
      <SidebarInset>
        <header className="sticky top-0 z-10 bg-background flex h-16 items-center justify-between px-4 border-b">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Breadcrumb className="hidden sm:flex">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {role === 'user' ? "User" : "Admin"}
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <main
          className={`p-4 relative  pt-6 min-h-[calc(100vh-4rem)] gradientBg`}>          

          {role === 'user' ? user : admin}

        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}










