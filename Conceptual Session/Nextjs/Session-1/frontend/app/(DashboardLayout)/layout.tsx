// import React from "react";

// // this is dashboard layout where the children are rendered parallely
// const DashboardLayout = ({ admin, user }: { admin: React.ReactNode, user: React.ReactNode, }) => {
//   return (
//     <div>

//       {admin}
//       <br />
//       {user}
  
//     </div>
//   );
// };

// export default DashboardLayout;




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


export default async function DashboardLayout({
  admin,
  user,
}: {
  admin: React.ReactNode;
  user: React.ReactNode;
}) {

  const userRole = "admin"


  return (
    <SidebarProvider>
      <AppSidebar userRole="user" />
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
                  {userRole === 'user' ? "User" : "Admin"}
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <main
          className={`p-4 relative  pt-6 min-h-[calc(100vh-4rem)] gradientBg`}>          
          {/* {user}
          {admin} */}

          {userRole === 'user' ? user : admin}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}










