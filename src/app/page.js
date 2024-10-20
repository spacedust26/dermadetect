import Image from "next/image";
import { ImagesSliderDemo } from "@/components/Home/hero";
import Navbar from "@/components/Home/navbar";

export default function Home() {
  return (
    <div>
      <header><Navbar /></header>
      <ImagesSliderDemo />
    </div>
  );
}
