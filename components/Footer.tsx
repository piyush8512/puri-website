import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

function Footer() {
  const socialIcons = [
    { Icon: Linkedin, link: "https://linkedin.com" },
    { Icon: Facebook, link: "https://facebook.com" },
    { Icon: Twitter, link: "https://twitter.com" },
    { Icon: Instagram, link: "https://instagram.com" },
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
    <footer className=" md:block hidden relative bg-cover bg-no-repeat bg-top md:h-[80vh] footer-wave py-10 sm:py-15 md:py-16 lg:py-20 px-5 md:px-30">
      <div className="container mx-auto px-0 sm:px-6 lg:px-8">
        {/* Responsive Grid Container */} 
        <div className="grid grid-cols-1 md:grid-cols-3 pt-24 mt-12">
          {/* Left Section - Logo and Social Icons */}
          <div className="col-span-1 flex flex-col items-center md:items-start ">
            <div className="flex justify-center md:justify-start px-10  md:top-1/5 absolute ">
              <Image
                src="/logo.svg"
                alt="logo"
                width={100}
                height={150}
                className="w-32 sm:w-40 md:w-48 lg:w-26"
              />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-2xl font-leckerli text-[#FFFCF5] text-center md:text-center md:mt-20">
              Connect With Us
            </h1>

            {/* Logo */}

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-4  mb-12">
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
                    className="sm:size-8 md:size-10"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section - Footer Links */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {Object.entries(footerLinks).map(([title, links], index) => (
              <div
                key={index}
                className="text-center md:text-left space-y-3 sm:space-y-4"
              >
                <h2 className="text-xl sm:text-2xl md:text-2xl font-leckerli text-[#FFFCF5]">
                  {title}
                </h2>
                <ul className="space-y-1 sm:space-y-2">
                  {links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="text-sm sm:text-base md:text-sm text-[#FFFCF5] 
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

      {/* Footer Pattern */}
      <div
        className="absolute bottom-0 left-0 md:-left-1 w-full
        footer-pattern bg-no-repeat bg-cover bg-center h-[5vh]
        md:h-[21vh]"
      ></div>
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
