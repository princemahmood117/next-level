import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Roles } from "@/constants/roles"
import { userService } from "@/service/user.service"

export default async function DashboardLayout({admin, user} : {
  // receive the admin and user parallel-routes as props
  admin : React.ReactNode,
  user : React.ReactNode,
}) {



  const {data} = await userService.getSession()
  console.log(data);

  const userInfo = data.user
  console.log('data from dashboard layout : ', userInfo.role );



  return (
    <SidebarProvider>
      <AppSidebar user = {userInfo}/>
      
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4"></header>
        
        
        {/* dashboard UI here */}
        <div className="flex flex-1 flex-col gap-4 p-4">

          {userInfo.role === Roles.admin ? admin : user}

        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
