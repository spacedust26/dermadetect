"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"
import { useState } from "react"

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);
    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "applications/json",
      },
      body: JSON.stringify({
        name, email, message
      }),
    });
    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <Card className="w-[350px]" id="contact">
      <CardHeader>
        <CardTitle>Get in touch</CardTitle>
        <CardDescription>Feel free to reach out to us!</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input onChange={(e) => setName(e.target.value)} value={name} id="name" placeholder="Enter your name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input onChange={(e) => setEmail(e.target.value)} value={email} id="email" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea onChange={(e) => setMessage(e.target.value)} value={message} id="message" placeholder="Type your message here." />
            </div>
            <Button type="submit" variant="outline">Send</Button>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col">
          {error.map((e, index) => (
            <div key={index} className={`${success ? 'text-green-700' : ' text-red-600 '} px-5 py-2`}>{e}</div>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
