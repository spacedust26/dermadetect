import React from 'react'
import Sidebar from '@/components/Dashboard/Sidebar'
import { FileUploadDemo } from '@/components/Dashboard/Upload'
import Info from '@/components/Dashboard/Info'
import { History } from '@/components/Dashboard/History'

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-64">
        <Sidebar />
      </div>
      <div className="flex-1 p-6">
        <FileUploadDemo />
        <Info />
        <History />
      </div>
    </div>
  )
}

export default Dashboard
