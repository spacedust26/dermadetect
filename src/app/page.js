import About from "@/components/Home/about";
import { ImagesSliderDemo } from "@/components/Home/hero";
import Navbar from "@/components/Home/navbar";
import { CardSpotlightDemo } from "@/components/Home/card";
import Contact from "@/components/Home/contact";
import Footer from "@/components/Home/footer";

export default function Home() {
  return (
    <div>
      <header><Navbar /></header>
      <ImagesSliderDemo />
      <main>
        <About />
      </main>
      <main className="flex flex-col items-center justify-center">
        <h2 className="my-3 text-3xl font-bold mb-7">Target Demographics</h2>
        <div className="flex flex-row gap-10">
          <CardSpotlightDemo />
          <CardSpotlightDemo />
        </div>
      </main>
      <div className="flex flex-col items-center justify-center my-12">
        <h2 className="my-3 text-3xl font-bold mb-7">Contact us</h2>
        <Contact />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
