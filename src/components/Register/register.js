"use client"
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from 'next/link'

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "applications/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
      } else {
        console.log("User registeration failed.");
      }
    } catch (error) {
      console.log("Error dring registartion", error);
    }
  };

  return (
    <div className='grid place-items-center h-screen'>
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-[#308061] w-full max-w-md">
        <h1 className='text-xl font-bold my-4'>Enter the details</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          <Input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
          <Input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Enter your password" onChange={(e) => setPassowrd(e.target.value)} />
          <Button>Register</Button>

          {error && (<div className="bg-red-500 tetx-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>)}

          <Link href={"/login"} className='text-sm mt-3 text-right'>
            Already have an account ?<span className='underline'>Login</span></Link>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm