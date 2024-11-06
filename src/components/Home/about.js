import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center p-2 md:flex-row md:p-8" id="about">
      <div className="flex flex-col justify-start p-4 md:w-2/3">
        <h2 className="my-2 text-3xl font-bold">About Us</h2>
        <p className="text-[hsl(var(--foreground))]">
          At DermaDetect AI, we are dedicated to empowering individuals and healthcare professionals with cutting-edge technology for early detection of skin diseases. Our mission is to make skin health assessment accessible, accurate, and convenient for everyone. By harnessing the power of artificial intelligence, we have developed an advanced diagnostic tool that analyzes images of skin conditions and provides rapid, reliable insights.
        </p>
        <p className="mt-2 text-[hsl(var(--foreground))]">
          Our application uses state-of-the-art machine learning algorithms to detect a wide range of skin diseases, from common conditions like eczema and acne to more serious concerns such as melanoma. We believe early detection is key to effective treatment, and our goal is to assist users in identifying potential issues as early as possible, right from the comfort of their home.
        </p>
      </div>
      <div className="flex items-center justify-center p-4 md:w-1/3 mt-10">
        <Image
          src={"/dermadetect-logo.png"}
          alt="Description of the image"
          width={400}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
}