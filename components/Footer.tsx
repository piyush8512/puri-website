import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

function Footer() {
  const socialIcons = [
    { Icon: Facebook, link: "https://www.facebook.com/purilitfest" },
    { Icon: Twitter, link: "https://x.com/PuriLitFest" },
    { Icon: Instagram, link: "https://www.instagram.com/purilitfest" },
    { Icon: Youtube, link: "https://youtube.com/@purilitfest" },
  ];

  const footerLinks = {
    "About us": [
      "About The Festival",
      "Teamwork Arts",
      "Contact Us",
      "Terms & Condition",
      "Privacy & Policies",
      "FAQs",
    ],
    Events: ["Itinerary", "Programmes"],
    "Important Links": ["Volunteer", "Partner With Us"],
  };

  return (
    <>
      <footer className=" md:block hidden md:h-[67vh]  lg:h-[85vh] footer-wave bg-no-repeat bg-cover relative   ">
        <div className=" sm:px-6 md:px-8 sm:pt-10  md:pt-14 lg:pt-24  ">
          <div className=" grid  sm:grid-cols-3 md:grid-cols-3  ">
            {/* leftpartlogoandicon */}

            
            <div className=" flex flex-col  sm:items-center md:items-center  ">
              <div className=" sm:mt-12 md:mt-10">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={100}
                  height={150}
                  className=" sm:w-18 md:w-21 lg:w-24"
                />
              </div>
              <h1 className=" sm:text-sm md:text-lg lg:text-xl font-leckerli text-[#FFFCF5] sm:mt-3 md:mt-3 lg:mt-6">
                hello
              </h1>

              {/* socialIcons */}
              <div className="flex  sm:space-x-2  md:space-x-1  sm:mt-3 lg:mt-4">
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

            {/* Rightsection */}
            <div className="  grid  sm:grid-cols-3 sm:col-span-2 sm:gap-2 sm:pt-24   md:pt-24  lg:pt-29    ">
              {Object.entries(footerLinks).map(([title, links], index) => (
                <div key={index} className=" sm:text-left  sm:space-y-2">
                  <h2 className="sm:text-lg lg:text-xl font-leckerli text-[#FFFCF5]">
                    {title}
                  </h2>
                  <ul className=" sm:space-y-1">
                    {links.map((link, linkIndex) => (
                      <li
                        key={linkIndex}
                        className=" sm:text-xs md:text-sm lg:text-sm text-[#FFFCF5] 
                hover:text-yellow-300 transition-colors cursor-pointer"
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
        <div className="w-full mt-12  absolute left-0 bottom-0">
          <Image
            src="/footer-pattern.svg"
            alt="Footer pattern"
            width={500}
            height={300}
            className="w-full "
            priority
          />
        </div>
      </footer>

      <footer className="md:hidden block relative w-full">
        {/* Top Wave Background */}
        <div className="bg-cover bg-no-repeat bg-top footer-waveb h-[25vh] w-full"></div>

        {/* Logo Positioned in the Wave Section */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex justify-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={100}
            height={100}
            className=" hidden md:block w-24 sm:w-28 md:w-32"
          />
          <Image
            src="/mobilelogo.png"
            alt="logo"
            width={100}
            height={100}
            className=" md:hidden w-24 sm:w-28 md:w-32"
          />
        </div>

        {/* Footer Content */}
        <div className="bg-[#2F3081] h-auto py-12 px-6 text-center flex flex-col items-center">
          {/* Connect With Us Heading */}
          <h1 className="text-sm font-leckerli text-[#FFFCF5]">
            Connect With Us
          </h1>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mt-4">
            {socialIcons.map(({ Icon, link }, index) => (
              <Link
                key={index}
                href={link}
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <Icon color="#FFC81E" size={24} />
              </Link>
            ))}
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-3 gap-6 mt-6 w-full max-w-sm">
            {Object.entries(footerLinks).map(([title, links], index) => (
              <div key={index} className="space-y-2">
                <h2 className="text-sm font-leckerli text-[#FFFCF5]">
                  {title}
                </h2>
                <ul className="space-y-1">
                  {links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="text-xs text-[#FFFCF5] hover:text-yellow-300 transition-colors cursor-pointer"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
