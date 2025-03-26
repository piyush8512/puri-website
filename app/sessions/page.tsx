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
      <header className="relative pt-15">
        <div className="hidden md:flex hero-bg bg-center bg-cover bg-no-repeat min-h-[30vh] h-[34vh] flex-col items-center justify-start">
          <Image
            src="/partnersDate.svg"
            alt="Festival logo"
            width={127}
            height={52}
            className="object-contain min-w-xl w-120 h-100"
            priority
          />
        </div>

        <div className="md:hidden hero-bg-mobile bg-center bg-cover bg-no-repeat h-[21vh] w-full flex flex-col justify-center items-center">
          <Image
            src="/mobilePartnersDate.svg"
            alt="Festival logo"
            width={67}
            height={67}
            className="object-cover w-50 sm:w-75"
            priority
          />
        </div>
      </header>

      {/* Sessions Section */}
      <section className="text-center">
        <h1 className="font-leckerli font-bold text-4xl md:text-6xl lg:text-8xl text-[#D72327] pt-5 md:pt-10">
          Sessions
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
        <div className="session-slider-bg bg-center bg-cover bg-no-repeat h-270 w-full flex items-center justify-center relative -top-40 overflow-hidden">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full md:max-w-7xl"
            setApi={(api) => setEmblaRef(api || null)}
          >
            <CarouselContent>
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
            </CarouselContent>
            <CarouselPrevious className="bg-[#ECCA19] text-[#2F3082] border-none hover:bg-amber-500 transition-colors absolute left-[40%] top-[100%] md:top-[46%] md:-left-[4%]" />
            <CarouselNext className="bg-[#ECCA19] text-[#2F3082] border-none hover:bg-amber-500 transition-colors absolute left-[50%] top-[100%] md:top-[46%] md:left-[100%]" />
          </Carousel>
        </div>
      </section>

      {/* Parallel Sessions Section */}
      <section className="relative">
        <div className="relative h-120 mb-45">
          <div className="w-full absolute top-0 left-0 paralleltree bg-contain md:bg-cover bg-center bg-no-repeat h-175  py-10">
            <h1 className="font-leckerli font-bold text-4xl md:text-5xl lg:text-6xl text-[#D72327] text-center">
              Parallel Sessions
            </h1>
          </div>
        </div>
        {/* Parallel Sessions Carousel */}
        <div className="relative w-full flex justify-center items-center pb-45 curvedbluebg bg-bottom bg-cover bg-no-repeat h-150">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full md:max-w-7xl relative"
            setApi={(api) => setParallelEmblaRef(api || null)}
          >
            <CarouselContent>
              {sessionsData.paralellDialogues.map((dialogue, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 text-center"
                >
                  <div className="p-1">
                    <Card
                      className={
                        index !== parallelDialogueActiveIndex
                          ? "transition-all blur-sm"
                          : "transition-all"
                      }
                    >
                      <CardContent className="flex items-center justify-center h-45 w-94 redparallel bg-center bg-no-repeat bg-contain">
                        <div className="absolute top-0 rounded-full bg-[#2F3082] z-50 h-15 w-15 font-leckerli text-[#D72327] text-3xl text-center py-2">
                          {dialogue.id + 1}
                        </div>
                        <div
                          className={
                            index === parallelDialogueActiveIndex
                              ? "flex flex-col items-center justify-center yellowparallel bg-center bg-no-repeat bg-contain h-50 w-94 hover:-rotate-10 transition-all duration-500 ease-in-out group mb-1"
                              : "flex flex-col items-center justify-center yellowparallel bg-center bg-no-repeat bg-contain h-50 w-84 mb-1"
                          }
                        >
                          <h2 className="text-[#D72327] font-leckerli font-bold text-3xl group-hover:text-xl">
                            {dialogue.title}
                          </h2>
                          <h3 className="text-blue-800 font-leckerli text-xl group-hover:text-lg w-55">
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
            <CarouselPrevious className="bg-[#ECCA19] text-[#2F3082] border-none hover:bg-amber-500 transition-colors absolute left-[40%] top-[100%] md:-left-[4%] md:top-[50%]" />
            <CarouselNext className="bg-[#ECCA19] text-[#2F3082] border-none hover:bg-amber-500 transition-colors absolute left-[50%] top-[100%] md:left-[100%]  md:top-[50%]" />
          </Carousel>
        </div>

        <div className="h-80 w-full flex justify-center items-center">
          <div className="relative h-50">
            <Image
              src="/girlbook.svg"
              alt="Girl Reading Book"
              width={200}
              height={120}
              className="object-contain absolute top-8 md:top-4 -left-15 md:-left-24 size-42"
              priority
            />
            <Button className="bg-[#ECCA19] text-[#2F3082] font-bold text-4xl font-leckerli px-18 py-12 rounded-full hover:bg-[#C1A513] -z-10 mt-35 [text-shadow:_0_2px_2px_rgb(99_102_241_/_0.8)] md:w-fit w-60">
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
