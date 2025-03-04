import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <div className="relative h-[100vh] footer-wave bg-cover bg-no-repeat bg-center">
      <div className="flex justify-between items-end h-[58vh]">
        <div className="flex flex-col ml-60">
          <div className="mb-2">
          <h1 className="text-center text-4xl font-leckerli text-[#FFFCF5] mt-2">
            Connect With Us
          </h1>
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={130}
            height={100}
            className="absolute left-1/5 top-1/5"
          ></Image>
          </div>
          <div className="flex justify-center gap-4 px-5">
            <Linkedin color="#FFC81E" size={34} />
            <Facebook color="#FFC81E" size={34} />
            <Twitter color="#FFC81E" size={34} />
            <Instagram color="#FFC81E" size={34} />
          </div>
        </div>

        <div className="flex justify-evenly gap-20 mr-20">
          <div>
            <h1 className="text-3xl font-leckerli text-[#FFFCF5] text-left">
            About us
            </h1>
            <li className="flex flex-col pb-2 text-lg text-[#FFFCF5]">
              <ul>About The Festival</ul>
              <ul>Teamwork Arts</ul>
              <ul>Contact Us</ul>
              <ul>Terms & Condition</ul>
              <ul>Privacy & Policies</ul>
              <ul>FAQs</ul>
            </li>
          </div>
          <div className="">
            <h1 className="text-left text-3xl font-leckerli text-[#FFFCF5]">
              Events
            </h1>
            <li className="flex flex-col pb-2 text-lg justify-center text-[#FFFCF5]">
              <ul>Itinerary</ul>
              <ul>Programmes</ul>
            </li>
          </div>
          <div>
            <h1 className="text-left text-3xl font-leckerli text-[#FFFCF5]">
              Important Links
            </h1>
            <li  className="flex flex-col pb-2 text-lg text-[#FFFCF5]">
              <ul>Volunteer</ul>
              <ul>Partner With Us</ul>
            </li>
          </div>
        </div>
      </div>
      <div className="w-full footer-pattern absolute bottom-0 bg-no-repeat bg-cover bg-center h-64"></div>
    </div>
  );
}

export default Footer;
