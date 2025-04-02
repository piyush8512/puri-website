"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { EmblaCarouselType } from "embla-carousel";
import dialogues from "@/data/sessions.json";
import { motion } from "framer-motion";
// Define proper types for dialogues
interface Dialogue {
  id: number;
  title: string;
  subtitle: string;
  paragraph: string;
}

interface DialoguesData {
  dialogues: Dialogue[];
  paralellDialogues: Dialogue[];
}

const Page: React.FC = () => {
  // Properly typed state variables
  const [dialogueActiveIndex, setDialogueActiveIndex] = useState(0);
  const [parallelDialogueActiveIndex, setParallelDialogueActiveIndex] =
    useState(0);
  const [emblaRef, setEmblaRef] = useState<EmblaCarouselType | null>(null);
  const [parallelEmblaRef, setParallelEmblaRef] =
    useState<EmblaCarouselType | null>(null);

  // Consolidated useEffect for carousel event handling
  useEffect(() => {
    if (emblaRef) {
      const handleSelect = () => {
        setDialogueActiveIndex(emblaRef.selectedScrollSnap());
      };

      emblaRef.on("select", handleSelect);

      return () => {
        emblaRef.off("select", handleSelect);
      };
    }
  }, [emblaRef]);

  useEffect(() => {
    if (parallelEmblaRef) {
      const handleParallelSelect = () => {
        setParallelDialogueActiveIndex(parallelEmblaRef.selectedScrollSnap());
      };

      parallelEmblaRef.on("select", handleParallelSelect);

      return () => {
        parallelEmblaRef.off("select", handleParallelSelect);
      };
    }
  }, [parallelEmblaRef]);

  // Type assertion for dialogues data
  const sessionsData = dialogues as DialoguesData;

  return (
    <div className="relative overflow-x-hidden">
      {/* Responsive Header Section */}
      <header className="relative pt-23">
        <div className="hidden md:flex hero-bg bg-center bg-cover bg-no-repeat min-h-[30vh] h-[34vh] flex-col items-center justify-start">
          {/* <Image
            src="/partnersDate.svg"
            alt="Festival logo"
            width={127}
            height={52}
            className="object-contain min-w-xl w-120 h-100"
            priority
          /> */}
          <Image
            className="size-30 xl:size-52"
            // src="https://ik.imagekit.io/zjaqik2mc/homehero/logo.svg?updatedAt=1743486047833"
            src="/mainpage/logo.svg"
            alt="Festival logo"
            width={127}
            height={52}
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center font-libreBodoni md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-[#D72327] font-bold"
          >
            18th APRIL - 20th APRIL <br /> 2025
          </motion.h1>
        </div>

        <div className="md:hidden hero-bg-mobile bg-center bg-cover bg-no-repeat h-[21vh] w-full flex flex-col justify-center items-center">
          <Image
            src="/centermobilelogo.png"
            alt="Festival logo"
            width={67}
            height={67}
            className="object-cover w-20 "
          />
        </div>
      </header>

      {/* Sessions Section */}
      <section className="text-center">
        <h1 className="font-leckerli font-bold text-4xl md:text-4xl lg:text-4xl text-[#D72327] pt-5 md:pt-4">
          Dialogue Sessions
        </h1>

        <div className="w-full flex justify-center relative">
          <Image
            src="/Sessionbg.svg"
            alt="sessions"
            width={300}
            height={120}
            className="object-contain w-full mt-2 mx-auto"
            priority
          />
        </div>

        {/* Sessions Carousel */}
        <div className="session-slider-bg bg-center bg-cover bg-no-repeat h-120 md:h-270 w-full flex items-center justify-center relative -top-40 overflow-hidden mt-25 md:m-0">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className=" max-w-[380px] md:max-w-7xl"
            setApi={(api) => setEmblaRef(api || null)}
          >
            <CarouselContent>
              {sessionsData.dialogues.map((dialogue, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 md:basis-1/2 lg:basis-1/3 text-center relative"
                >
                  <div className="p-1">
                    <Card
                      className={
                        index !== dialogueActiveIndex
                          ? "transition-all opacity-35 scale-80 "
                          : "transition-all"
                      }
                    >
                      <CardContent className="flex items-center justify-center md:h-110 md:w-94 w-50 h-80 bluedialoguebox bg-center bg-no-repeat bg-contain relative">
                        {/* <div className="absolute -top-4 rounded-full bg-[#D72327] z-50 h-15 w-15 font-leckerli text-[#2F3082] text-3xl text-center py-2">
                          {dialogue.id + 1}
                        </div> */}
                        <div
                          className={
                            index === dialogueActiveIndex
                              ? "flex flex-col items-center justify-center yellowdialoguebox bg-center bg-no-repeat bg-contain md:h-110 md:w-84 w-100 h-58  hover:-rotate-10 transition-all duration-500 ease-in-out group mb-1"
                              : "flex flex-col items-center justify-center yellowdialoguebox bg-center bg-no-repeat bg-contain md:h-110 md:w-84 w-100 h-58 mb-1"
                          }
                        >
                          <h2 className="text-[#D72327] font-leckerli font-bold md:text-3xl group-hover:text-xl text-xs">
                            {dialogue.title}
                          </h2>
                          <h3 className="text-blue-800 font-leckerli md:text-xl group-hover:text-md md:w-55 w-23 text-xs">
                            {dialogue.subtitle}
                          </h3>
                          <p className="font-inter text-sm w-65 hidden group-hover:block transition-opacity ease-in-out duration-500">
                            {dialogue.paragraph}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* old one  */}
            {/* <CarouselContent>
              {sessionsData.dialogues.map((dialogue, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 text-center relative"
                >
                  <div className="p-1">
                    <Card
                      className={
                        index !== dialogueActiveIndex
                          ? "transition-all blur-sm"
                          : "transition-all"
                      }
                    >
                      <CardContent className="flex items-center justify-center h-110 w-94 bluedialoguebox bg-center bg-no-repeat bg-contain relative">
                        <div className="absolute -top-4 rounded-full bg-[#D72327] z-50 h-15 w-15 font-leckerli text-[#2F3082] text-3xl text-center py-2">
                          {dialogue.id + 1}
                        </div>
                        <div
                          className={
                            index === dialogueActiveIndex
                              ? "flex flex-col items-center justify-center yellowdialoguebox bg-center bg-no-repeat bg-contain h-110 w-84 hover:-rotate-10 transition-all duration-500 ease-in-out group mb-1"
                              : "flex flex-col items-center justify-center yellowdialoguebox bg-center bg-no-repeat bg-contain h-110 w-84 mb-1"
                          }
                        >
                          <h2 className="text-[#D72327] font-leckerli font-bold text-3xl group-hover:text-xl">
                            {dialogue.title}
                          </h2>
                          <h3 className="text-blue-800 font-leckerli text-xl group-hover:text-md w-55">
                            {dialogue.subtitle}
                          </h3>
                          <p className="font-inter text-sm w-65 hidden group-hover:block transition-opacity ease-in-out duration-500">
                            {dialogue.paragraph}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent> */}

            {/* new one  by me*/}
            {/* <CarouselContent>
  {sessionsData.dialogues.map((dialogue, index) => (
    <CarouselItem
      key={index}
      className={`md:basis-1/2 lg:basis-1/3 text-center relative transition-all ${
        index !== dialogueActiveIndex ? "opacity-50 scale-80 " : "opacity-100 scale-100"
      }`}
    >
      <div className="p-1">
        <Card
          className={index !== dialogueActiveIndex ? "transition-all  " : "transition-all"}
        >
          <CardContent className="flex items-center justify-center h-110 w-94 bluedialoguebox bg-center bg-no-repeat bg-contain relative">
            <div className="absolute -top-4 rounded-full bg-[#D72327] z-50 h-12 w-12 font-leckerli text-[#2F3082] text-2xl text-center py-2">
              {dialogue.id + 1}
            </div>
            <div
              className={`flex flex-col items-center justify-center yellowdialoguebox bg-center bg-no-repeat bg-contain h-110 w-84 transition-all duration-500 ease-in-out group mb-1 ${
                index === dialogueActiveIndex ? "hover:-rotate-10" : "scale-100"
              }`}
            >
              <h2 className="text-[#D72327] font-leckerli font-bold text-3xl group-hover:text-xl">
                {dialogue.title}
              </h2>
              <h3 className="text-blue-800 font-leckerli text-xl group-hover:text-md w-55">
                {dialogue.subtitle}
              </h3>
              <p className="font-inter text-sm w-65 hidden group-hover:block transition-opacity ease-in-out duration-500">
                {dialogue.paragraph}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  ))}
</CarouselContent> */}

            <CarouselPrevious className="bg-[#ECCA19] text-[#2F3082] border-none hover:bg-amber-500 transition-colors absolute -left-[0.1%] top-[46%] md:top-[46%] md:-left-[4%]" />
            <CarouselNext className="bg-[#ECCA19] text-[#2F3082] border-none hover:bg-amber-500 transition-colors absolute left-[90%] top-[46%] md:top-[46%] md:left-[100%]" />
          </Carousel>
        </div>
      </section>

      {/* Parallel Sessions Section */}
      <section className="relative">
        <div className="relative h-111 md:mb-45">
          <div className="w-full absolute top-0 left-0 paralleltree bg-contain md:bg-cover bg-center bg-no-repeat h-175">
            <h1 className="font-leckerli font-bold text-4xl mt-20 md:m-0 md:text-4xl lg:text-5xl text-[#D72327] text-center">
              Parallel Sessions
            </h1>
          </div>
        </div>
        {/* Parallel Sessions Carousel */}
        <div className="relative w-full flex justify-center items-center pb-45 mobilecurvedbluebg bg-center bg-no-repeat bg-cover md:curvedbluebg md:bg-bottom md:bg-cover md:bg-no-repeat h-150">
          <Carousel 
            opts={{
              align: "center",
              loop: true,
            }}
            className="max-w-[380px] md:max-w-7xl relative"
            setApi={(api) => setParallelEmblaRef(api || null)}
          >
            <CarouselContent>
              {sessionsData.paralellDialogues.map((dialogue, index) => (
                <CarouselItem
                  key={index}
                  className=" basis-1/2 md:basis-1/2 lg:basis-1/3 text-center"
                >
                  <div className="p-1">
                    <Card
                      className={
                        index !== parallelDialogueActiveIndex
                          ? "transition-all opacity-35 scale-80 "
                          : "transition-all"
                      }
                    >
                      <CardContent className="flex items-center justify-center h-37 w-50  md:h-75 md:w-84 redparallel bg-center bg-no-repeat bg-contain">
                        {/* <div className="absolute top-0 rounded-full bg-[#2F3082] z-50 h-15 w-15 font-leckerli text-[#D72327] text-3xl text-center py-2">
                          {dialogue.id + 1}
                        </div> */}
                        <div
                          className={
                            index === parallelDialogueActiveIndex
                              ? "flex flex-col items-center justify-center yellowparallel bg-center bg-no-repeat bg-contain h-25 w-64 md:h-63 md:w-98 hover:-rotate-10 transition-all duration-500 ease-in-out group mb-1"
                              : "flex flex-col items-center justify-center yellowparallel bg-center bg-no-repeat bg-contain h-70 w-84 mb-1"
                          }
                        >
                          <h2 className="text-[#D72327] font-leckerli font-bold text-lg md:text-3xl group-hover:text-xl">
                            {dialogue.title}
                          </h2>
                          <h3 className="text-blue-800 font-leckerli text-sm md:text-xl group-hover:text-lg w-55">
                            {dialogue.subtitle}
                          </h3>
                          {/* <p className="font-inter text-sm w-65 hidden group-hover:block transition-opacity ease-in-out duration-500">
                            {dialogue.paragraph}
                          </p> */}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-[#ECCA19] text-[#2F3082] border-none hover:bg-amber-500 transition-colors absolute left-[3%] top-[50%] md:-left-[4%] md:top-[50%]" />
            <CarouselNext className="bg-[#ECCA19] text-[#2F3082] border-none hover:bg-amber-500 transition-colors absolute left-[90%] top-[50%] md:left-[100%]  md:top-[50%]" />
          </Carousel>
        </div>

        <div className="h-80 w-full flex justify-center items-center">
          <div className="relative h-40">
            <Image
              src="/girlbook.svg"
              alt="Girl Reading Book"
              width={200}
              height={120}
              className="object-contain absolute top-10 md:top-16 -left-15 md:-left-18 size-30"
              priority
            />
            <Button className="bg-[#ECCA19] text-[#2F3082] font-bold text-xl font-leckerli px-8 py-6 rounded-full hover:bg-[#C1A513] -z-10 mt-35 [text-shadow:_0_2px_2px_rgb(99_102_241_/_0.8)] md:w-fit w-40">
              Download <br className="block md:hidden" />
              Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;
