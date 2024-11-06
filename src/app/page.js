import About from "@/components/Home/about";
import { ImagesSliderDemo } from "@/components/Home/hero";
import Navbar from "@/components/Home/navbar";
import { CardSpotlightDemo } from "@/components/Home/card";
import Contact from "@/components/Home/contact";
import Footer from "@/components/Home/footer";

export default function Home() {
  const spotlightData = [
    {
      title: "Individuals Seeking Diagnosis Support",
      description: "These users, including patients and caregivers, aim to identify skin issues and get preliminary insights on conditions before seeing a dermatologist. They seek accessible, accurate, and private evaluations to address concerns promptly.",
    },
    {
      title: "Healthcare Providers",
      description: " Primary care providers or general practitioners use the app to support clinical assessments, offering an additional tool for early detection and patient guidance. The app assists in evaluating skin abnormalities, helping healthcare professionals with referrals or further diagnostic steps.",
    },
  ];

  return (
    <div>
      <header><Navbar /></header>
      <ImagesSliderDemo />
      <main>
        <About />
      </main>
      <div className="flex flex-col items-center justify-center" id="service">
        <h2 className="my-3 text-3xl font-bold mb-7">Service Users</h2>
        <div className="flex flex-col items-center justify-center gap-10 sm:flex-row sm:flex-wrap">
          {spotlightData.map((data, index) => (
            <CardSpotlightDemo
              key={index}
              title={data.title}
              description={data.description}
              className="w-full sm:w-1/2 lg:w-1/3" // Adjust width per screen size
            />
          ))}
        </div>
      </div>
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
