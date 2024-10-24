import React from 'react'
import { Button } from '../ui/button'

const UserInfo = () => {
  return (
    <div className='grid place-items-center h-screen'>
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <div className="">
          Name: <span className='font-bold'>John</span>
        </div>
        <div className="">
          Email: <span className='font-bold'>john@gmail.com</span>
        </div>
        <Button variant="destructive">Log Out</Button>
      </div>
    </div>
  )
}

export default UserInfo