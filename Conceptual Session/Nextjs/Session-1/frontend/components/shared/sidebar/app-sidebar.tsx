'use client';

import * as React from 'react';
import {
  Bot,
  Settings,
  SquareTerminal,
  Tag,
  File,
} from 'lucide-react';
import Link from 'next/link';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { NavMain } from './nav-main';
import { NavUser } from './nav-user';
import Image from 'next/image';

// User Navigation Items
const USER_NAV_ITEMS = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: SquareTerminal,
    isActive: true,
  },
  {
    title: 'Profile',
    url: '/profile',
    icon: Settings,
   
  },
];

// Admin Navigation Items
const ADMIN_NAV_ITEMS = [
  {
    title: 'Admin Dashboard',
    url: '/dashboard',
    icon: SquareTerminal,
    isActive: true,
  },
  {
    title: 'Product Management',
    url: '#',
    icon: Bot,
    items: [
      { title: 'Add Product', url: '/dashboard/add-product', icon: Tag },
      { title: 'Update Product', url: '/dashboard/update-product', icon: File },
    ],
  },
  {
    title: 'Profile',
    url: '/profile',
    icon: Settings,
  },
];



interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  userRole: 'user' | 'admin'; // Role-based prop
}

export function AppSidebar({ userRole, ...props }: AppSidebarProps) {

  let navItems = []
  if(userRole === 'user') {
    navItems = USER_NAV_ITEMS
  } else {
    navItems = ADMIN_NAV_ITEMS
  }

  return (
    <Sidebar  collapsible="icon" {...props}>
      <SidebarHeader>
        <LogoHeader />
      </SidebarHeader>

      <SidebarContent>
        {/* Main Navigation */}
        <NavMain items={navItems} />

        {/* Common Secondary Navigation */}
        <div className="mt-4">
          {/* <NavMain items={COMMON_SECONDARY_ITEMS} /> */}
        </div>
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}

const LogoHeader = () => (
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton size="lg" asChild>
        <Link href="/">
          <div className="w-full">
            <Image
              src="/logo.png"
              alt="SwiftCart Logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 7rem, (max-width: 1024px) 10rem, 12rem"
            />
          </div>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
);