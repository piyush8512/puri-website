"use client";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import { Facebook, Instagram, Link, Twitter, Youtube } from "lucide-react";

const page = () => {
  const socialIcons = [
    { Icon: Facebook, link: "https://www.facebook.com/purilitfest" },
    { Icon: Twitter, link: "https://x.com/PuriLitFest" },
    { Icon: Instagram, link: "https://www.instagram.com/purilitfest" },
    { Icon: Youtube, link: "https://youtube.com/@purilitfest" },
  ];

  const footerLinks = {
    "About us": [
      "About The Festival",
      // "Teamwork Arts",
      "Contact Us",
      "Terms & Condition",
      // "Privacy & Policies",
      "FAQs",
    ],
    Events: ["Brochure", "Programs"],
    "Important Links": ["Volunteer", "Partner With Us"],
  };
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
      image: "/aboutus/ompriyadarshi.png",
      // Replace with actual image path
      about1:
        " Traversing across all states and more than 6,000 villages in India, Omm Priyadarshi has gained deep insights from the country’s diverse socio-economic fabric, establishing himself as a distinguished voice in development and policy advocacy.",
      about2:
        "He is the author of Paika: Jana, Akhyana O Andolana, and a recipient of the Prime Minister’s Young Author Award. ",
      about3:
        "He has helped shape policy at both national and global levels, having served as the Treasurer of the G20 Youth and represented India at prestigious international platforms, including BRICS and the Commonwealth. ",
    },
    {
      name: "Shivam",
      surname: "Raghuwanshi",
      image: "/aboutus/sheshankshekhar.png",
      // Replace with actual image path
      about1:
        "Shashank Shekhar Singh is at the forefront of transformative thinking with his brainchild, the Adhyayan Foundation for Policy & Research (AFPR), which operates at the trisection of law, governance, and policymaking.",
      about2:
        "A lawyer by profession, his expertise in data-driven policymaking, ethical governance, and sustainability has made him a sought-after consultant and advisor in India and abroad.",
      about3:
        "He is deeply committed to and actively engages in initiatives that safeguard linguistic heritage and promote cultural continuity",
    },
    {
      name: "Shashank Shekhar",
      surname: "Singh",
      image: "/aboutus/shivamraghuwanshi.png",
      // Replace with actual image path
      about1:
        "A lawyer advocating for the right causes at the Supreme Court of India, Shivam Raghuwanshi has risen to prominence through his exceptional academic and professional achievements despite his humble background.",
      about2:
        "He is the author of two best-selling books, with his latest work, Ballot, Bullet and Blood, receiving significant acclaim.",
      about3:
        "In addition to his legal career, he has made notable contributions to student leadership, serving as the National Co-convenor of Think India, a national organization focused on empowering youth across premier academic institutions.",
    },
  ];

  const team = [
    {
      name: "Pradhumna ",
      surname: "Malpani",
      image: "/aboutus/mahendrasing.png",
      rotation: "2deg",
      instagram:
        "https://www.instagram.com/pradhyumnamalpani?igsh=dzIwa2lrN3JyaWJj", // Replace with actual image path
    },
    {
      name: "Mahendra Singh Sekhala",
      surname: "Sekhala",
      image: "/aboutus/hemathakur.png",
      rotation: "-1.5deg",
      instagram:
        " https://www.instagram.com/jnu_mahendra?igsh=MWdzNGhxd3F0c293YQ==", // Replace with actual image path
    },

    {
      name: "Hema",
      surname: "Thakur",
      image: "/aboutus/pradhymnamalpani.png",
      rotation: "-1.5deg",
      // Replace with actual image path
    },
  ];

  const team2 = [
    {
      name: "Pradhumna ",
      surname: "Malpani",
      image: "/aboutus/tejaswisingh.png",
      rotation: "2deg",
      instagram:
        "https://www.instagram.com/pradhyumnamalpani?igsh=dzIwa2lrN3JyaWJj", // Replace with actual image path
    },
    {
      name: "Mahendra Singh Sekhala",
      surname: "Sekhala",
      image: "/aboutus/mrunmayeeprasadpng.png",
      rotation: "-1.5deg",
      instagram:
        " https://www.instagram.com/jnu_mahendra?igsh=MWdzNGhxd3F0c293YQ==", // Replace with actual image path
    },

    {
      name: "Hema",
      surname: "Thakur",
      image: "/aboutus/pratuyshdebashish.png",
      rotation: "-1.5deg",
      // Replace with actual image path
    },
    {
      name: "Pradhumna ",
      surname: "Malpani",
      image: "/aboutus/awasthihariharan.png",
      rotation: "2deg",
      instagram:
        "https://www.instagram.com/pradhyumnamalpani?igsh=dzIwa2lrN3JyaWJj", // Replace with actual image path
    },
    {
      name: "Mahendra Singh Sekhala",
      surname: "Sekhala",
      image: "/aboutus/sirisriram.png",
      rotation: "-1.5deg",
      instagram:
        " https://www.instagram.com/jnu_mahendra?igsh=MWdzNGhxd3F0c293YQ==", // Replace with actual image path
    },

    {
      name: "Hema",
      surname: "Thakur",
      image: "/aboutus/poojamundadamehta.png",
      rotation: "-1.5deg",
      // Replace with actual image path
    },
    {
      name: "Pradhumna ",
      surname: "Malpani",
      image: "/aboutus/rakeshbarik.png",
      rotation: "2deg",
      instagram:
        "https://www.instagram.com/pradhyumnamalpani?igsh=dzIwa2lrN3JyaWJj", // Replace with actual image path
    },
    {
      name: "Mahendra Singh Sekhala",
      surname: "Sekhala",
      image: "/aboutus/sumanyakashyap.png",
      rotation: "-1.5deg",
      instagram:
        " https://www.instagram.com/jnu_mahendra?igsh=MWdzNGhxd3F0c293YQ==", // Replace with actual image path
    },

    {
      name: "Hema",
      surname: "Thakur",
      image: "/aboutus/pawansinghbutati.png",
      rotation: "-1.5deg",
      // Replace with actual image path
    },
    {
      name: "Pradhumna ",
      surname: "Malpani",
      image: "/aboutus/ashutosh.png",
      rotation: "2deg",
      instagram:
        "https://www.instagram.com/pradhyumnamalpani?igsh=dzIwa2lrN3JyaWJj", // Replace with actual image path
    },
    {
      name: "Mahendra Singh Sekhala",
      surname: "Sekhala",
      image: "/aboutus/ridhiverma.png",
      rotation: "-1.5deg",
      instagram:
        " https://www.instagram.com/jnu_mahendra?igsh=MWdzNGhxd3F0c293YQ==", // Replace with actual image path
    },
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
       
      </div>

      <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center font-libreBodoni md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-[#D72327] font-bold mb-5"
        >
          18th APRIL - 20th APRIL <br /> 2025
        </motion.h1>
      <h1 className="font-leckerli font-bold text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-[#D72327] text-center md:mt-10 lg:mt-0 mb-25  md:mb-60">
        About us
      </h1>

      {/* our philosophy */}

      <div className="relative w-full flex flex-col items-center justify-center">
      <Image
          src="/aboutus/wierdanimal.png"
          alt="Decorative element"
          width={390}
          height={520}
          className="absolute  md:-top-50 -left-10 z-20 size-40 md:size-100 inset-0"
        />
        <Image
          src="/aboutus/aboutcenter.png"
          alt="Decorative element"
          width={290}
          height={220}
          className="absolute  md:-top-56  z-20  "
        />
        
        <Image
          src="/aboutus/wierdanimal.png"
          alt="Decorative element"
          width={390}
          height={520}
          className="absolute bottom-0 md:-top-55 -right-12 z-20 size-40 md:size-100  scale-x-[-1]"
        />
        <div className="absolute w-full h-30 md:h-40 lg:h-80 xl:h-110  bg-center bg-cover bg-no-repeat -top-[5%] md:-top-[18%] xl:-top-[30%] z-[50]">
        

        </div>
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
          <div className="  w-full md:w-1/3 flex flex-col items-center md:items-center md:text-left mt-0 md:mt-50 ">
            <div className=" items-center gap-2 mb-4 ml-6 md:flex hidden ">
              {/* <Image
                src="/shank.svg"
                alt="Decorative element"
                width={60}
                height={150}
                className="w-12 md:w-16 lg:w-10"
              /> */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFC40C] font-leckerli justify-center">
                Our
              </h1>
              {/* <Image
                src="/shank.svg"
                alt="Decorative element"
                width={60}
                height={150}
                className="w-12 md:w-10 lg:w-10 scale-x-[-1]"
              /> */}
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

            <h2 className="text-[#2F3082] md:bg-transparent text-sm md:text-4xl font-semibold md:text-white  text-center md:text-left flex justify-center items-center font-ebGaramond md:mt-2">
              Samavāya
            </h2>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-2/3 text-white md:pt-30 pt-8  md:pb-0 pb-8 ">
            <p className="text-xs md:text-[14px]  text-justify ">
              Set against the serene backdrop of Puri, a city steeped in
              spirituality and heritage, the Puri Literary Festival 2025
              celebrates India&apos;s enduring cultural legacy and its
              progressive aspirations. Rooted in the philosophy of पुरुषोत्तम
              क्षेत्रं वैकुण्ठस्य सदृशं। —the harmonious coexistence of
              tradition and modernity—the festival seeks to inspire a holistic
              dialogue that bridges India&apos;s ancient wisdom with its
              contemporary ambitions. The Puri Literary Festival 2025 is an ode
              to the eternal cyclicity of time and knowledge, a harmonious
              dialogue between the past and the future, inspired by the sacred
              wheels of the Konark Sun Temple and the divine Ratha of Lord
              Jagannath. These wheels symbolize the perpetual motion of life,
              the ceaseless journey of humanity through epochs, and the profound
              interplay of tradition and transformation.
            </p>
            <br />
            <p className="text-xs md:text-[14px] d text-justify ">
              Key objectives of the session are to reaffirm Puri&apos;s
              spiritual and cultural legacy and to foster global dialogue with
              an indigenous lens. At its core, the festival embraces the belief
              that India&apos;s timeless wisdom and artistic heritage serve not
              as relics of the past but as guiding lights for the future. It is
              through this lens that the festival seeks to explore how the
              nation can ascend to new pinnacles in art, architecture,
              literature, and economic development while remaining deeply rooted
              in its cultural ethos.
            </p>
            <br />

            <p className="text-xs md:text-[14px]  text-justify ">
              The festival&apos;s impact will extend far beyond the venue, with
              an outreach program spanning every district of Odisha. Events
              including heritage walks, folk art performances, and discussions
              on Odia literature will ensure grassroots participation,
              rekindling pride in Odisha&apos;s traditions. In schools and
              colleges, workshops and storytelling sessions will inspire the
              youth, while expert-led dialogues on environmental sustainability,
              digital literacy, and cultural preservation.
            </p>
            <br />
            <p className="text-xs md:text-[14px] text-justify ">
              The culmination of these efforts will be a “Vision for Tomorrow”
              document, encapsulating insights to guide future policy and
              cultural initiatives. The Puri Literary Festival 2025 promises to
              be an enriching experience that echoes throughout the state,
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

      {/* white section  part */}

      {/* text */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-center min-h-[60vh] md:min-h-[80vh] text-center flex-col relative"
      >
        {/* <Image
          src="/rider.svg"
          alt="Decorative element"
          width={390}
          height={520}
          className="absolute top-0 md:-top-60 left-0 z-20 size-40 md:size-130 inset-0"
        /> */}

        <Image
          src="/aboutus/leftelephant.svg"
          alt="Decorative element"
          width={390}
          height={520}
          className="absolute  md:top-115 -left-10 z-20 size-40 md:size-100 inset-0"
        />
        <Image
          src="/aboutus/leftelephant.svg"
          alt="Decorative element"
          width={390}
          height={520}
          className="absolute bottom-0 md:-bottom-35 -right-12 z-20 size-40 md:size-100  scale-x-[-1]"
        />

        {/*
        <Image
          src="/booksway.svg"
          alt="Decorative element"
          width={384}
          height={512}
          className="absolute bottom-0 md:-bottom-50 right-0 z-20 size-40 md:size-120"
        /> */}
        <h1 className="text-[#2F3082] text-xl md:text-4xl font-semibold font-ebGaramond  ">
          पुरुषोत्तम क्षेत्रं वैकुण्ठस्य सदृशं
        </h1>
        <h1 className="text-xl md:text-4xl font-semibold font-ebGaramond md:pt-8 ">
          <span className="text-[#D72327] block md:inline font-semibold font-ebGaramond ">
            Purushottama kṣhetraṁ Vaikuṇṭhasya sadṛśaṁ
          </span>
          {/* <span className="text-[#F5C721] font-semibold font-ebGaramond">
            Transformation,{" "}
          </span>
          <span className="text-[#2F3082] font-semibold font-ebGaramond ">
            &{" "}
          </span>
          <span className="text-[#3E8D19] block md:inline font-semibold font-eb-garamond ">
            Triumph!{" "}
          </span> */}
        </h1>
      </motion.div>

      <div className="relative w-full min-h-[265vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - EDIT: Replace with your actual background image */}
        <Image
          src="/aboutus/bluebg.png"
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

        {/*  founding director */}
        <div className="relative w-full max-w-6xl px-4 sm:px-6 lg:px-0 py-1 flex flex-col items-center">
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
            <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-[#D72327] font-leckerli">
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
          <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-[#D72327] font-leckerli md:mb-12">
            Directors
          </h1>

          {/* Polaroid-style photo cards */}
          <div className="flex flex-col w-full  mx-10 justify-center">
            {directors.map((director, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center  gap-8 md:gap-10 lg:gap-20 space-y-12 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Polaroid card with photo */}
                <div className="  md:w-[500px]  ">
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-30 relative w-full aspect-square ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <Image
                      src={director.image}
                      alt={`${director.name} ${director.surname}`}
                      layout="fill"
                      objectFit=""
                      className=""
                    />
                  </motion.div>
                </div>

                {/* About paragraph */}
                <div className="max-w-2xl text-center md:text-left ">
                  <p className="text-xl  font-light text-white font-ebGaramond text-justify">
                    {director.about1}
                  </p>
                  <p className="text-xl  font-light text-white pt-3 font-ebGaramond text-justify">
                    {director.about2}
                  </p>
                  <p className="text-xl  font-light text-white pt-3 font-ebGaramond text-justify">
                    {director.about3}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <Image
          src="/bookflyingkid.svg"
          alt="Decorative element"
          width={384}
          height={512}
          className="absolute  md:-bottom-80 -right-10  z-20 insent-0 w-24 md:w-60"
        />
        </div>
        <div className="bg-[#D72327] absolute bottom-0 w-full h-12 -z-30"></div>
      </div>

      {/* coradinators Heading */}
      <div className="mx-2 md:mx-0 md:mt-0 relative bg-[#D72327] z-12 h-[100vh] overflow-hidden">
        <div className="flex justify-center items-center gap-2 mb-8 pt-12">
          <Image
            src="/shank.svg"
            alt="Decorative element"
            width={60}
            height={150}
            className="w-8 sm:w-10 md:w-12 lg:w-16"
          />

          <div className="text-center">
            <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-[#FFC40C] font-leckerli leading-tight">
              Festival
              <br />
              <span>Co-ordinators</span>
            </h1>
          </div>

          <Image
            src="/shank.svg"
            alt="Decorative element"
            width={60}
            height={150}
            className="w-8 sm:w-10 md:w-12 lg:w-16 scale-x-[-1]"
          />
        </div>

        {/* Floating Images */}
       
        <Image
          src="/bookstackabus.svg"
          alt="Decorative element"
          width={384}
          height={512}
          className="absolute -bottom-20 md:-bottom-40 -left-3 md:left-0 z-20 w-20 md:w-36"
        />

        {/* Grid */}
        <div className="px-4 md:px-20 pt-12">
          {team.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-4 justify-center ">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex justify-center "
                >
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full max-w-lg"
                  >
                    <div className="relative w-full aspect-square  overflow-hidden">
                      <Image
                        src={member.image}
                        alt={`${member.name} ${member.surname}`}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg "
                      />
                    </div>

                    {/* Optional Name Text */}
                    {/* <div className="text-center mt-2 text-white">
                    <p className="text-sm md:text-xl font-serif">{member.name}</p>
                    <p className="text-sm md:text-xl font-serif">{member.surname}</p>
                  </div> */}
                  </a>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* teams */}

      <div className="relative w-full min-h-[280vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - EDIT: Replace with your actual background image */}
        <Image
          src="/aboutus/yellowbgabout3.png"
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

        {/*  founding director */}
        <div className="relative w-full max-w-6xl px-4 sm:px-6 lg:px-0 py-1 flex flex-col items-center justify-center -z-5 pt-20">
          {/* Founding Title with Decorative Elements */}
          <div className="flex justify-center items-center gap-2 mb-4">
            <Image
              src="/shank.svg"
              alt="Decorative element"
              width={60}
              height={150}
              className="w-8 sm:w-10 md:w-12 lg:w-16"
            />
            <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-[#D72327] font-leckerli">
              Team
            </h1>
            <Image
              src="/shank.svg"
              alt="Decorative element"
              width={60}
              height={150}
              className="w-8 sm:w-10 md:w-12 lg:w-16 scale-x-[-1]"
            />
          </div>

          {/* Polaroid-style photo cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-[1200px] justify-items-center mt-10 mb-45">
            {team2.map((person, index) => (
              <motion.div
                key={index}
                className={`relative w-[420px] h-[420px] ${
                  team2.length % 3 === 2 && index >= team2.length - 2
                    ? "col-rows-2 justify-self-center"
                    : ""
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <a href={person.instagram} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={person.image}
                    alt={`${person.name} ${person.surname}`}
                    layout="fill"
                    objectFit="contain"
                    className=" hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-[#D72327] absolute top-0 w-full h-20 -z-30"></div>
      </div>

      <div className="hidden md:block absolute z-6 w-full">
        <footer className="md:block hidden md:h-150 xl:h-190 relative  font-ebGaramond  ">
          {/* Background wave image with lower z-index */}
          <div className="absolute inset-0 -z-10 w-full h-full mx-auto">
            <Image
              // src="https://ik.imagekit.io/zjaqik2mc/footer/footer-wave.svg?updatedAt=1743490389529"
              src="/footer/footer-wave.svg"
              alt="Footer background wave"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="absolute w-full -top-100 flex items-center justify-center h-180  -z-20 ">
            <Image
              src="/aboutus/sunset.png"
              alt="Background"
              layout="fill"
              objectFit="contain"
              className="md:block hidden absolute inset-0 "
              priority
            />
          </div>

          <div className="relative z-10 sm:px-6 md:px-8 sm:pt-18 md:pt-24 lg:pt-34  ">
            <div className="grid sm:grid-cols-3 md:grid-cols-3">
              {/* Left part logo and icon */}
              <div className="flex flex-col sm:items-center md:items-center">
                <div className="sm:mt-12 md:mt-6 lg:mt-2">
                  <Image
                    // src="https://ik.imagekit.io/zjaqik2mc/homehero/logo.svg?updatedAt=1743486047833"
                    src="/mainpage/logo.svg"
                    alt="logo"
                    width={100}
                    height={150}
                    className="sm:w-18 md:w-21 lg:w-30"
                  />
                </div>
                <h1 className="sm:text-sm md:text-lg lg:text-xl font-leckerli text-[#FFFCF5] sm:mt-3 md:mt-3 lg:mt-6">
                  Connect With US
                </h1>
                {/* socialIcons */}
                <div className="flex sm:space-x-2 md:space-x-1 sm:mt-3 lg:mt-4">
                  {socialIcons.map(({ Icon, link }, index) => (
                    <Link
                      key={index}
                      href={link}
                      target="_blank"
                      className="hover:scale-110 transition-transform"
                    >
                      <Icon
                        color="#FFC81E"
                        size={24}
                        className="sm:size-5 md:size-5 lg:size-7"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right section */}
              <div className="grid sm:grid-cols-3 sm:col-span-2 sm:gap-2 sm:pt-23 md:pt-22 lg:pt-26">
                {Object.entries(footerLinks).map(([title, links], index) => (
                  <div key={index} className="sm:text-left sm:space-y-2">
                    <h2 className="sm:text-lg lg:text-2xl font-leckerli text-[#FFFCF5]">
                      {title}
                    </h2>
                    <ul className="sm:space-y-1">
                      {links.map((link, linkIndex) => (
                        <li
                          key={linkIndex}
                          className="sm:text-xs md:text-sm lg:text-lg text-[#FFFCF5] hover:text-yellow-300 transition-colors cursor-pointer"
                        >
                          {link}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom pattern with proper z-index */}
          <div className="w-full absolute left-0 bottom-0 z-10">
            <Image
              // src="https://ik.imagekit.io/zjaqik2mc/footer/footer-pattern.svg?updatedAt=1743490196018"
              src={"/footer/footer-pattern.svg"}
              alt="Footer pattern"
              width={500}
              height={300}
              className="w-full"
              priority
            />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default page;
