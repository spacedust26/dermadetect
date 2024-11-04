// "use client"
// import React from 'react'
// import { Button } from '../ui/button'
// import { signOut, useSession } from "next-auth/react"

// const UserInfo = () => {
//   const { data: session } = useSession();

//   return (
//     <div className='grid place-items-center h-screen'>
//       <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
//         <div className="">
//           Name: <span className='font-bold'>{session?.user?.name}</span>
//         </div>
//         <div className="">
//           Email: <span className='font-bold'>{session?.user?.email}</span>
//         </div>
//         <Button onClick={() => signOut()} variant="destructive">Log Out</Button>
//       </div>
//     </div>
//   )
// }

// export default UserInfo
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}

