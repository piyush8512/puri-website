// import React from "react";
// import Image from "next/image";
// import Footer from "@/components/Footer";

// const speakers = [
//   { name: "Jagdeep Dhankar", src: "/speakers/jagdeepdhankar.svg" },
//   { name: "Sh. Dharmendra Pradhan", src: "/speakers/dharmendra.svg" },
//   { name: "Sh. Hari Babu kambhampati", src: "/speakers/haribabu.svg" },
//   {
//     name: "Sh. Gajendra Singh Shekhawat",
//     src: "/Sh. Gajendra Singh Shekhawat.svg",
//   },
//   {
//     name: "Sh. Sarvanand Sonowal",
//     src: "/speakers/Sarvanand Sonowal Ji’s.svg",
//   },
//   { name: "Sh. Mohan Charan Majhi", src: "/speakers/mohancharan.svg" },
//   { name: "Sh.Sachidanand Joshi", src: "/speakers/sachidanand.svg" },
//   { name: "Sh. Suryabanshi Suraj", src: "/speakers/unknown1.svg" },
//   { name: "Shashi Tharoor", src: "/speakers/shashitharoor.svg" },
//   { name: "Shekhar Gupta", src: "/speakers/shekhargupta.svg" },
//   { name: "Uday Makhurkar", src: "/speakers/udaymakhur.svg" },
//   { name: "T.V. Mohandas Pai.", src: "/speakers/mohandasp.svg" },
//   { name: "Menakshi Jain", src: "/speakers/mennakshijain.svg" },
//   { name: "Rajeev Chandrasekhar", src: "/speakers/rajeevchandrasekhar.svg" },
//   { name: "Pankaj Tripathi", src: "/speakers/pankajtripati.svg" },
//   { name: "Sanjeev Sanyal", src: "/speakers/sanjeevsanyal.svg" },
//   { name: "Vikram Sampath", src: "/speakers/vikramsampath.svg" },
//   { name: "Sourav Dwivedi", src: "/speakers/souravdwivedi.svg" },
//   { name: "Sudha Murthy", src: "/speakers/sudhamurthy.svg" },
//   { name: "Pratisha Ray", src: "/speakers/pratisharay.svg" },
//   { name: "Shefali Vaidya", src: "/speakers/shefalivaidya.svg" },
//   { name: "Sandeep Balkrishna", src: "/speakers/sandeepbalkrishna.svg" },
//   { name: "Sai Deepak", src: "/speakers/saideepak.svg" },
//   { name: "Aditya Dhar", src: "/speakers/adityadhar.svg" },
//   { name: "Ranvir Shorey", src: "/speakers/ranvirshorey.svg" },
//   { name: "Ritesh Aggarwal", src: "/speakers/riteshaggarwal.svg" },
//   { name: "Nikhil Kamath", src: "/speakers/nikhilkamath.svg" },
//   { name: "Bhavesh Aggarwal", src: "/speakers/bhaveshaggarwal.svg" },
//   { name: "Raveena Tandon", src: "/speakers/raveenatandon.svg" },
//   { name: "Shallu Jindal", src: "/speakers/shallujindal.svg" },
//   { name: "Malini Awasthi", src: "/speakers/maliniawasthi.svg" },
//   { name: "Neeraj Chopra", src: "/speakers/neerajchopra.svg" },
//   { name: "Sridhar Vembu", src: "/speakers/sridharvembu.svg" },
//   { name: "Plaki Sharma Upadhyay", src: "/speakers/plakisharmaupadhyay.svg" },
//   {
//     name: "Waterman Rajendra Singh",
//     src: "/speakers/watermanrajendrasingh.svg",
//   },
//   { name: "Deep Holdar", src: "/speakers/deepholdar.svg" },
//   { name: "Hindal Sengupta", src: "/speakers/hindalsengupta.svg" },
//   { name: "Prajakta Kohli", src: "/speakers/prajatktakohli.svg" },
//   { name: "Abhijeet Majumdar", src: "/speakers/abhijitmajumdar.svg" },
//   { name: "Sai Swaroopa Iyer", src: "/speakers/saiwsaroopiyer.svg" },
//   { name: "Rami Nirajan Desai", src: "/speakers/raminirajandesai.svg" },
//   { name: "Anubhav Singh Bassi", src: "/speakers/anubhavsinghbassi.svg" },
//   { name: "Ami Ganatra", src: "/speakers/amiganatra.svg" },
//   { name: "Shamika Ravi", src: "/speakers/shamikaravi.svg" },
//   { name: "Shantanu Gupta", src: "/speakers/shantanugupta.svg" },
//   { name: "Raj Shamani", src: "/speakers/rajshamani.svg" },
//   { name: "Abhinav Agrawal", src: "/speakers/abhinavagrawal.svg" },
//   { name: "Anish Gokhle", src: "/speakers/anishgokhle.svg" },
//   { name: "Shubhankar Mishra", src: "/speakers/shubhankarmishra.svg" },
//   { name: "Janhvi Singh", src: "/speakers/janhvisingh.svg" },
//   { name: "Ankit Bayanpuria", src: "/speakers/ankitbayanpuria.svg" },
//   { name: "Saina Nehwal", src: "/speakers/sainanehwal.svg" },
// ];

// const Page = () => {
//   return (
//     <div className="relative pt-15 inset-0 overflow-x-hidden">
//     {/* Desktop & Tablet Hero Section */}
//     <div className="hidden md:flex hero-bg bg-center bg-cover bg-no-repeat min-h-[30vh] h-[34vh] flex-col items-center justify-start relative">
//       <Image
//         src="/partnersDate.svg"
//         alt="Festival logo"
//         width={127}
//         height={52}
//         className="object-contain min-w-xl w-120 h-100"
//       />
//     </div>

//     {/* Mobile Hero Section */}
//     <div className="md:hidden hero-bg-mobile bg-center bg-cover bg-no-repeat h-[21vh] w-full flex flex-col justify-center items-center relative">
//       <Image
//         src="/mobilePartnersDate.svg"
//         alt="Festival logo"
//         width={67}
//         height={67}
//         className="object-cover w-50 sm:w-75"
//       />
//     </div>

//     <h1 className="font-leckerli font-bold text-4xl md:text-5xl lg:text-6xl xl:text-5xl text-[#D72327] text-center md:mt-10 lg:mt-10">
//   Meet The<span className="block md:inline"> Speakers</span>
// </h1>

//     {/* Speakers Section */}
//     <div className="flex flex-col items-center mt-20 space-y-10">
//       {/* First row with 3 images only on desktop */}
//       <div className="hidden lg:grid grid-cols-3 gap-14">
//         {speakers.slice(0, 3).map((speaker, index) => (
//           <div key={index} className="flex flex-col items-center text-center">
//             <Image src={speaker.src} alt={speaker.name} width={257} height={100} />
//             <p className="mt-2 text-black text-lg font-eb-garamond">{speaker.name}</p>
//           </div>
//         ))}
//       </div>

//       {/* All images in 2-column layout on mobile */}
//       <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 md:gap-8 justify-items-center">
//         {speakers.map((speaker, index) => (
//           <div key={index} className="flex flex-col items-center text-center">
//             <Image src={speaker.src} alt={speaker.name} width={257} height={100} />
//             <p className="mt-2 text-black text-lg  font-eb-garamond">{speaker.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//     <Footer />
//   </div>

//   );
// };

// export default Page;

"use client";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const speakers = [
  { name: "Jagdeep Dhankar", src: "/speakers/jagdeepdhankar.svg" },
  { name: "Sh. Dharmendra Pradhan", src: "/speakers/dharmendra.svg" },
  { name: "Sh. Hari Babu kambhampati", src: "/speakers/haribabu.svg" },
  {
    name: "Sh. Gajendra Singh Shekhawat",
    src: "/Sh. Gajendra Singh Shekhawat.svg",
  },
  {
    name: "Sh. Sarvanand Sonowal",
    src: "/speakers/Sarvanand Sonowal Ji’s.svg",
  },
  { name: "Sh. Mohan Charan Majhi", src: "/speakers/mohancharan.svg" },
  { name: "Sh.Sachidanand Joshi", src: "/speakers/sachidanand.svg" },
  { name: "Sh. Suryabanshi Suraj", src: "/speakers/unknown1.svg" },
  { name: "Shashi Tharoor", src: "/speakers/shashitharoor.svg" },
  { name: "Shekhar Gupta", src: "/speakers/shekhargupta.svg" },
  { name: "Uday Makhurkar", src: "/speakers/udaymakhur.svg" },
  { name: "T.V. Mohandas Pai.", src: "/speakers/mohandasp.svg" },
  { name: "Menakshi Jain", src: "/speakers/mennakshijain.svg" },
  { name: "Rajeev Chandrasekhar", src: "/speakers/rajeevchandrasekhar.svg" },
  { name: "Pankaj Tripathi", src: "/speakers/pankajtripati.svg" },
  { name: "Sanjeev Sanyal", src: "/speakers/sanjeevsanyal.svg" },
  { name: "Vikram Sampath", src: "/speakers/vikramsampath.svg" },
  { name: "Sourav Dwivedi", src: "/speakers/souravdwivedi.svg" },
  { name: "Sudha Murthy", src: "/speakers/sudhamurthy.svg" },
  { name: "Pratisha Ray", src: "/speakers/pratisharay.svg" },
  { name: "Shefali Vaidya", src: "/speakers/shefalivaidya.svg" },
  { name: "Sandeep Balkrishna", src: "/speakers/sandeepbalkrishna.svg" },
  { name: "Sai Deepak", src: "/speakers/saideepak.svg" },
  { name: "Aditya Dhar", src: "/speakers/adityadhar.svg" },
  { name: "Ranvir Shorey", src: "/speakers/ranvirshorey.svg" },
  { name: "Ritesh Aggarwal", src: "/speakers/riteshaggarwal.svg" },
  { name: "Nikhil Kamath", src: "/speakers/nikhilkamath.svg" },
  { name: "Bhavesh Aggarwal", src: "/speakers/bhaveshaggarwal.svg" },
  { name: "Raveena Tandon", src: "/speakers/raveenatandon.svg" },
  { name: "Shallu Jindal", src: "/speakers/shallujindal.svg" },
  { name: "Malini Awasthi", src: "/speakers/maliniawasthi.svg" },
  { name: "Neeraj Chopra", src: "/speakers/neerajchopra.svg" },
  { name: "Sridhar Vembu", src: "/speakers/sridharvembu.svg" },
  { name: "Plaki Sharma Upadhyay", src: "/speakers/plakisharmaupadhyay.svg" },
  {
    name: "Waterman Rajendra Singh",
    src: "/speakers/watermanrajendrasingh.svg",
  },
  { name: "Deep Holdar", src: "/speakers/deepholdar.svg" },
  { name: "Hindal Sengupta", src: "/speakers/hindalsengupta.svg" },
  { name: "Prajakta Kohli", src: "/speakers/prajatktakohli.svg" },
  { name: "Abhijeet Majumdar", src: "/speakers/abhijitmajumdar.svg" },
  { name: "Sai Swaroopa Iyer", src: "/speakers/saiwsaroopiyer.svg" },
  { name: "Rami Nirajan Desai", src: "/speakers/raminirajandesai.svg" },
  { name: "Anubhav Singh Bassi", src: "/speakers/anubhavsinghbassi.svg" },
  { name: "Ami Ganatra", src: "/speakers/amiganatra.svg" },
  { name: "Shamika Ravi", src: "/speakers/shamikaravi.svg" },
  { name: "Shantanu Gupta", src: "/speakers/shantanugupta.svg" },
  { name: "Raj Shamani", src: "/speakers/rajshamani.svg" },
  { name: "Abhinav Agrawal", src: "/speakers/abhinavagrawal.svg" },
  { name: "Anish Gokhle", src: "/speakers/anishgokhle.svg" },
  { name: "Shubhankar Mishra", src: "/speakers/shubhankarmishra.svg" },
  { name: "Janhvi Singh", src: "/speakers/janhvisingh.svg" },
  { name: "Ankit Bayanpuria", src: "/speakers/ankitbayanpuria.svg" },
  { name: "Saina Nehwal", src: "/speakers/sainanehwal.svg" },
];

const Page = () => {
  return (
    <motion.div
      className="relative pt-15 inset-0 overflow-x-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Desktop & Tablet Hero Section */}
      <motion.div
        className="hidden md:flex hero-bg bg-center bg-cover bg-no-repeat min-h-[30vh] h-[34vh] flex-col items-center justify-start relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src="/partnersDate.svg"
          alt="Festival logo"
          width={127}
          height={52}
          className="object-contain min-w-xl w-120 h-100"
        />
      </motion.div>

      {/* Mobile Hero Section */}
      <motion.div
        className="md:hidden hero-bg-mobile bg-center bg-cover bg-no-repeat h-[21vh] w-full flex flex-col justify-center items-center relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src="/mobilePartnersDate.svg"
          alt="Festival logo"
          width={67}
          height={67}
          className="object-cover w-50 sm:w-75"
        />
      </motion.div>

      <motion.h1
        className="font-leckerli font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-[#D72327] text-center md:mt-10 lg:mt-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        Meet The <span className="block md:inline">Speakers</span>
      </motion.h1>

      {/* Speakers Section */}
      <motion.div
        className="flex flex-col items-center mt-15 space-y-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        {/* First row with 3 images only on desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-14">
          {speakers.slice(0, 3).map((speaker, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <Image
                src={speaker.src}
                alt={speaker.name}
                width={257}
                height={100}
              />
              <p className="mt-2 text-black text-lg font-eb-garamond">
                {speaker.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* All images in 2-column layout on mobile */}
        <div className=" grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 md:gap-8 justify-items-center hidden md:grid ">
          {speakers.slice(3).map((speaker, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
            >
              <Image
                src={speaker.src}
                alt={speaker.name}
                width={257}
                height={100}
              />
              <p className="mt-2 text-black text-lg font-eb-garamond">
                {speaker.name}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 md:gap-8 justify-items-center md:hidden px-5">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
            >
              <Image
                src={speaker.src}
                alt={speaker.name}
                width={257}
                height={100}
              />
              <p className="mt-2 text-black text-sm font-eb-garamond">
                {speaker.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Footer />
    </motion.div>
  );
};

export default Page;
