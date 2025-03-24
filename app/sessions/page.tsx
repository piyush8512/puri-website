"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  // Sample dialogue data
  const dialogues = [
    {
      id: 1,
      title: "Agents Of Change:",
      subtitle: "Role Of Writers As Social Commentators And Activists",
    },
    {
      id: 2,
      title: "Voices Of Resistance:",
      subtitle: "Literature As A Tool For Social Justice",
    },
    {
      id: 3,
      title: "Beyond Words:",
      subtitle: "The Impact Of Artistic Expression On Society",
    },
    {
      id: 4,
      title: "Cultural Catalysts:",
      subtitle: "How Writers Shape Public Discourse",
    },
    {
      id: 5,
      title: "Pens & Protests:",
      subtitle: "Writers On The Frontlines Of Change",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === dialogues.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? dialogues.length - 1 : prevIndex - 1
    );
  };

  // Get visible dialogues (previous, current, next)
  const getVisibleDialogues = () => {
    const prev = activeIndex === 0 ? dialogues.length - 1 : activeIndex - 1;
    const next = activeIndex === dialogues.length - 1 ? 0 : activeIndex + 1;
    return [
      { ...dialogues[prev], position: "left" },
      { ...dialogues[activeIndex], position: "center" },
      { ...dialogues[next], position: "right" },
    ];
  };

  return (
    <div className="relative pt-15 inset-0 overflow-x-hidden">
      {/* Hero section for desktop */}
      <div className="hidden hero-bg bg-center bg-cover bg-no-repeat min-h-[30vh] h-[34vh] md:flex md:flex-col items-center justify-start relative">
        <Image
          src="/partnersDate.svg"
          alt="Festival logo"
          width={127}
          height={52}
          className="object-contain min-w-xl w-120 h-100"
        />
      </div>

      {/* Hero section for mobile */}
      <div className="md:hidden hero-bg-mobile bg-center bg-cover bg-no-repeat h-[21vh] w-full flex flex-col justify-center items-center relative">
        <Image
          src="/mobilePartnersDate.svg"
          alt="Festival logo"
          width={67}
          height={67}
          className="object-cover w-50 sm:w-75"
        />
      </div>

      {/* Sessions heading */}
      <h1 className="font-leckerli font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#D72327] text-center ">
        Sessions
      </h1>

      {/* Session background image - vertically below the heading */}
      <div className="w-full flex justify-center ">
        <Image
          src="/Sessionbg.svg"
          alt="sessions"
          width={300}
          height={120}
          className="object-contain w-full mt-2 mx-auto"
          priority
        />
        <div className="bg-[#B92E16] h-60 w-full absolute bottom-0  -z-10 "></div>
      </div>

      <div className="bg-[#D72327] h-screen w-full flex items-center justify-center relative overflow-hidden">
        <div className="relative w-full max-w-4xl flex items-center justify-center">
          {getVisibleDialogues().map((dialogue, index) => (
            <div
              key={dialogue.id}
              className={`absolute transition-all duration-500 ease-in-out
          ${
            dialogue.position === "left"
              ? "left-0 -translate-x-1/4 scale-90 blur-sm z-10"
              : ""
          }
          ${
            dialogue.position === "center"
              ? "left-1/2 -translate-x-1/2 scale-100 z-20"
              : ""
          }
          ${
            dialogue.position === "right"
              ? "right-0 translate-x-1/4 scale-90 blur-sm z-10"
              : ""
          }
        `}
            >
              <div className="relative">
                {/* Circle indicator at the top center */}
                <div
                  className="absolute top-7 left-1/2 transform -translate-x-1/2 bg-[#D72327] text-blue-500 text-3xl font-bold 
                          w-15 h-15 flex items-center justify-center rounded-full font-leckerli "
                >
                  {dialogue.id + 1}
                </div>

                <Image
                  src="/dialoguebox.svg"
                  alt="Dialogue box"
                  width={50}
                  height={50}
                  className="w-80 h-120 object-contain"
                />

                {dialogue.position === "center" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <h3 className="text-blue-800 font-bold font-serif text-lg">
                      {dialogue.title}
                    </h3>
                    <p className="text-blue-800 font-serif text-sm italic">
                      {dialogue.subtitle}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-amber-400 text-blue-800 p-2 rounded-full z-30"
        >
          &larr;
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-amber-400 text-blue-800 p-2 rounded-full z-30"
        >
          &rarr;
        </button>
      </div>
      <Image
        src="/about-border.svg"
        alt="border"
        width={300}
        height={120}
        className="object-contain w-full mx-auto"
      />






      {/* parallelsession */}
      <div className="pt-20 relative">
        <h1 className="font-leckerli font-bold text-4xl md:text-5xl lg:text-6xl xl:text-5xl text-[#2F3281] text-center ">
          Parallel Sessions
        </h1>
        <div className=" absolute z-12 left-20 top-15 w-80">
          <Image
            src="/bookreadingman.svg"
            alt="sessions"
            width={300}
            height={120}
            className="object-contain w-full mt-2 mx-auto"
            priority
          />
        </div>

        <div className=" absolute z-12 right-20 top-50 w-40">
          <Image src='/woman.svg' alt="sessions" width={200} height={100} className="object-contain w-full  mx-auto top-0" priority />
          </div>

        <div className=" relative w-full flex justify-center pt-45 ">
          <Image
            src="/curvedbluebg.svg"
            alt="sessions"
            width={300}
            height={120}
            className="object-contain w-full mt-2 mx-auto"
            priority
          />
          
          
          <div className="absolute mt-100 w-full max-w-6xl flex items-center justify-center">
          {getVisibleDialogues().map((dialogue, index) => (
            <div
              key={dialogue.id}
              className={`absolute transition-all duration-500 ease-in-out
          ${
            dialogue.position === "left"
              ? "left-0 -translate-x-1/4 scale-90 blur-sm z-10"
              : ""
          }
          ${
            dialogue.position === "center"
              ? "left-1/2 -translate-x-1/2 scale-100 z-20"
              : ""
          }
          ${
            dialogue.position === "right"
              ? "right-0 translate-x-1/4 scale-90 blur-sm z-10"
              : ""
          }
        `}
            >
              <div className="relative">
                {/* Circle indicator at the top center */}
                <div
                  className="absolute top-7 left-1/2 transform -translate-x-1/2 bg-[#D72327] text-blue-500 text-3xl font-bold 
                          w-15 h-15 flex items-center justify-center rounded-full font-leckerli "
                >
                  {dialogue.id + 1}
                </div>

                <Image
                  src="/parallelbox.svg"
                  alt="Dialogue box"
                  width={50}
                  height={50}
                  className="w-120 h-90 object-contain"
                />

                {dialogue.position === "center" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <h3 className="text-blue-800 font-bold font-serif text-lg">
                      {dialogue.title}
                    </h3>
                    <p className="text-blue-800 font-serif text-sm italic">
                      {dialogue.subtitle}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-12/2 -translate-y-1/2 bg-amber-400 text-blue-800 p-2 rounded-full z-30"
        >
          &larr;
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-amber-400 text-blue-800 p-2 rounded-full z-30"
        >
          &rarr;
        </button>


        </div>

      

          

        
        </div>
      <Footer />
    </div>
  );
};

export default Page;
