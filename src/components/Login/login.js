"use client"
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from 'next/link'
import { signIn, SignIn } from "next-auth/react"
import { useRouter } from 'next/navigation'

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }
      router.replace("/dashboard")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='grid place-items-center h-screen'>
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-[#308061] w-full max-w-md">
        <h1 className='text-xl font-bold my-4'>Enter the details</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          <Input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
          <Input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
          <Button>Login</Button>
          {error && (
            <div className="bg-red-500 tetx-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
          )}
          <Link href={"/register"} className='text-sm mt-3 text-right'>
            Don&apos;t have an account? <span className='underline'>Register</span></Link>
        </form>
      </div>
    </div>
  )
}

export default LoginForm