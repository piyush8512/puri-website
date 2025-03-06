"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='fixed z-[100] top-0 w-full'>
      {/* Desktop and Tablet Navigation */}
      <div className='h-16 w-full bg-[#FFC40C]'>
        {/* Mobile Menu Toggle */}
        <div className='md:hidden absolute top-4 right-4 z-50'>
          <button 
            onClick={toggleMenu} 
            className='text-black focus:outline-none'
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="relative">
  {/* Logo Positioned Outside the Nav */}
  <div className="absolute left-4 md:left-10 top-1/2 -translate-y-0 transform md:-translate-y-8">
    <Image
      src="/logo.svg"
      alt="Festival logo"
      width={60}
      height={60}
      className="w-14 md:w-20 h-auto"
      priority
    />
  </div>

  {/* Desktop Navigation */}
  <ul className="hidden md:flex justify-around items-center mx-4 lg:mx-60 py-4 space-x-4">
    <li>Home</li>
    <li>Partners</li>
    <li>Programs</li>
    <li>Sessions</li>
    <li>Speakers</li>
    <li>Activities</li>
    <li>About Us</li>
    <li>Contact Us</li>
    <Button variant={"destructive"} className="m-0 font-leckerli">
      Register Now&nbsp;
    </Button>
  </ul>

  {/* Mobile Navigation Overlay */}
  {isMenuOpen && (
    <div className="md:hidden fixed inset-0 bg-[#FFC40C] z-40 flex flex-col items-center justify-center space-y-6 text-xl">
      <a href="#" className="hover:text-gray-700">Home</a>
      <a href="#" className="hover:text-gray-700">Partners</a>
      <a href="#" className="hover:text-gray-700">Programs</a>
      <a href="#" className="hover:text-gray-700">Sessions</a>
      <a href="#" className="hover:text-gray-700">Speakers</a>
      <a href="#" className="hover:text-gray-700">Activities</a>
      <a href="#" className="hover:text-gray-700">About Us</a>
      <a href="#" className="hover:text-gray-700">Contact Us</a>
      <Button variant={"destructive"} className="m-0 font-leckerli">
        Register Now
      </Button>
    </div>
  )}
</nav>

      </div>
    </header>
  )
}

export default Header