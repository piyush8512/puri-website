import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

const speakers = [
  { name: "Jagdeep Dhankar", src: "/speakers/jagdeepdhankar.svg" },
  { name: "Sh. Dharmendra Pradhan", src: "/speakers/dharmendra.svg" },
  { name: "Hari Babu", src: "/speakers/haribabu.svg" },
  { name: "Mohan Charan", src: "/speakers/mohancharan.svg" },
  { name: "Sachidanand", src: "/speakers/sachidanand.svg" },
  { name: "U", src: "/speakers/unknown1.svg" },
  { name: "Shashi Tharoor", src: "/speakers/shashitharoor.svg" },
  { name: "Shekhar Gupta", src: "/speakers/shekhargupta.svg" },
  { name: "Uday Makhur", src: "/speakers/udaymakhur.svg" },
  { name: "Mohandas P.", src: "/speakers/mohandasp.svg" },
  { name: "Menakshi Jain", src: "/speakers/mennakshijain.svg" },
  { name: "rajeevchandrasekhar", src: "/speakers/rajeevchandrasekhar.svg" },
  { name: "pankajtripati", src: "/speakers/pankajtripati.svg" },
  { name: "sanjeevsanyal", src: "/speakers/sanjeevsanyal.svg" },
  { name: "vikramsampath", src: "/speakers/vikramsampath.svg" },
  { name: "souravdwivedi", src: "/speakers/souravdwivedi.svg" },
  { name: "sudhamurthy", src: "/speakers/sudhamurthy.svg" },
  { name: "pratisharay", src: "/speakers/pratisharay.svg" },
  { name: "shefalivaidya", src: "/speakers/shefalivaidya.svg" },
  { name: "sandeepbalkrishna", src: "/speakers/sandeepbalkrishna.svg" },
  // { name: "shashankssingh", src: "/speakers/shashankssingh.svg" },
  // { name: "shashankssingh", src: "/speakers/shashankssingh.svg" },
  // { name: "shivamraghuvanshi", src: "/speakers/shivamraghuvanshi.svg" },
  // { name: "ommpriyadarshichhotaray", src: "/speakers/ommpriyadarshichhotaray.svg" },


];

const Page = () => {
  return (
    <div className="relative pt-15 inset-0 overflow-x-hidden">
      {/* Desktop & Tablet Hero Section */}
      <div className="hidden md:flex hero-bg bg-center bg-cover bg-no-repeat min-h-[30vh] h-[34vh] flex-col items-center justify-start relative">
        <Image
          src="/partnersDate.svg"
          alt="Festival logo"
          width={127}
          height={52}
          className="object-contain min-w-xl w-120 h-100"
        />
      </div>

      {/* Mobile Hero Section */}
      <div className="md:hidden hero-bg-mobile bg-center bg-cover bg-no-repeat h-[21vh] w-full flex flex-col justify-center items-center relative">
        <Image
          src="/mobilePartnersDate.svg"
          alt="Festival logo"
          width={67}
          height={67}
          className="object-cover w-50 sm:w-75"
        />
      </div>

      <h1 className="font-leckerli font-bold text-4xl md:text-5xl lg:text-6xl xl:text-5xl text-[#D72327] text-center md:mt-10 lg:mt-10">
        Meet the Speakers
      </h1>

      {/* Speakers Section */}
      <div className="flex flex-col items-center mt-20 space-y-10">
        {/* First row with 3 images only on desktop */}
        <div className=" lg:grid grid-cols-3 gap-14">
          {speakers.slice(0, 3).map((speaker, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image src={speaker.src} alt={speaker.name} width={257} height={72} />
              <p className="mt-2 text-black text-lg font-medium">{speaker.name}</p>
            </div>
          ))}
        </div>

        {/* Remaining images in 2, 3, or 4 columns depending on screen size */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {speakers.slice(3).map((speaker, index) => (
            <div key={index + 3} className="flex flex-col items-center text-center">
              <Image src={speaker.src} alt={speaker.name} width={257} height={100} />
              <p className="mt-2 text-black text-lg font-medium">{speaker.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Page;
