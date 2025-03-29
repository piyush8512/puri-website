// import React from "react";
// import Image from "next/image";
// import Footer from "@/components/Footer";

// const page = () => {
//   return (
//     <div className="relative pt-16 inset-0 overflow-x-hidden items-center justify-center w-full">
//       {/* header */}
//       <div className="hidden hero-bg bg-center bg-cover bg-no-repeat min-h-[30vh] h-[30vh] md:flex md:flex-col items-center justify-start relative w-full">
//         <Image
//           src="/partnersDate.svg"
//           alt="Festival logo"
//           width={127}
//           height={52}
//           className="object-contain min-w-xl w-120 h-100"
//         />
//       </div>
//       <div className="md:hidden hero-bg-mobile bg-center bg-cover bg-no-repeat h-[21vh] w-full flex flex-col justify-center items-center relative">
//         <Image
//           src="/mobilePartnersDate.svg"
//           alt="Festival logo"
//           width={67}
//           height={67}
//           className="object-cover w-50 sm:w-75"
//         />
//       </div>

//       {/* Titles */}
//       <div className="w-full flex flex-col items-center">
//         <h1 className="font-leckerli text-xl md:text-6xl lg:text-5xl xl:text-5xl text-[#D72327] text-center md:mt-3 lg:mt-18 lg:mb-0">
//           Special
//         </h1>
//         <h1 className="font-leckerli text-3xl md:text-6xl lg:text-8xl xl:text-8xl text-[#ECCA19] text-center">
//           Features
//         </h1>
//       </div>

//       {/* Intro paragraph */}
//       <div className="w-full px-4 md:px-0">
//         <p className="text-[10px] md:text-xl lg:text-xl xl:text-xl text-center mt-10 md:mt-15 lg:mt-12 mb-10 lg:mb-20 md:mx-60 w-7/9 mx-auto">
//           The Puri Literary Festival 2025 is dedicated to creating an inclusive
//           and accessible environment where people from all backgrounds,
//           abilities, and socio-economic standings can come together to celebrate
//           literature, culture, and heritage. We believe that these elements
//           should be shared by everyone, regardless of their circumstances. The
//           festival is particularly focused on providing financial and cultural
//           support to Odisha&apos;s Particularly Vulnerable Tribal Groups (PVTGs)
//           and indigenous artists.
//         </p>
//       </div>

//       {/* yellowsecondsection */}
//       <div className="relative w-full md:h-250 h-170 flex md:items-center justify-center">
//         {/* White top overlay */}

//         {/* Yellow Background */}
//         <div className="absolute z-10 w-full h-full">
//           <Image
//             src="/activities/yellowbg1.svg"
//             alt="Yellow Background"
//             layout="fill"
//             objectFit="cover"
//             objectPosition="center"
//             quality={100}
//             priority
//             className="md:block hidden"
//           />
//           <Image
//             src="/activities/mobileyellowbg.svg"
//             alt="Yellow Background"
//             layout="fill"
//             objectFit="cover"
//             objectPosition="center"
//             quality={100}
//             priority
//             className="md:hidden"
//           />
//         </div>

//         {/* Content */}
//         <div className="relative z-10 px-2 md:px-8 lg:px-16 py-0 md:py-12 w-full">
//           <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-4 md:px-16 my-25 md:mt-0 w-full relative">
//             {/* Heading */}
//             <div className="w-full lg:w-1/3 text-center lg:text-center">
//               <h1 className="text-xl md:text-xl lg:text-3xl font-bold text-[#D72327] md:mb-0 md:my-0 lg:mb-0">
//                 Tribal Stalls &
//                 <br className="hidden lg:block" />
//                 Local Indigenous
//                 <br className="hidden lg:block" />
//                 Artisan Showcases
//               </h1>
//             </div>

//             {/* Paragraph */}
//             <div className="w-2/3 lg:w-2/3 text-[10px] md:text-xl lg:text-xl text-gray-700 md:leading-relaxed text-justify">
//               <p>
//                 Nestled amidst the pages of literature, a vibrant tapestry of
//                 Odisha&apos;s ancestral artistry awaits you. The Puri Literary
//                 Festival proudly unveils dedicated spaces where the PVTG
//                 artisans and tribal entrepreneurs of our land can unfurl the
//                 rich, untold stories woven into their crafts, textiles, and
//                 handlooms. These masterpieces—handcrafted with love and rooted
//                 in centuries of tradition—offer more than just art; they offer a
//                 lifeline to a community, preserving an ancestral heritage while
//                 nurturing economic independence. From intricate beadwork to
//                 vibrant tapestries, each creation is a testament to the spirit
//                 and resilience of Odisha&apos;s indigenous people. Here,
//                 visitors will not only feast their eyes on beauty but also take
//                 home a piece of history, woven with tradition and authenticity.
//                 In celebrating these artisans, we cherish both their culture and
//                 their stories, ensuring that their legacy continues to thrive.
//               </p>
//             </div>
            
//           </div>
//         </div>

//         {/* Illustrations */}
//         <div className="absolute -top-[11%] left-0 md:-top-80 md:-left-20 sm:-left-10 -z-10 w-22 sm:w-36 md:w-48 lg:w-86 -rotate-15">
//               <Image
//                 src="/activities/bookbulb.svg"
//                 alt="Book Bulb Illustration"
//                 layout="responsive"
//                 width={200}
//                 height={200}
//               />
//             </div>
//             <div className="absolute -top-[6%] right-0 md:-top-30 md:-right-0 sm:-right-0 -z-10 w-24 sm:w-36 md:w-48 lg:w-86">
//               <Image
//                 src="/activities/mankid.svg"
//                 alt="Man Kid Illustration"
//                 layout="responsive"
//                 width={200}
//                 height={200}
//               />
//             </div>
//         <div className="absolute bottom-24 left-0 sm:left-8 z-20 w-24 sm:w-36 md:w-48 lg:w-56">
//           <Image
//             src="/activities/houseillus.svg"
//             alt="House Illustration"
//             layout="responsive"
//             width={200}
//             height={200}
//             className="hidden md:block"
//           />
//         </div>
//         <div className="absolute bottom-34 right-0 sm:right-8 z-20 w-24 sm:w-36 md:w-48 lg:w-56">
//           <Image
//             src="/activities/shopillus.svg"
//             alt="Shop Illustration"
//             layout="responsive"
//             width={200}
//             height={200}
//             className="hidden md:block"
//           />
//         </div>
//       </div>

//       {/* whitesection */}
//       <div className="relative w-full md:h-[70vh] flex items-center justify-center py-20 md:pb-25">
//         <div className="container mx-auto px-2 text-center w-full">
//           <div className="max-w-4xl mx-auto md:px-0 px-4">
//             <div className="max-w-4xl mx-auto flex items-center justify-center">
//               <Image
//                 src="leftgoldenflag.svg"
//                 alt="Golden Flag"
//                 width={50}
//                 height={200}
//                 className="mx-auto mb-4"
//               />
//               <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#2F3082] mb-6 px-2">
//                 Inaugural PLF <br />
//                 Book of the Year Awards 2024
//               </h1>
//               <Image
//                 src="rightgoldenflag.svg"
//                 alt="Golden Flag"
//                 width={50}
//                 height={200}
//                 className="mx-auto mb-4"
//               />
//             </div>

//             <p className="text-xs md:text-base lg:text-lg text-gray-700 leading-relaxed px-4 md:px-0">
//               As the sun sets on the golden shores of Puri, a new dawn for
//               literature emerges—one of celebration, recognition, and
//               brilliance. The PLF Book of the Year Awards 2024 will shine a
//               spotlight on the finest literary creations of our time. Across a
//               spectrum of genres, including Fantasy, Thriller, Historical
//               Fiction, Romance, Women&apos;s Fiction, Children&apos;s & YA,
//               Biography, Self-Help, Travel, Religion & Spirituality, and Society
//               & Politics, we will honor the pioneers of the written word. But
//               the night will also hold a special honor: the Emerging Author of
//               the Year Award, a tribute to the new voices making waves in the
//               literary world. These awards will not only applaud those who have
//               shaped the literary landscape but will also ignite the passions of
//               future storytellers who are yet to be discovered.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* yellowsection */}
//       <div className="relative w-full md:h-260 h-120 flex items-center justify-center">
//         <div className="absolute inset-0 z-0 w-full h-full">
//           <Image
//             src="/activities/yellowbg3.svg"
//             alt="Yellow Background"
//             layout="fill"
//             objectFit="cover"
//             objectPosition="center"
//             quality={100}
//             className="md:block hidden"
//             priority
//           />
//         </div>
//         <div className="absolute inset-0 z-0 w-full h-full">
//           <Image
//             src="/activities/mobilesecondbg.svg"
//             alt="Yellow Background"
//             layout="fill"
//             objectFit="cover"
//             className="md:hidden"
//             objectPosition="center"
//             quality={100}
//             priority
//           />
//         </div>

//         <div className="relative z-10 px-0 md:px-8 lg:px-24 w-full">
//           <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14 md:px-20 px-4 w-full">
//             {/* Heading */}
//             <div className="w-full lg:w-1/3 text-center lg:text-center px-4">
//               <h1 className="text-xl md:text-xl lg:text-4xl font-bold text-[#D72327] md:mb-0 md:my-0 lg:mb-0">
//                 Showcase by Leading
//                 <br className="" />
//                 Indian Publishing Houses
//               </h1>
//             </div>

//             {/* Paragraph */}
//             <div className="w-full lg:w-2/3 text-xs md:text-2xl lg:text-2xl text-gray-700 text-justify md:leading-relaxed md:px-0 px-4">
//               <p>
//                 Amidst the rhythm of literary discussions and the rustle of
//                 pages turning, the special stalls showcasing the crème de la
//                 crème of Indian publishing will offer an oasis for every book
//                 lover. Here, the leading publishing houses of India will unfold
//                 their treasure troves of stories, spanning the breadth of genres
//                 and realms, from timeless classics to cutting-edge new releases.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Illustrations */}
//         <div className="absolute -top-16 md:-top-25 left-1/2 transform -translate-x-1/2 -z-20 w-18 sm:w-36 md:w-48 lg:w-46">
//           <Image
//             src="/activities/trophy.svg"
//             alt="Trophy Illustration"
//             layout="responsive"
//             width={250}
//             height={200}
//           />
//         </div>
//         <div className="absolute -top-[14%] md:-top-40 -left-6 sm:right-8 -z-10 w-18 sm:w-36 md:w-48 lg:w-46">
//           <Image
//             src="/activities/bookstack.png"
//             alt="Book Stack Illustration"
//             layout="responsive"
//             width={150}
//             height={200}
//           />
//         </div>
//         <div className="absolute md:top-5 -top-[2%] right-0 sm:right-8 z-20 w-24 sm:w-36 md:w-48 lg:w-86">
//           <Image
//             src="/activities/kidbook.png"
//             alt="Kid Book Illustration"
//             layout="responsive"
//             width={250}
//             height={200}
//           />
//         </div>
//         <div className="absolute -bottom-[2%] md:bottom-24 left-0 sm:left-0 z-20 w-24 sm:w-36 md:w-48 lg:w-56">
//           <Image
//             src="/activities/flyingfemale.png"
//             alt="Flying Female Illustration"
//             layout="responsive"
//             width={200}
//             height={200}
//           />
//         </div>
//         <div className="absolute md:bottom-6 -bottom-[2%] right-0 sm:right-8 z-20 w-20 sm:w-36 md:w-48 lg:w-56">
//           <Image
//             src="/activities/bookstore.svg"
//             alt="Bookstore Illustration"
//             layout="responsive"
//             width={200}
//             height={200}
//           />
//         </div>
//       </div>

//       {/* Download brochure */}
//       <div className="relative w-full md:h-[70vh] h-[40vh] flex items-center justify-center">
//         <div className="flex flex-col items-center relative">
//         <Image
//   src="/activities/flyinggirl.svg"
//   alt="Flying Girl"
//   width={150}
//   height={200}
//   className="absolute -top-20 -left-16 md:-top-35 md:-left-30 w-[100px] sm:w-[120px] md:w-[150px] lg:w-[200px]"
// />

//           <div className="bg-[#303182] rounded-full flex items-center justify-center px-8 py-3">
//             <p className="text-[#FFFCF5] text-xs md:text-xl lg:text-2xl font-bold font-leckerli">
//               Download Brochure
//             </p>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default page;


'use client';
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Page = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    }
  };

  return (
    <div className="relative pt-16 inset-0 overflow-x-hidden items-center justify-center w-full">
      {/* header */}
      <motion.div 
        className="hidden hero-bg bg-center bg-cover bg-no-repeat min-h-[30vh] h-[30vh] md:flex md:flex-col items-center justify-start relative w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <Image
          src="/partnersDate.svg"
          alt="Festival logo"
          width={127}
          height={52}
          className="object-contain min-w-xl w-120 h-100"
        />
      </motion.div>
      <motion.div 
        className="md:hidden hero-bg-mobile bg-center bg-cover bg-no-repeat h-[21vh] w-full flex flex-col justify-center items-center relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <Image
          src="/mobilePartnersDate.svg"
          alt="Festival logo"
          width={67}
          height={67}
          className="object-cover w-50 sm:w-75"
        />
      </motion.div>

      {/* Titles */}
      <motion.div 
        className="w-full flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h1 className="font-leckerli text-xl md:text-6xl lg:text-5xl xl:text-5xl text-[#D72327] text-center md:mt-3 lg:mt-18 lg:mb-0">
          Special
        </h1>
        <h1 className="font-leckerli text-3xl md:text-6xl lg:text-8xl xl:text-8xl text-[#ECCA19] text-center">
          Features
        </h1>
      </motion.div>

      {/* Intro paragraph */}
      <motion.div 
        className="w-full px-4 md:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <p className="text-[10px] md:text-xl lg:text-xl xl:text-xl text-center mt-10 md:mt-15 lg:mt-12 mb-10 lg:mb-20 md:mx-60 w-7/9 mx-auto">
          The Puri Literary Festival 2025 is dedicated to creating an inclusive
          and accessible environment where people from all backgrounds,
          abilities, and socio-economic standings can come together to celebrate
          literature, culture, and heritage. We believe that these elements
          should be shared by everyone, regardless of their circumstances. The
          festival is particularly focused on providing financial and cultural
          support to Odisha&apos;s Particularly Vulnerable Tribal Groups (PVTGs)
          and indigenous artists.
        </p>
      </motion.div>

      {/* yellowsecondsection */}
      <div className="relative w-full md:h-250 h-170 flex md:items-center justify-center">
        {/* White top overlay */}

        {/* Yellow Background */}
        <div className="absolute z-10 w-full h-full">
          <Image
            src="/activities/yellowbg1.svg"
            alt="Yellow Background"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center"
            }}
            quality={100}
            priority
            className="md:block hidden"
          />
          <Image
            src="/activities/mobileyellowbg.svg"
            alt="Yellow Background"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center"
            }}
            quality={100}
            priority
            className="md:hidden"
          />
        </div>

        {/* Content */}
        <motion.div 
          className="relative z-10 px-2 md:px-8 lg:px-16 py-0 md:py-12 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-4 md:px-16 my-25 md:mt-0 w-full relative">
            {/* Heading */}
            <div className="w-full lg:w-1/3 text-center lg:text-center">
              <h1 className="text-xl md:text-xl lg:text-3xl font-extrabold --font-eb-garamond text-[#D72327] md:mb-0 md:my-0 lg:mb-0">
                Tribal Stalls &
                <br className="hidden lg:block" />
                Local Indigenous
                <br className="hidden lg:block" />
                Artisan Showcases
              </h1>
            </div>

            {/* Paragraph */}
            <div className="w-2/3 lg:w-2/3 text-[10px] md:text-xl lg:text-xl text-gray-700 md:leading-relaxed text-justify">
              <p>
                Nestled amidst the pages of literature, a vibrant tapestry of
                Odisha&apos;s ancestral artistry awaits you. The Puri Literary
                Festival proudly unveils dedicated spaces where the PVTG
                artisans and tribal entrepreneurs of our land can unfurl the
                rich, untold stories woven into their crafts, textiles, and
                handlooms. These masterpieces—handcrafted with love and rooted
                in centuries of tradition—offer more than just art; they offer a
                lifeline to a community, preserving an ancestral heritage while
                nurturing economic independence. From intricate beadwork to
                vibrant tapestries, each creation is a testament to the spirit
                and resilience of Odisha&apos;s indigenous people. Here,
                visitors will not only feast their eyes on beauty but also take
                home a piece of history, woven with tradition and authenticity.
                In celebrating these artisans, we cherish both their culture and
                their stories, ensuring that their legacy continues to thrive.
              </p>
            </div>
            
          </div>
        </motion.div>

        {/* Illustrations */}
        <motion.div 
          className="absolute -top-[11%] left-0 md:-top-80 md:-left-20 sm:-left-10 -z-10 w-22 sm:w-36 md:w-48 lg:w-86 -rotate-15"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Image
            src="/activities/bookbulb.svg"
            alt="Book Bulb Illustration"
            width={200}
            height={200}
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </motion.div>
        <motion.div 
          className="absolute -top-[6%] right-0 md:-top-30 md:-right-0 sm:-right-0 -z-10 w-24 sm:w-36 md:w-48 lg:w-86"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Image
            src="/activities/mankid.svg"
            alt="Man Kid Illustration"
            width={200}
            height={200}
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </motion.div>
        <motion.div 
          className="absolute bottom-24 left-0 sm:left-8 z-20 w-24 sm:w-36 md:w-48 lg:w-56"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Image
            src="/activities/houseillus.svg"
            alt="House Illustration"
            width={200}
            height={200}
            style={{
              width: '100%',
              height: 'auto'
            }}
            className="hidden md:block"
          />
        </motion.div>
        <motion.div 
          className="absolute bottom-34 right-0 sm:right-8 z-20 w-24 sm:w-36 md:w-48 lg:w-56"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Image
            src="/activities/shopillus.svg"
            alt="Shop Illustration"
            width={200}
            height={200}
            style={{
              width: '100%',
              height: 'auto'
            }}
            className="hidden md:block"
          />
        </motion.div>
      </div>

      {/* whitesection */}
      <motion.div 
        className="relative w-full md:h-[70vh] flex items-center justify-center py-20 md:pb-25"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-2 text-center w-full">
          <div className="max-w-4xl mx-auto md:px-0 px-4">
            <div className="max-w-4xl mx-auto flex items-center justify-center">
              <Image
                src="/activities/leftgoldenflag.svg"
                alt="Golden Flag"
                width={50}
                height={200}
                className="mx-auto mb-4"
              />
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#2F3082] font-eb mb-6 px-2">
                Inaugural PLF <br />
                Book of the Year Awards 2024
              </h1>
              <Image
                src="/activities/rightgoldenflag.svg"
                alt="Golden Flag"
                width={50}
                height={200}
                className="mx-auto mb-4"
              />
            </div>

            <p className="text-xs md:text-base lg:text-lg text-gray-700 leading-relaxed px-4 md:px-0">
              As the sun sets on the golden shores of Puri, a new dawn for
              literature emerges—one of celebration, recognition, and
              brilliance. The PLF Book of the Year Awards 2024 will shine a
              spotlight on the finest literary creations of our time. Across a
              spectrum of genres, including Fantasy, Thriller, Historical
              Fiction, Romance, Women&apos;s Fiction, Children&apos;s & YA,
              Biography, Self-Help, Travel, Religion & Spirituality, and Society
              & Politics, we will honor the pioneers of the written word. But
              the night will also hold a special honor: the Emerging Author of
              the Year Award, a tribute to the new voices making waves in the
              literary world. These awards will not only applaud those who have
              shaped the literary landscape but will also ignite the passions of
              future storytellers who are yet to be discovered.
            </p>
          </div>
        </div>
      </motion.div>

      {/* yellowsection */}
      <div className="relative w-full md:h-260 h-120 flex items-center justify-center">
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/activities/yellowbg3.svg"
            alt="Yellow Background"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center"
            }}
            quality={100}
            className="md:block hidden"
            priority
          />
        </div>
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/activities/mobilesecondbg.svg"
            alt="Yellow Background"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center"
            }}
            className="md:hidden"
            quality={100}
            priority
          />
        </div>

        <motion.div 
          className="relative z-10 px-0 md:px-8 lg:px-24 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-11 md:px-20 px-4 w-full">
            {/* Heading */}
            <div className="w-full lg:w-1/2 text-center lg:text-center px-4 font-eb">
              <h1 className="text-xl md:text-xl lg:text-4xl font-bold text-[#D72327] md:mb-0 md:my-0 lg:mb-0">
                Showcase by Leading
                <br className="" />
                Indian Publishing Houses
              </h1>
            </div>

            {/* Paragraph */}
            <div className="w-full lg:w-1/2 text-xs md:text-xl lg:text-xl text-gray-700 text-justify md:leading-relaxed md:px-0 px-4">
              <p>
                Amidst the rhythm of literary discussions and the rustle of
                pages turning, the special stalls showcasing the crème de la
                crème of Indian publishing will offer an oasis for every book
                lover. Here, the leading publishing houses of India will unfold
                their treasure troves of stories, spanning the breadth of genres
                and realms, from timeless classics to cutting-edge new releases.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Illustrations */}
        <motion.div 
          className="absolute -top-16 md:-top-25 left-1/2 transform -translate-x-1/2 -z-20 w-18 sm:w-36 md:w-48 lg:w-46"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Image
            src="/activities/trophy.svg"
            alt="Trophy Illustration"
            width={250}
            height={200}
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </motion.div>
        <motion.div 
          className="absolute -top-[14%] md:-top-40 -left-6 sm:right-8 -z-10 w-18 sm:w-36 md:w-48 lg:w-46"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Image
            src="/activities/bookstack.png"
            alt="Book Stack Illustration"
            width={150}
            height={200}
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </motion.div>
        <motion.div 
          className="absolute md:top-5 -top-[2%] right-0 sm:right-8 z-20 w-24 sm:w-36 md:w-48 lg:w-86"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Image
            src="/activities/kidbook.png"
            alt="Kid Book Illustration"
            width={250}
            height={200}
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </motion.div>
        <motion.div 
          className="absolute -bottom-[2%] md:bottom-24 left-0 sm:left-0 z-20 w-24 sm:w-36 md:w-48 lg:w-56"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Image
            src="/activities/flyingfemale.png"
            alt="Flying Female Illustration"
            width={200}
            height={200}
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </motion.div>
        <motion.div 
          className="absolute md:bottom-6 -bottom-[2%] right-0 sm:right-8 z-20 w-20 sm:w-36 md:w-48 lg:w-56"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Image
            src="/activities/bookstore.svg"
            alt="Bookstore Illustration"
            width={200}
            height={200}
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </motion.div>
      </div>

      {/* Download brochure */}
      <motion.div 
        className="relative w-full md:h-[50vh] h-[40vh] flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="flex flex-col items-center relative">
          <Image
            src="/activities/flyinggirl.svg"
            alt="Flying Girl"
            width={150}
            height={200}
            className="absolute -top-20 -left-16 md:-top-35 md:-left-30 w-[100px] sm:w-[120px] md:w-[150px] lg:w-[200px]"
          />

          <div className="bg-[#303182] rounded-full flex items-center justify-center px-8 py-3">
            <p className="text-[#FFFCF5] text-xs md:text-xl lg:text-2xl font-bold font-leckerli">
              Download Brochure
            </p>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Page;

