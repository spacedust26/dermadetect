import { connectMongoDB } from "@/lib/mongodb";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const { name, email, message } = await req.json();
  try {
    await connectMongoDB();
    await Contact.create({ name, email, message });
    return NextResponse.json({ msg: ["Message sent succesfully"], success: true })
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: "Unable to send message." });
    }
  }
}