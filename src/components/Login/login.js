import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from 'next/link'

const login = () => {
  return (
    <div className='grid place-items-center h-screen'>
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-[#308061] w-full max-w-md">
        <h1 className='text-xl font-bold my-4'>Enter the details</h1>
        <form className='flex flex-col gap-3'>
          <Input type="email" placeholder="Enter your email" />
          <Input type="password" placeholder="Enter your password" />
          <Button>Login</Button>
          <div className="bg-red-500 tetx-white w-fit text-sm py-1 px-3 rounded-md mt-2">Error message</div>
          <Link href={"/register"} className='text-sm mt-3 text-right'>
            Don&apos;t have an account? <span className='underline'>Register</span></Link>
        </form>
      </div>
    </div>
  )
}

export default login