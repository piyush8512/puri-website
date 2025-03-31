import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="relative pt-15 inset-0 overflow-x-hidden w-full">
      {/* Header Section */}
      <div className="hidden hero-bg bg-center bg-cover bg-no-repeat min-h-[30vh] h-[34vh] md:flex md:flex-col items-center justify-start relative">
        <Image
          src="/partnersDate.svg"
          alt="Festival logo"
          width={127}
          height={52}
          className="object-contain min-w-xl w-120 h-100"
        />
      </div>
      <div className="md:hidden hero-bg-mobile bg-center bg-cover bg-no-repeat h-[21vh] w-full flex flex-col justify-center items-center relative">
        <Image
          src="/centermobilelogo.png"
          alt="Festival logo"
          width={67}
          height={67}
          className="object-cover w-20 "
        />
      </div>

      {/* Title Section */}
      <div className="w-full flex flex-col items-center relative">
        {/* Heading */}
        <h1 className="font-leckerli text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-[#D72327] text-center mt-2 md:mt-3 lg:mt-3">
          A Celebration of
        </h1>
        <h1 className="font-leckerli text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-[#ECCA19] text-center">
          Heritage & Culture
        </h1>

        {/* Responsive Image */}
        <div className="w-full flex justify-center mt-4 md:hidden">
          <Image
            src="/programs/programsmobiletemple.png"
            alt="Festival logo"
            width={127}
            height={52}
            className="object-contain w-[100%] max-w-lg md:max-w-sm lg:max-w-md"
          />
        </div>
        <div className="w-full  justify-center mt-4  md:flex  hidden">
          <Image
            src="/programs/programsmobiletemple.png"
            alt="Festival logo"
            width={327}
            height={100}
            className="object-contain w-[100%] max-w-lg md:max-w-lg lg:max-w-2xl absolute -left-2 -bottom-85"
          />
        </div>
        <div className="absolute -bottom-95 right-10  z-20 hidden md:block ">
          <Image
            src="/programs/musician.svg"
            alt="Decorative Line"
            width={357}
            height={52}
            className="w-3/4 sm:w-1/2 md:w-[350px]  rounded-lg "
          />
        </div>
      </div>

      {/* Mustard Background Section - Fixed */}
      <div className="relative w-full min-h-[100vh] md:min-h-[120vh] lg:min-h-[150vh] flex  md:items-center justify-center overflow-hidden md:mt-60">
        <div className="absolute inset-0 z-0 h-full w-full hidden md:block">
          <Image
            src="/programs/mustardbg.svg"
            alt="Yellow Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 z-0 h-[70vh] w-full md:hidden">
          <Image
            src="/programs/mobilemustardbg.png"
            alt="Yellow Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
            className="w-[70%] "
          />
        </div>

        {/* Your content goes here */}
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start w-[90%] md:w-[80%] lg:w-[70%] mx-auto md:gap-18">
          {/* Left Section - Text */}

          <div className="w-full md:w-1/3 text-center md:text-left md:space-y-4 md:mt-20 md:hidden mt-10  ">
            <h2 className="text-xl md:text-4xl md:text-[#495B0D] text-white  font-ebGaramond">
              Heritage Walk{" "}
            </h2>
            <h1 className="text-sm md:text-3xl font-semibold italic text-[#83660F]   font-ebGaramond">
              Vision of the Past to Shape our Present
            </h1>
          </div>

          <div className="w-full flex justify-center mt-4 md:w-1/3 md:mt-0 ">
            <Image
              src="/programs/heritagewalk.png"
              alt="Decorative Line"
              width={357}
              height={52}
              className="w-1/3 sm:w-1/2 md:w-[357px] shadow-[10px_10px_20px_rgba(0,0,0,0.5)]  "
            />
          </div>

          {/* Right Section - Image with 3D Shadow */}
          <div className="w-full md:w-2/3 text-center md:text-left md:space-y-4 md:mt-40 ">
            <h2 className="text-xl md:text-4xl text-[#495B0D] hidden md:block  font-ebGaramond">
              Heritage Walk{" "}
            </h2>
            <h1 className="text-3xl md:text-3xl font-semibold italic text-[#83660F] hidden md:block  font-ebGaramond">
              Vision of the Past to Shape our Present
            </h1>

            <p className="text-[#000000] text-xs md:text-lg pt-8 md:pt-0 px-12  md:px-0 text-justify ">
              An immersive Heritage Walk, allowing participants to explore
              Puri’s iconic landmarks such as the Jagannath Temple, Gundicha
              Temple, and the vibrant bylanes echoing with tales of devotion and
              tradition.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-8 right-10  z-20">
          <Image
            src="/programs/warriorhorse.svg"
            alt="Decorative Line"
            width={357}
            height={52}
            className="w-3/4 sm:w-1/2 md:w-[357px]  rounded-lg hidden md:block"
          />
        </div>
      </div>
      <div className="relative">
        <Image
          src="/programs/fighting.svg"
          alt="Decorative Line"
          width={357}
          height={52}
          className="absolute -top-62 -left-8 z-20 w-40 md:w-xl rotate-10"
        />
      </div>
      {/* Voilet */}
      <div className="relative w-full min-h-[100vh] md:min-h-[120vh] lg:min-h-[150vh] flex items-center justify-center overflow-hidden ">
        <div className="absolute inset-0 z-0 h-[70vh] md:h-full w-full">
          <Image
            src="/programs/voiletbg.svg"
            alt="Yellow Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
            className="w-full h-full"
          />
        </div>

        {/* Your content goes here */}
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
          <div className="w-full  justify-center  md:w-1/2  flex md:hidden">
            <Image
              src="/programs/culturalnight.png"
              alt="Decorative Line"
              width={357}
              height={52}
              className="w-1/4 sm:w-1/2 md:w-[357px] shadow-[14px_14px_6px_rgba(0,0,0,0.5)] "
            />
          </div>
          {/* Left Section - Text */}
          <div className="w-full md:w-2/3 text-center md:text-left md:space-y-4 mt-12 md:mt-32">
            <h1 className="text-xl md:text-5xl font-bold text-white  font-ebGaramond">
              Cultural Night{" "}
            </h1>
            <h2 className="text-lg md:text-4xl text-[#9F6EEA] italic  font-ebGaramond">
              A tapestry of Traditions
            </h2>
            <p className="text-white text-xs md:text-base md:pt-8">
              While the days will lead to thought-provoking discussions, the
              evenings will soothe the audience with a Cultural Night
              celebrating India&apos;s diverse artistic heritage. From the
              hypnotic beats of Odissi dance to the soulful strains
              of Hindustani classical & contemporary music and Paika martial art
              performances, the event will feature performances by renowned
              artists.
            </p>
          </div>

          {/* Right Section - Image with 3D Shadow */}
          <div className="w-full  justify-center mt-0 md:w-1/2 md:mt-0 hidden md:flex">
            <Image
              src="/programs/culturalnight.png"
              alt="Decorative Line"
              width={357}
              height={52}
              className="w-1/4 sm:w-1/2 md:w-[357px] shadow-[14px_14px_6px_rgba(0,0,0,0.5)] "
            />
          </div>
        </div>
        <div className="absolute -bottom-22 left-20  z-20 hidden md:block">
          <Image
            src="/programs/musician.svg"
            alt="Decorative Line"
            width={357}
            height={52}
            className="w-3/4 sm:w-1/2 md:w-[350px]  rounded-lg"
          />
        </div>
      </div>

      {/* pinkdiv */}
      <div className="relative w-full min-h-[100vh] md:min-h-[120vh] lg:min-h-[150vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src="/programs/pinkbg.svg"
            alt="Yellow Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
            className="w-full h-full"
          />
        </div>

        {/* Your content goes here */}

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start w-[90%] md:w-[80%] lg:w-[70%] mx-auto gap-20">
          {/* Left Section - Text */}

          <div className="w-full flex justify-center mt-4 md:w-1/3 md:mt-0">
            <Image
              src="/programs/patchart.png"
              alt="Decorative Line"
              width={357}
              height={52}
              className="w-3/4 sm:w-1/2 md:w-[357px] shadow-[-14px_14px_6px_rgba(0,0,0,0.5)] "
            />
          </div>

          {/* Right Section - Image with 3D Shadow */}
          <div className="w-full md:w-2/3 text-center md:text-left space-y-4 mt-12 md:mt-32">
            <h2 className="text-xl md:text-4xl text-white  font-ebGaramond">
              Gallery of Pattachitra Art
            </h2>
            <h1 className="text-2xl md:text-3xl font-semibold text-[#992586] italic  font-ebGaramond">
              Stories in Strokes
            </h1>
            <p className="text-white   text-sm md:text-base pt-8">
              An immersive Heritage Walk, allowing participants to explore
              Puri&apos;s iconic landmarks such as the Jagannath
              Temple, Gundicha Temple, and the vibrant bylanes echoing with
              tales of devotion and tradition.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-0 right-20  z-20">
          <Image
            src="/programs/illus1.svg"
            alt="Decorative Line"
            width={357}
            height={52}
            className="w-3/4 sm:w-1/2 md:w-[200px]  rounded-lg"
          />
        </div>
      </div>

      {/* blue div */}
      <div className="relative w-full min-h-[100vh] md:min-h-[120vh] lg:min-h-[150vh] flex items-center justify-center overflow-hidden mt-18  ">
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src="/programs/blue.svg"
            alt="Yellow Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
            className="w-full h-full"
          />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start w-[90%] md:w-[80%] lg:w-[70%] mx-auto  gap-15">
          {/* Left Section - Text */}
          <div className="w-full md:w-2/3 text-center md:text-left space-y-4 mt-14 md:mt-33">
            <h1 className="text-3xl md:text-5xl font-bold text-white  font-ebGaramond">
              Tales by the Tide{" "}
            </h1>
            <h2 className="text-xl md:text-4xl text-[#2F3082] italic  font-ebGaramond">
              Seaside Storytelling Sessions
            </h2>
            <p className="text-[#000000] text-sm md:text-base pt-12">
              Puri’s serene beaches will serve as the backdrop for enchanting
              storytelling sessions that celebrate the oral and intangible
              traditions of Odisha and beyond. Storytellers and performers will
              share folk tales in an engaging format that blends performance
              with interaction
            </p>
          </div>

          {/* Right Section - Image with 3D Shadow */}
          <div className="w-full flex justify-center mt-4 md:w-1/3 md:mt-0">
            <Image
              src="/programs/storyteelling.png"
              alt="Decorative Line"
              width={357}
              height={52}
              className="w-3/4 sm:w-1/2 md:w-[357px] shadow-[12px_13px_3px_rgba(0,0,0,0.5)] "
            />
          </div>
        </div>

        <div className="absolute -bottom-65 left-20  z-20">
          <Image
            src="/programs/turtle.svg"
            alt="Decorative Line"
            width={357}
            height={52}
            className="w-3/4 sm:w-1/2 md:w-[350px]  rounded-lg"
          />
        </div>
      </div>

      {/* orange */}
      <div className="relative w-full min-h-[100vh] md:min-h-[120vh] lg:min-h-[150vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src="/programs/orange.svg"
            alt="Yellow Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
            className="w-full h-full"
          />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start w-[90%] md:w-[80%] lg:w-[70%] mx-auto md: gap-20">
          {/* Left Section - Text */}

          <div className="w-full flex justify-center mt-4 md:w-1/3 md:mt-0">
            <Image
              src="/programs/sandart.png"
              alt="Decorative Line"
              width={357}
              height={52}
              className="w-3/4 sm:w-1/2 md:w-[357px] shadow-[-12px_14px_2px_rgba(0,0,0,0.5)] "
            />
          </div>

          {/* Right Section - Image with 3D Shadow */}
          <div className="w-full md:w-2/3 text-center md:text-left space-y-4 md:mt-30  font-ebGaramond ">
            <h2 className="text-xl md:text-4xl text-white">
              Timeless Sands of Odisha
            </h2>
            <h1 className="text-2xl md:text-2xl font-semibold text-[#7F1822] italic  font-ebGaramond">
              Baluka Kala
            </h1>

            <p className="text-[#000000] text-sm md:text-base md:pt-12">
              Renowned sand artists like Sudarshan Patnaik and others will grace
              the festival with their extraordinary talent,
              creating breathtaking sand sculptures that align with the themes
              of literature, heritage of Odisha, and global visions. Visitors
              will have the chance to witness live sand art demonstrations and
              admire a special exhibit of his iconic works, which have garnered
              international acclaim.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-38 right-20  z-20">
          <Image
            src="/programs/shank.svg"
            alt="Decorative Line"
            width={357}
            height={52}
            className="w-3/4 sm:w-1/2 md:w-[300px]  rounded-lg"
          />
        </div>
      </div>

      {/* greensection */}
      <div className="relative w-full min-h-[100vh] md:min-h-[120vh] lg:min-h-[150vh] flex items-center justify-center overflow-hidden my-15">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src="/programs/green.svg"
            alt="Yellow Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
            className="w-full h-full"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
          {/* Left Section - Text */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4 mt-20">
            <h1 className="text-3xl md:text-5xl font-bold text-white  font-ebGaramond">
              Food Festival
            </h1>
            <h2 className="text-xl md:text-4xl text-[#495B0D] italic  font-ebGaramond">
              Taste of the Odia Cuisine
            </h2>
            <p className="text-[#000000] text-sm md:text-base md:pt-12">
              From the savory flavors of and Pakhala Bhata to the sweet delights
              of Chhena Poda and Rasagola, the festival will be a gastronomic
              journey for food enthusiasts. Live cooking demonstrations will
              showcase the preparation of these iconic dishes, paired with
              stories about their cultural significance.
            </p>
          </div>

          {/* Right Section - Image with 3D Shadow */}
          <div className="w-full flex justify-center mt-4 md:w-1/2 md:mt-8">
            <Image
              src="/programs/food.png"
              alt="Decorative Line"
              width={357}
              height={52}
              className="w-3/4 sm:w-1/2 md:w-[357px] shadow-[13px_14px_8px_rgba(0,0,0,0.5)] "
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
