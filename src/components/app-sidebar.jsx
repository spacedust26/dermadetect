"use client"
import { signOut, useSession } from "next-auth/react"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "@/app/mode-toggle"
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button"

// Menu items.
const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Upload", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
]

export function AppSidebar() {
  const { data: session } = useSession();
  return (
    <Sidebar className="bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 min-h-screen p-4 w-64">
      <SidebarHeader className="flex items-center justify-between px-2 mb-4">
        <Link href="#" prefetch={false} className="flex items-center gap-2">
          <Image
            src="/dermadetect-logo.png"
            alt="Derma Detect Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-semibold text-gray-900 dark:text-gray-50">DermaDetect</span>
        </Link>
        <ModeToggle className="ml-auto" />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-bold text-gray-700 dark:text-gray-400 mb-2">Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3 p-2 text-gray-800 dark:text-gray-200">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <Button onClick={() => signOut()} variant="destructive" className="w-full mt-4">
              Log Out
            </Button>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="mt-auto border-t border-gray-200 dark:border-gray-700 pt-4">
        <SidebarMenuItem className="flex items-center gap-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-gray-800 dark:text-gray-200 font-medium">{session?.user?.name}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-[150px]">{session?.user?.email}</span>
          </div>
        </SidebarMenuItem>
      </SidebarFooter>
    </Sidebar>
  )
}
