"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed z-[100] top-0 w-full">
      {/* Main Navigation Bar */}
      <div className="h-16 sm:h-16 w-full bg-[#FFC40C] flex items-center justify-between px-4 sm:px-6 lg:px-10 ">
        {/* Logo */}
        <div className="flex items-center  mt-0 sm:mt-12 lg:mt-18 ">
          <Image
            src="/logo.svg"
            alt="Festival logo"
            width={60}
            height={60}
            className="hidden md:block w-12 md:w-16 lg:w-20 h-auto "
            priority
          />
          <Image
            src="/mobilelogo.png"
            alt="Decorative element"
            width={60}
            height={150}
            className="w-10 sm:w-12 md:hidden"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block flex-1">
          <ul className="flex justify-center items-center space-x-5 lg:space-x-5 xl:space-x-14 text-sm lg:text-base">
            <li className="hover:text-gray-700 cursor-pointer">Home</li>
            <li className="hover:text-gray-700 cursor-pointer">Partners</li>
            <li className="hover:text-gray-700 cursor-pointer">Programs</li>
            <li className="hover:text-gray-700 cursor-pointer">Sessions</li>
            <li className="hover:text-gray-700 cursor-pointer">Speakers</li>
            <li className="hover:text-gray-700 cursor-pointer">Activities</li>
            <li className="hover:text-gray-700 cursor-pointer">About Us</li>
            <li className="hover:text-gray-700 cursor-pointer">Contact Us</li>
          </ul>
        </nav>

        {/* Register Button - Always visible */}
        <div className="hidden md:block">
          <Button
            variant={"destructive"}
            className="m-0 font-leckerli text-sm lg:text-base"
          >
            Register Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        > 
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#FFC40C] z-40 pt-16 flex flex-col items-center justify-start overflow-y-auto">
          <nav className="w-full px-6 py-8">
            <ul className="flex flex-col items-center space-y-6 text-lg">
              <li className="w-full text-center  pb-2">
                <a href="#" className="block hover:text-gray-700">
                  Home
                </a>
              </li>
              <li className="w-full text-center pb-2">
                <a href="#" className="block hover:text-gray-700">
                  Partners
                </a>
              </li>
              <li className="w-full text-center pb-2">
                <a href="#" className="block hover:text-gray-700">
                  Programs
                </a>
              </li>
              <li className="w-full text-center  pb-2">
                <a href="#" className="block hover:text-gray-700">
                  Sessions
                </a>
              </li>
              <li className="w-full text-center pb-2">
                <a href="#" className="block hover:text-gray-700">
                  Speakers
                </a>
              </li>
              <li className="w-full text-center pb-2">
                <a href="#" className="block hover:text-gray-700">
                  Activities
                </a>
              </li>
              <li className="w-full text-center pb-2">
                <a href="#" className="block hover:text-gray-700">
                  About Us
                </a>
              </li>
              <li className="w-full text-center pb-2">
                <a href="#" className="block hover:text-gray-700">
                  Contact Us
                </a>
              </li>
              <li className="w-full flex justify-center pt-4">
                <Button
                  variant={"destructive"}
                  className="font-leckerli  sm:w-auto"
                >
                  Register Now
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
