import React from 'react'
import RegisterForm from '@/components/Register/register'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation"
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function registerForm() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");
  return (
    <div>
      <RegisterForm />
    </div>
  )
}