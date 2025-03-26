import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

const page = () => {
  const directors = [
    {
      name: "Omm Priyadarshi",
      surname: "Chotaray",
      image: "/ommpriyadarshichhotaray.png",
      rotation: "-3deg", // Replace with actual image path
    },
    {
      name: "Shivam",
      surname: "Raghuwanshi",
      image: "/Shivamraghuvanshi.png",
      rotation: "2deg", // Replace with actual image path
    },
    {
      name: "Shashank Shekhar",
      surname: "Singh",
      image: "/shashankssingh.png",
      rotation: "-1.5deg", // Replace with actual image path
    },
  ];

  const team = [
    {
      name: "Pradhumna ",
      surname: "Malpani",
      image: "/pradhumnamalpani.svg",
      rotation: "2deg", // Replace with actual image path
    },
    {
      name: "Mahendra Singh Sekhala",
      surname: "Sekhala",
      image: "/mahendrasingh.svg",
      rotation: "-1.5deg", // Replace with actual image path
    },

    {
      name: "Hema",
      surname: "Thakur",
      image: "/hemathakur.svg",
      rotation: "-1.5deg", // Replace with actual image path
    },
    {
      name: "Tejaswi",
      surname: "Singh",
      image: "/tejaswisingh.svg",
      rotation: "1.5deg", // Replace with actual image path
    },
    {
      name: "Mrunmayee Prasad",
      surname: "Chitale",
      image: "/mrunmayeeprasad.svg",
      rotation: "-1.5deg", // Replace with actual image path
    },
    {
      name: "Siri",
      surname: "Siriam",
      image: "/srisriram.svg",
      rotation: "1.5deg", // Replace with actual image path
    },
    {
      name: "Sumanya",
      surname: "Kashyap",
      image: "/sumanyakashyap.svg",
      rotation: "-1.5deg", // Replace with actual image path
    },
    {
      name: "Aswathy",
      surname: "Hariharan",
      image: "/awasthyahariharan.svg",
      rotation: "-1.5deg", // Replace with actual image path
    },
    {
      name: "Pawan Singh",
      surname: "Butat",
      image: "/pawansinghbutat.svg",
      rotation: "-1.5deg", // Replace with actual image path
    },
    {
      name: "Pratyush ",
      surname: "Debasish",
      image: "/pratyushdebasish.svg",
      rotation: "-1.5deg",
    }, // Replace with actual image path
  ];

  return (
    <div className="relative pt-15 inset-0 overflow-x-hidden">
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
        {/* Logo image */}
        <Image
          src="/mobilePartnersDate.svg"
          alt="Festival logo"
          width={67}
          height={67}
          className="object-cover w-50 sm:w-75"
        />
      </div>
      <h1 className="font-leckerli font-bold text-5xl md:text-6xl lg:text-8xl xl:text-7xl text-[#D72327] text-center md:mt-10 lg:mt-15 lg:mb-80">
        About us
      </h1>

      {/* our philosophy */}

      <div className="relative w-full flex items-center justify-center">
        <Image
          src="/aboutHero.svg"
          alt="about Hero"
          width={127}
          height={152}
          className=" w-full object-contain z-50 absolute top-[2%] md:-top-[18%] lg:-top-[25%] xl:-top-[35%] hidden md:block"
        />
        {/* Background Image */}
        <Image
          src="/redbgabout.png"
          alt="About Us Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 -z-10 hidden md:block "
        />

        {/* Content Wrapper */}
        <div className="relative bg-[#D72327] md:bg-transparent  w-full max-w-7xl min-h-screen px-6 md:px-8 lg:px-4 flex flex-col md:flex-row items-center md:items-start md:gap-8 my-2 py-16 md:pt-26 ">
          {/* Left Section */}
          <div className="  w-full md:w-1/3 flex flex-col items-center md:items-start md:text-left mt-0 md:mt-70">
            <div className=" items-center gap-2 mb-4 ml-6 md:flex hidden ">
              <Image
                src="/shank.svg"
                alt="Decorative element"
                width={60}
                height={150}
                className="w-12 md:w-16 lg:w-10"
              />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#959491] font-leckerli justify-center">
                Our
              </h1>
              <Image
                src="/shank.svg"
                alt="Decorative element"
                width={60}
                height={150}
                className="w-12 md:w-10 lg:w-10 scale-x-[-1]"
              />
            </div>

            {/* for mobile */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFC40C] font-leckerli justify-center md:hidden ">
              Our
            </h1>
            <div className=" items-center gap-2 mb-4 md:hidden flex ">
              <Image
                src="/shank.svg"
                alt="Decorative element"
                width={60}
                height={150}
                className="w-12 md:w-16 lg:w-10"
              />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFC40C] font-leckerli justify-center">
                Philosophy
              </h1>

              <Image
                src="/shank.svg"
                alt="Decorative element"
                width={60}
                height={150}
                className="w-12 md:w-10 lg:w-10 scale-x-[-1]"
              />
            </div>

            <h2 className="text-[#2F3082] md:bg-transparent text-lg md:text-xl font-semibold md:text-white md:mt-8 text-center md:text-left">
              पुरुषोत्तम क्षेत्रं वैकुण्ठस्य सदृशं।
            </h2>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-2/3 text-white md:pt-24 pt-8  md:pb-0 pb-8">
            <p className="text-base md:text-[17px] leading-relaxed text-justify ">
              Set against the serene backdrop of Puri, a city steeped in
              spirituality and heritage, the Puri Literary Festival 2025
              celebrates India’s enduring cultural legacy and its progressive
              aspirations. Rooted in the philosophy of Samavāya—the harmonious
              coexistence of tradition and modernity—the festival seeks to
              inspire a holistic dialogue that bridges India’s ancient wisdom
              with its contemporary ambitions. The Puri Literary Festival 2025
              is an ode to the eternal cyclicity of time and knowledge, a
              harmonious dialogue between the past and the future, inspired by
              the sacred wheels of the Konark Sun Temple and the divine Ratha of
              Lord Jagannath. These wheels symbolize the perpetual motion of
              life, the ceaseless journey of humanity through epochs, and the
              profound interplay of tradition and transformation. Key objectives
              of the session are to reaffirm Puri’s spiritual and cultural
              legacy and to foster global dialogue with an indigenous lens. At
              its core, the festival embraces the belief that India’s timeless
              wisdom and artistic heritage serve not as relics of the past but
              as guiding lights for the future. It is through this lens that the
              festival seeks to explore how the nation can ascend to new
              pinnacles in art, architecture, literature, and economic
              development while remaining deeply rooted in its cultural ethos.
              The festival’s impact will extend far beyond the venue, with an
              outreach program spanning every district of Odisha. Events
              including heritage walks, folk art performances, and discussions
              on Odia literature will ensure grassroots participation,
              rekindling pride in Odisha’s traditions. In schools and colleges,
              workshops and storytelling sessions will inspire the youth, while
              expert-led dialogues on environmental sustainability, digital
              literacy, and cultural preservation. The culmination of these
              efforts will be a “Vision for Tomorrow” document, encapsulating
              insights to guide future policy and cultural initiatives. The Puri
              Literary Festival 2025 promises to be an enriching experience that
              echoes throughout the state, inspiring a deeper connection with
              India’s cultural roots while embracing a modern, forward-thinking
              world.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 ">
          <Image
            src="/centercurved.png"
            alt="Decorative element"
            width={600}
            height={600}
            className="block md:hidden w-ful h-44l "
          />
        </div>
      </div>

      {/* text */}
      <div className="flex items-center justify-center min-h-[60vh] md:min-h-[80vh] text-center flex-col relative">
        <Image
          src="/bookrider.svg"
          alt="Decorative element"
          width={390}
          height={520}
          className="absolute top-0 md:-top-60 left-0 z-20 size-40 md:size-130 inset-0"
        />
        <Image
          src="/bookway.svg"
          alt="Decorative element"
          width={384}
          height={512}
          className="absolute bottom-0 md:-bottom-50 right-0 z-20 size-40 md:size-120"
        />
        <h1 className="text-[#2F3082] text-xl md:text-4xl font-bold">
          Weaving stories of
        </h1>
        <h1 className="text-xl md:text-4xl font-bold">
          <span className="text-[#D72327] block md:inline">Tradition,</span>
          <span className="text-[#F5C721] ">Transformation,</span>
          <span className="text-[#2F3082] ">&</span>
          <span className="text-[#3E8D19] block md:inline">Triumph!</span>
        </h1>
      </div>

      <div className="relative w-full min-h-[145vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - EDIT: Replace with your actual background image */}
        <Image
          src="/foundingbg2.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 -z-10"
          priority
        />

        {/* Content Container */}
        <div className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">
          {/* Founding Title with Decorative Elements */}
          <div className="flex justify-center items-center gap-2 mb-4">
            {/* EDIT: Replace with your actual decorative image */}
            <Image
              src="/shank.svg"
              alt="Decorative element"
              width={60}
              height={150}
              className="w-8 sm:w-10 md:w-12 lg:w-16"
            />
            {/* EDIT: Change the title text if needed */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFC40C] font-leckerli">
              Founding
            </h1>
            {/* EDIT: Replace with your actual decorative image */}
            <Image
              src="/shank.svg"
              alt="Decorative element"
              width={60}
              height={150}
              className="w-8 sm:w-10 md:w-12 lg:w-16 scale-x-[-1]"
            />
          </div>

          {/* Director Title - EDIT: Change the title text if needed */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFC40C] font-leckerli mb-12">
            Director
          </h1>

          {/* Polaroid-style photo cards */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-16 w-full pt-12">
            {directors.map((director, index) => (
              <div
                key={index}
                className="mb-8 md:mb-0"
                style={{
                  transform: `rotate(${director.rotation})`,
                }}
              >
                {/* EDIT: Adjust polaroid card dimensions here if needed */}
                <div className="bg-white p-4 shadow-lg w-64 md:w-72">
                  {/* Red background with photo - EDIT: Change background color if needed */}
                  <div className="relative bg-red-600 w-full aspect-square mb-4">
                    <Image
                      src={director.image}
                      alt={`${director.name} ${director.surname}`}
                      layout="fill"
                      objectFit="cover"
                      className="" // EDIT: Adjust image effects if needed
                    />
                  </div>

                  {/* Name text - EDIT: Adjust text styling if needed */}
                  <div className="text-center pb-2">
                    <p className="text-xl font-serif font-medium">
                      {director.name}
                    </p>
                    <p className="text-xl font-serif font-medium">
                      {director.surname}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        {/* Team Heading */}
        <h1 className="text-[#2F3082] text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-30 font-leckerli">
          Team
        </h1>

        {/* Directors Grid */}
        <div className="pt-12 space-y-10 px-12">
          {team.length > 0 && (
            <>
              {/* Grouping items into rows of 3 and 2 */}
              {team.map((_, i, arr) => {
                if (i % 5 === 0) {
                  return (
                    <div
                      key={`row-${i}`}
                      className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center"
                    >
                      {arr.slice(i, i + 3).map((team, index) => (
                        <div
                          key={index}
                          className="flex justify-center"
                          style={{ transform: `rotate(${team.rotation})` }}
                        >
                          <div className="bg-white p-4 shadow-lg w-64 md:w-72">
                            <div className="relative bg-[#2F3087] w-full aspect-square mb-4">
                              <Image
                                src={team.image}
                                alt={`${team.name} ${team.surname}`}
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                            <div className="text-center pb-2">
                              <p className="text-xl font-serif font-medium">
                                {team.name}
                              </p>
                              <p className="text-xl font-serif font-medium">
                                {team.surname}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                } else if (i % 5 === 3) {
                  return (
                    <div
                      key={`row-${i}`}
                      className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center"
                    >
                      {arr.slice(i, i + 2).map((team, index) => (
                        <div
                          key={index}
                          className="flex justify-center"
                          style={{ transform: `rotate(${team.rotation})` }}
                        >
                          <div className="bg-white p-4 shadow-lg w-64 md:w-72">
                            <div className="relative bg-[#2F3087] w-full aspect-square mb-4">
                              <Image
                                src={team.image}
                                alt={`${team.name} ${team.surname}`}
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                            <div className="text-center pb-2">
                              <p className="text-xl font-serif font-medium">
                                {team.name}
                              </p>
                              <p className="text-xl font-serif font-medium">
                                {team.surname}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                }
              })}
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
