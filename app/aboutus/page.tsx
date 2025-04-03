// import React from "react";
// import Image from "next/image";
// import Footer from "@/components/Footer";

// const page = () => {
//   const directors = [
//     {
//       name: "Omm Priyadarshi",
//       surname: "Chotaray",
//       image: "/ommpriyadarshichhotaray.png",
//       rotation: "-3deg", // Replace with actual image path
//     },
//     {
//       name: "Shivam",
//       surname: "Raghuwanshi",
//       image: "/Shivamraghuvanshi.png",
//       rotation: "2deg", // Replace with actual image path
//     },
//     {
//       name: "Shashank Shekhar",
//       surname: "Singh",
//       image: "/shashankssingh.png",
//       rotation: "-1.5deg", // Replace with actual image path
//     },
//   ];

//   const team = [
//     {
//       name: "Pradhumna ",
//       surname: "Malpani",
//       image: "/pradhumnamalpani.svg",
//       rotation: "2deg", // Replace with actual image path
//     },
//     {
//       name: "Mahendra Singh Sekhala",
//       surname: "Sekhala",
//       image: "/mahendrasingh.svg",
//       rotation: "-1.5deg", // Replace with actual image path
//     },

//     {
//       name: "Hema",
//       surname: "Thakur",
//       image: "/hemathakur.svg",
//       rotation: "-1.5deg", // Replace with actual image path
//     },
//     {
//       name: "Tejaswi",
//       surname: "Singh",
//       image: "/tejaswisingh.svg",
//       rotation: "1.5deg", // Replace with actual image path
//     },
//     {
//       name: "Mrunmayee Prasad",
//       surname: "Chitale",
//       image: "/mrunmayeeprasad.svg",
//       rotation: "-1.5deg", // Replace with actual image path
//     },
//     {
//       name: "Siri",
//       surname: "Siriam",
//       image: "/srisriram.svg",
//       rotation: "1.5deg", // Replace with actual image path
//     },
//     {
//       name: "Sumanya",
//       surname: "Kashyap",
//       image: "/sumanyakashyap.svg",
//       rotation: "-1.5deg", // Replace with actual image path
//     },
//     {
//       name: "Aswathy",
//       surname: "Hariharan",
//       image: "/awasthyahariharan.svg",
//       rotation: "-1.5deg", // Replace with actual image path
//     },
//     {
//       name: "Pawan Singh",
//       surname: "Butat",
//       image: "/pawansinghbutat.svg",
//       rotation: "1.5deg", // Replace with actual image path
//     },
//     {
//       name: "Pratyush ",
//       surname: "Debasish",
//       image: "/pratyushdebasish.svg",
//       rotation: "1.5deg",
//     }, // Replace with actual image path
//   ];

//   return (
//     <div className="relative pt-15 inset-0 overflow-x-hidden">
//       <div className="hidden hero-bg bg-center bg-cover bg-no-repeat min-h-[30vh] h-[34vh] md:flex md:flex-col items-center justify-start relative">
//         <Image
//           src="/partnersDate.svg"
//           alt="Festival logo"
//           width={127}
//           height={52}
//           className="object-contain min-w-xl w-120 h-100"
//         />
//       </div>
//       <div className="md:hidden hero-bg-mobile bg-center bg-cover bg-no-repeat h-[21vh] w-full flex flex-col justify-center items-center relative">
//         {/* Logo image */}
//         <Image
//           src="/mobilePartnersDate.svg"
//           alt="Festival logo"
//           width={67}
//           height={67}
//           className="object-cover w-50 sm:w-75"
//         />
//       </div>
//       <h1 className="font-leckerli font-bold text-3xl md:text-4xl lg:text-6xl xl:text-8xl text-[#D72327] text-center md:mt-10 lg:mt-15 mb-25  md:mb-60">
//         About us
//       </h1>

//       {/* our philosophy */}

//       <div className="relative w-full flex flex-col items-center justify-center">
//         {/* <div className="relative h-25 w-full">      <Image
//   src="/aboutHero.svg"
//   alt="about Hero"
//   width={127}
//   height={152}
//   className="w-full h-35 md:h-31 object-cover z-50 absolute top-[2%] md:-top-[18%] lg:-top-[25%] xl:-top-[35%]"
// />
// </div> */}
// <div className="absolute w-full h-30 md:h-40 lg:h-80 xl:h-110 aboutHero bg-center bg-cover bg-no-repeat -top-[5%] md:-top-[18%] xl:-top-[30%] z-[50]">
// </div>
//         {/* Background Image */}
//         <Image
//           src="/redbgabout.png"
//           alt="About Us Background"
//           layout="fill"
//           objectFit="cover"
//           className="absolute inset-0 -z-10 hidden md:block "
//         />

//         {/* Content Wrapper */}
//         <div className="relative bg-[#D72327] md:bg-transparent  w-full max-w-7xl min-h-screen px-6 md:px-8 lg:px-4 flex flex-col md:flex-row items-center md:items-start md:gap-8 my-2 py-16 md:pt-26 ">
//           {/* Left Section */}
//           <div className="  w-full md:w-1/3 flex flex-col items-center md:items-start md:text-left mt-0 md:mt-70">
//             <div className=" items-center gap-2 mb-4 ml-6 md:flex hidden ">
//               <Image
//                 src="/shank.svg"
//                 alt="Decorative element"
//                 width={60}
//                 height={150}
//                 className="w-12 md:w-16 lg:w-10"
//               />
//               <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFC40C] font-leckerli justify-center">
//                 Our
//               </h1>
//               <Image
//                 src="/shank.svg"
//                 alt="Decorative element"
//                 width={60}
//                 height={150}
//                 className="w-12 md:w-10 lg:w-10 scale-x-[-1]"
//               />
//             </div>
//             <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-[#FFC40C] font-leckerli justify-center md:block hidden">
//               Philosophy
//             </h1>

//             {/* for mobile */}
//             <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-[#FFC40C] font-leckerli justify-center md:hidden ">
//               Our
//             </h1>
//             <div className=" items-center gap-2 mb-4 md:hidden flex ">
//               <Image
//                 src="/shank.svg"
//                 alt="Decorative element"
//                 width={60}
//                 height={150}
//                 className="w-10 md:w-16 lg:w-10"
//               />
//               <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-[#FFC40C] font-leckerli justify-center">
//                 Philosophy
//               </h1>

//               <Image
//                 src="/shank.svg"
//                 alt="Decorative element"
//                 width={60}
//                 height={150}
//                 className="w-10 md:w-10 lg:w-10 scale-x-[-1]"
//               />
//             </div>

//             <h2 className="text-[#2F3082] md:bg-transparent text-sm md:text-2xl font-semibold md:text-white md:mt-8 text-center md:text-left">
//               पुरुषोत्तम क्षेत्रं वैकुण्ठस्य सदृशं।
//             </h2>
//           </div>

//           {/* Right Section */}
//           <div className="w-full md:w-2/3 text-white md:pt-24 pt-8  md:pb-0 pb-8">
//             <p className="text-sm md:text-[17px] leading-relaxed text-justify ">
//               Set against the serene backdrop of Puri, a city steeped in
//               spirituality and heritage, the Puri Literary Festival 2025
//               celebrates India&apos;s enduring cultural legacy and its
//               progressive aspirations. Rooted in the philosophy of Samavāya—the
//               harmonious coexistence of tradition and modernity—the festival
//               seeks to inspire a holistic dialogue that bridges India&apos;s
//               ancient wisdom with its contemporary ambitions. The Puri Literary
//               Festival 2025 is an ode to the eternal cyclicity of time and
//               knowledge, a harmonious dialogue between the past and the future,
//               inspired by the sacred wheels of the Konark Sun Temple and the
//               divine Ratha of Lord Jagannath. These wheels symbolize the
//               perpetual motion of life, the ceaseless journey of humanity
//               through epochs, and the profound interplay of tradition and
//               transformation. Key objectives of the session are to reaffirm
//               Puri&apos;s spiritual and cultural legacy and to foster global
//               dialogue with an indigenous lens. At its core, the festival
//               embraces the belief that India&apos;s timeless wisdom and artistic
//               heritage serve not as relics of the past but as guiding lights for
//               the future. It is through this lens that the festival seeks to
//               explore how the nation can ascend to new pinnacles in art,
//               architecture, literature, and economic development while remaining
//               deeply rooted in its cultural ethos. The festival&apos;s impact
//               will extend far beyond the venue, with an outreach program
//               spanning every district of Odisha. Events including heritage
//               walks, folk art performances, and discussions on Odia literature
//               will ensure grassroots participation, rekindling pride in
//               Odisha&apos;s traditions. In schools and colleges, workshops and
//               storytelling sessions will inspire the youth, while expert-led
//               dialogues on environmental sustainability, digital literacy, and
//               cultural preservation. The culmination of these efforts will be a
//               “Vision for Tomorrow” document, encapsulating insights to guide
//               future policy and cultural initiatives. The Puri Literary Festival
//               2025 promises to be an enriching experience that echoes throughout
//               the state, inspiring a deeper connection with India&apos;s
//               cultural roots while embracing a modern, forward-thinking world.
//             </p>
//           </div>
//         </div>

//         <div className="absolute bottom-0 ">
//           <Image
//             src="/centercurved.png"
//             alt="Decorative element"
//             width={600}
//             height={600}
//             className="block md:hidden w-ful h-44l "
//           />
//         </div>
//       </div>

//       {/* text */}
//       <div className="flex items-center justify-center min-h-[60vh] md:min-h-[80vh] text-center flex-col relative">
//         <Image
//           src="/rider.svg"
//           alt="Decorative element"
//           width={390}
//           height={520}
//           className="absolute top-0 md:-top-60 left-0 z-20 size-40 md:size-130 inset-0"
//         />
//         <Image
//           src="/booksway.svg"
//           alt="Decorative element"
//           width={384}
//           height={512}
//           className="absolute bottom-0 md:-bottom-50 right-0 z-20 size-40 md:size-120"
//         />
//         <h1 className="text-[#2F3082] text-xl md:text-4xl font-semibold font-eb-garamond  ">
//           Weaving stories of
//         </h1>
//         <h1 className="text-xl md:text-4xl font-semibold font-eb-garamond  ">
//           <span className="text-[#D72327] block md:inline font-semibold font-eb-garamond ">
//             Tradition,
//           </span>
//           <span className="text-[#F5C721] font-semibold font-eb-garamond ">
//             Transformation,
//           </span>
//           <span className="text-[#2F3082] font-semibold font-eb-garamond ">
//             &
//           </span>
//           <span className="text-[#3E8D19] block md:inline font-semibold font-eb-garamond ">
//             Triumph!
//           </span>
//         </h1>
//       </div>

//       <div className="relative w-full min-h-[145vh] flex items-center justify-center overflow-hidden">
//         {/* Background Image - EDIT: Replace with your actual background image */}
//         <Image
//           src="/foundingbg2.png"
//           alt="Background"
//           layout="fill"
//           objectFit="cover"
//           className="md:block hidden absolute inset-0 -z-10"
//           priority
//         />
//         <Image
//           src="/mobilefoundingbg2.svg"
//           alt="Background"
//           layout="fill"
//           objectFit="cover"
//           className="block md:hidden absolute inset-0 -z-10"
//           priority
//         />

//         {/* Content Container */}
//         <div className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">
//           {/* Founding Title with Decorative Elements */}
//           <div className="flex justify-center items-center gap-2 mb-4">
//             {/* EDIT: Replace with your actual decorative image */}
//             <Image
//               src="/shank.svg"
//               alt="Decorative element"
//               width={60}
//               height={150}
//               className="w-8 sm:w-10 md:w-12 lg:w-16"
//             />
//             {/* EDIT: Change the title text if needed */}
//             <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-[#FFC40C] font-leckerli">
//               Founding
//             </h1>
//             {/* EDIT: Replace with your actual decorative image */}
//             <Image
//               src="/shank.svg"
//               alt="Decorative element"
//               width={60}
//               height={150}
//               className="w-8 sm:w-10 md:w-12 lg:w-16 scale-x-[-1]"
//             />
//           </div>

//           {/* Director Title - EDIT: Change the title text if needed */}
//           <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-[#FFC40C] font-leckerli md:mb-12">
//             Director
//           </h1>

//           {/* Polaroid-style photo cards */}
//           <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-16 w-full pt-12">
//             {directors.map((director, index) => (
//               <div
//                 key={index}
//                 className="mb-8 md:mb-0"
//                 style={{
//                   transform: `rotate(${director.rotation})`,
//                 }}
//               >
//                 {/* EDIT: Adjust polaroid card dimensions here if needed */}
//                 <div className="bg-white p-2 shadow-lg w-44 md:w-72">
//                   {/* Red background with photo - EDIT: Change background color if needed */}
//                   <div className="relative bg-red-600 w-full aspect-square mb-1 md:mb-4">
//                     <Image
//                       src={director.image}
//                       alt={`${director.name} ${director.surname}`}
//                       layout="fill"
//                       objectFit="cover"
//                       className="" // EDIT: Adjust image effects if needed
//                     />
//                   </div>

//                   {/* Name text - EDIT: Adjust text styling if needed */}
//                   <div className="text-center pb-2">
//                     <p className="text-sm font-serif font-semibold">
//                       {director.name}
//                     </p>
//                     <p className="text-sm font-serif font-semibold">
//                       {director.surname}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="">
//         {/* bg-[#ECCA19] */}
//         {/* Team Heading */}
//         <h1 className="text-[#2F3082] text-3xl sm:text-4xl md:text-5xl font-bold text-center pt-30 font-leckerli">
//           Team
//         </h1>

//         {/* Directors Grid */}
//         <div className="pt-12 px-6 md:mx-42 ">
//           {team.length > 0 && (
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
//               {team.map((member, index) => (
//                 <div
//                   key={index}
//                   className="flex justify-center"
//                   style={{ transform: `rotate(${member.rotation})` }}
//                 >
//                   <div className="bg-white p-4 shadow-lg w-48 md:w-64">
//                     <div className="relative bg-[#2F3087] w-full aspect-square mb-4">
//                       <Image
//                         src={member.image}
//                         alt={`${member.name} ${member.surname}`}
//                         layout="fill"
//                         objectFit="cover"
//                       />
//                     </div>
//                     <div className="text-center pb-2">
//                       <p className="text-sm md:text-xl font-serif font-semibold">
//                         {member.name}
//                       </p>
//                       <p className="text-sm md:text-xl font-serif font-semibold">
//                         {member.surname}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default page;

"use client";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";

const page = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const fadeIn2 = (rotation: string): Variants => ({
    hidden: { opacity: 0, y: 50, rotate: rotation },
    visible: {
      opacity: 1,
      y: 0,
      rotate: rotation,
      transition: { duration: 0.8 },
    },
  });

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
      rotation: "2deg",
      instagram:
        "https://www.instagram.com/pradhyumnamalpani?igsh=dzIwa2lrN3JyaWJj", // Replace with actual image path
    },
    {
      name: "Mahendra Singh Sekhala",
      surname: "Sekhala",
      image: "/mahendrasingh.svg",
      rotation: "-1.5deg",
      instagram:
        " https://www.instagram.com/jnu_mahendra?igsh=MWdzNGhxd3F0c293YQ==", // Replace with actual image path
    },

    {
      name: "Hema",
      surname: "Thakur",
      image: "/hemathakur.svg",
      rotation: "-1.5deg",
      // Replace with actual image path
    },
    {
      name: "Tejaswi",
      surname: "Singh",
      image: "/tejaswisingh.svg",
      rotation: "1.5deg",
      instagram:
        "https://www.instagram.com/tejaswisingh_?igsh=ZmNlMTNta2k4dXJr",
      // Replace with actual image path
    },
    {
      name: "Mrunmayee Prasad",
      surname: "Chitale",
      image: "/mrunmayeeprasad.svg",
      rotation: "-1.5deg",
      instagram:
        "https://www.instagram.com/mrunmayee_prasad_chitale?igsh=MWUya21ycjFwNmE2eg%3D%3D&utm_source=qr", // Replace with actual image path
    },
    {
      name: "Siri",
      surname: "Siriam",
      image: "/srisriram.svg",
      rotation: "1.5deg",
      instagram: "https://www.instagram.com/chalk.cheer?igsh=b3dkZXI1a2R6a2ts", // Replace with actual image path
    },
    {
      name: "Sumanya",
      surname: "Kashyap",
      image: "/sumanyakashyap.svg",
      rotation: "-1.5deg",
      instagram:
        "https://www.instagram.com/sukanya_sumanya?igsh=MTR6bTNpMW10b2YxdQ==", // Replace with actual image path
    },
    {
      name: "Aswathy",
      surname: "Hariharan",
      image: "/awasthyahariharan.svg",
      rotation: "-1.5deg", // Replace with actual image path
      instagram:
        "https://www.instagram.com/achu.hari_5?igsh=MXU3Mmc4eHV1M3cwaw==",
    },
    {
      name: "Pawan Singh",
      surname: "Butat",
      image: "/pawansinghbutat.svg",
      rotation: "1.5deg", // Replace with actual image path
      instagram:
        "https://www.instagram.com/pawan_singh_butati?igsh=eHE3OTk4NDN0djMy",
    },
    {
      name: "Pratyush ",
      surname: "Debasish",
      image: "/pratyushdebasish.svg",
      rotation: "1.5deg",
      instagram:
        "https://www.instagram.com/inkofpratyush?igsh=MXZ4aDlhbG1lZzljYw==",
    }, // Replace with actual image path
  ];

  return (
    <div className="relative pt-22 inset-0 overflow-x-hidden">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="hidden hero-bg bg-center bg-cover bg-no-repeat min-h-[30vh] h-[34vh] md:flex md:flex-col items-center justify-start relative"
      >
         <Image
    className="size-30 xl:size-52"
      src="/mainpage/logo.svg"
      alt="Festival logo"
       width={127}
      height={52}
      />
      </motion.div>
      <div className="md:hidden hero-bg-mobile bg-center bg-cover bg-no-repeat h-[21vh] w-full flex flex-col justify-center items-center relative">
        {/* Logo image */}
        <Image
          src="/centermobilelogo.png"
          alt="Festival logo"
          width={67}
          height={67}
          className="object-cover w-20 "
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
      <h1 className="font-leckerli font-bold text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-[#D72327] text-center md:mt-10 lg:mt-0 mb-25  md:mb-60">
        About us
      </h1>

     

      {/* our philosophy */}

      <div className="relative w-full flex flex-col items-center justify-center">
        <div className="absolute w-full h-30 md:h-40 lg:h-80 xl:h-110 aboutHero bg-center bg-cover bg-no-repeat -top-[5%] md:-top-[18%] xl:-top-[30%] z-[50]"></div>
        {/* Background Image */}
        <Image
          src="/redbgabout.png"
          alt="About Us Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 -z-10 hidden md:block "
        />

        {/* Content Wrapper */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="relative bg-[#D72327] md:bg-transparent  w-full max-w-7xl min-h-screen px-6 md:px-8 lg:px-4 flex flex-col md:flex-row items-center md:items-start md:gap-8 my-2 py-16 md:pt-26 "
        >
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFC40C] font-leckerli justify-center">
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
            <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-[#FFC40C] font-leckerli justify-center md:block hidden">
              Philosophy
            </h1>

            {/* for mobile */}
            <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-[#FFC40C] font-leckerli justify-center md:hidden ">
              Our
            </h1>
            <div className=" items-center gap-2 mb-4 md:hidden flex ">
              <Image
                src="/shank.svg"
                alt="Decorative element"
                width={60}
                height={150}
                className="w-10 md:w-16 lg:w-10"
              />
              <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-[#FFC40C] font-leckerli justify-center">
                Philosophy
              </h1>

              <Image
                src="/shank.svg"
                alt="Decorative element"
                width={60}
                height={150}
                className="w-10 md:w-10 lg:w-10 scale-x-[-1]"
              />
            </div>

            <h2 className="text-[#2F3082] md:bg-transparent text-sm md:text-2xl font-semibold md:text-white md:mt-8 text-center md:text-left">
              पुरुषोत्तम क्षेत्रं वैकुण्ठस्य सदृशं।
            </h2>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-2/3 text-white md:pt-24 pt-8  md:pb-0 pb-8">
            <p className="text-xs md:text-[17px]  text-justify ">
              Set against the serene backdrop of Puri, a city steeped in
              spirituality and heritage, the Puri Literary Festival 2025
              celebrates India&apos;s enduring cultural legacy and its
              progressive aspirations. Rooted in the philosophy of पुरुषोत्तम क्षेत्रं वैकुण्ठस्य सदृशं। —the
              harmonious coexistence of tradition and modernity—the festival
              seeks to inspire a holistic dialogue that bridges India&apos;s
              ancient wisdom with its contemporary ambitions. The Puri Literary
              Festival 2025 is an ode to the eternal cyclicity of time and
              knowledge, a harmonious dialogue between the past and the future,
              inspired by the sacred wheels of the Konark Sun Temple and the
              divine Ratha of Lord Jagannath. These wheels symbolize the
              perpetual motion of life, the ceaseless journey of humanity
              through epochs, and the profound interplay of tradition and
              transformation.</p><br />
              <p className="text-xs md:text-[17px] d text-justify ">Key objectives of the session are to reaffirm Puri&apos;s
              spiritual and cultural legacy and to foster global dialogue with
              an indigenous lens. At its core, the festival embraces the belief
              that India&apos;s timeless wisdom and artistic heritage serve not
              as relics of the past but as guiding lights for the future. It is
              through this lens that the festival seeks to explore how the
              nation can ascend to new pinnacles in art, architecture,
              literature, and economic development while remaining deeply rooted
              in its cultural ethos.</p><br />

              <p className="text-xs md:text-[17px]  text-justify ">The festival&apos;s impact will extend far beyond the
              venue, with an outreach program spanning every district of Odisha.
              Events including heritage walks, folk art performances, and
              discussions on Odia literature will ensure grassroots
              participation, rekindling pride in Odisha&apos;s traditions. In
              schools and colleges, workshops and storytelling sessions will
              inspire the youth, while expert-led dialogues on environmental
              sustainability, digital literacy, and cultural preservation.</p><br />
              <p className="text-xs md:text-[17px] text-justify ">The culmination of these efforts will be a “Vision for
              Tomorrow” document, encapsulating insights to guide future policy
              and cultural initiatives. The Puri Literary Festival 2025 promises
              to be an enriching experience that echoes throughout the state,
              inspiring a deeper connection with India&apos;s cultural roots
              while embracing a modern, forward-thinking world.
            </p>
          </div>
        </motion.div>

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
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-center min-h-[60vh] md:min-h-[80vh] text-center flex-col relative"
      >
        <Image
          src="/rider.svg"
          alt="Decorative element"
          width={390}
          height={520}
          className="absolute top-0 md:-top-60 left-0 z-20 size-40 md:size-130 inset-0"
        />
        <Image
          src="/booksway.svg"
          alt="Decorative element"
          width={384}
          height={512}
          className="absolute bottom-0 md:-bottom-50 right-0 z-20 size-40 md:size-120"
        />
        <h1 className="text-[#2F3082] text-xl md:text-4xl font-semibold font-ebGaramond  ">
          Weaving stories of
        </h1>
        <h1 className="text-xl md:text-4xl font-semibold font-ebGaramond ">
          <span className="text-[#D72327] block md:inline font-semibold font-ebGaramond">
            Tradition,{" "}
          </span>
          <span className="text-[#F5C721] font-semibold font-ebGaramond">
            Transformation,{" "}
          </span>
          <span className="text-[#2F3082] font-semibold font-ebGaramond ">
            &{" "}
          </span>
          <span className="text-[#3E8D19] block md:inline font-semibold font-eb-garamond ">
            Triumph!{" "}
          </span>
        </h1>
      </motion.div>

      <div className="relative w-full min-h-[155vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - EDIT: Replace with your actual background image */}
        <Image
          src="/foundingbg2.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="md:block hidden absolute inset-0 -z-10"
          priority
        />
        <Image
          src="/mobilefoundingbg2.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="block md:hidden absolute inset-0 -z-10"
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
            <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-[#FFC40C] font-leckerli">
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
          <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-[#FFC40C] font-leckerli md:mb-12">
            Director
          </h1>

          {/* Polaroid-style photo cards */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-16 w-full pt-12">
            {directors.map((director, index) => (
              <motion.div
                key={index}
                variants={fadeIn2(director.rotation)} // Pass the rotation dynamically
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* EDIT: Adjust polaroid card dimensions here if needed */}
                <div className="bg-white p-2 shadow-lg w-44 md:w-72">
                  {/* Red background with photo - EDIT: Change background color if needed */}
                  <div className="relative bg-red-600 w-full aspect-square mb-1 md:mb-4">
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
                    <p className="text-sm md:text-xl  font-serif ">
                      {director.name}
                    </p>
                    <p className="text-sm md:text-xl font-serif ">
                      {director.surname}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className=" mx-2 md:mx-0 b-22  md:mt-0 relative ">
        {/* bg-[#ECCA19] */}
        {/* Team Heading */}
        <h1 className="text-[#2F3082] text-3xl sm:text-4xl md:text-5xl font-bold text-center pt-30 font-leckerli">
          Team
        </h1>

        <Image
          src="/bookflyingkid.svg"
          alt="Decorative element"
          width={384}
          height={512}
          className="absolute top-0 md:-top-20 right-0 z-20 size-25 md:size-60"
        />
         <Image
          src="/bookstackabus.svg"
          alt="Decorative element"
          width={384}
          height={512}
          className="absolute -bottom-20 md:-bottom-40  -left-3 md:left-0 z-20 size-20 md:size-35"
        />

        {/* Directors Grid */}
        <div className=" md:mx-42 justify-center  mt-12 md:mt-14 ">
          {team.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn2(member.rotation)} // Pass the rotation dynamically
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <div className="bg-white p-4 shadow-lg w-38 md:w-64">
                    <a
                      href={member.instagram} // Instagram link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full "
                    >
                      <div className="relative bg-[#2F3087] w-full aspect-square mb-4">
                        <Image
                          src={member.image}
                          alt={`${member.name} ${member.surname}`}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="text-center pb-2">
                        <p className="text-sm md:text-xl font-serif ">
                          {member.name}
                        </p>
                        <p className="text-sm md:text-xl font-serif ">
                          {member.surname}
                        </p>
                      </div>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
