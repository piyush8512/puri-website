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

const speakers = [
  {
    name: "Jagdeep Dhankar",
    src: "/speakers/jagdeepdhankar.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Dharmendra Pradhan",
    src: "/speakers/dharmendra.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Hari Babu kambhampati",
    src: "/speakers/haribabu.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Gajendra Singh Shekhawat",
    src: "/Sh. Gajendra Singh Shekhawat.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Sarvanand Sonowal",
    src: "/speakers/Sarvanand Sonowal Ji’s.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Mohan Charan Majhi",
    src: "/speakers/mohancharan.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Sachidanand Joshi",
    src: "/speakers/sachidanand.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Suryabanshi Suraj",
    src: "/speakers/unknown1.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Shashi Tharoor",
    src: "/speakers/shashitharoor.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Shekhar Gupta",
    src: "/speakers/shekhargupta.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Uday Makhurkar",
    src: "/speakers/udaymakhur.svg",
    width: 200,
    height: 200,
  },
  {
    name: "T.V. Mohandas Pai.",
    src: "/speakers/mohandasp.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Menakshi Jain",
    src: "/speakers/mennakshijain.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Rajeev Chandrasekhar",
    src: "/speakers/rajeevchandrasekhar.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Pankaj Tripathi",
    src: "/speakers/pankajtripati.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Sanjeev Sanyal",
    src: "/speakers/sanjeevsanyal.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Vikram Sampath",
    src: "/speakers/vikramsampath.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Sourav Dwivedi",
    src: "/speakers/souravdwivedi.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Sudha Murthy",
    src: "/speakers/sudhamurthy.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Pratisha Ray",
    src: "/speakers/pratisharay.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Shefali Vaidya",
    src: "/speakers/shefalivaidya.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Sandeep Balkrishna",
    src: "/speakers/sandeepbalkrishna.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Sai Deepak",
    src: "/speakers/saideepak.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Aditya Dhar",
    src: "/speakers/adityadhar.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Ranvir Shorey",
    src: "/speakers/ranvirshorey.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Ritesh Aggarwal",
    src: "/speakers/riteshaggarwal.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Nikhil Kamath",
    src: "/speakers/nikhilkamath.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Bhavesh Aggarwal",
    src: "/speakers/bhaveshaggarwal.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Raveena Tandon",
    src: "/speakers/raveenatandon.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Shallu Jindal",
    src: "/speakers/shallujindal.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Malini Awasthi",
    src: "/speakers/maliniawasthi.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Neeraj Chopra",
    src: "/speakers/neerajchopra.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Sridhar Vembu",
    src: "/speakers/sridharvembu.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Plaki Sharma Upadhyay",
    src: "/speakers/plakisharmaupadhyay.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Waterman Rajendra Singh",
    src: "/speakers/watermanrajendrasingh.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Deep Holdar",
    src: "/speakers/deepholdar.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Hindal Sengupta",
    src: "/speakers/hindalsengupta.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Prajakta Kohli",
    src: "/speakers/prajatktakohli.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Abhijeet Majumdar",
    src: "/speakers/abhijitmajumdar.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Sai Swaroopa Iyer",
    src: "/speakers/saiwsaroopiyer.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Rami Nirajan Desai",
    src: "/speakers/raminirajandesai.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Anubhav Singh Bassi",
    src: "/speakers/anubhavsinghbassi.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Ami Ganatra",
    src: "/speakers/amiganatra.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Shamika Ravi",
    src: "/speakers/shamikaravi.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Shantanu Gupta",
    src: "/speakers/shantanugupta.svg",
    width: 210,
    height: 210,
  },
  {
    name: "Raj Shamani",
    src: "/speakers/rajshamani.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Abhinav Agrawal",
    src: "/speakers/abhinavagrawal.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Anish Gokhle",
    src: "/speakers/anishgokhle.svg",
    width: 210,
    height: 200,
  },
  {
    name: "Shubhankar Mishra",
    src: "/speakers/shubhankarmishra.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Janhvi Singh",
    src: "/speakers/janhvisingh.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Ankit Bayanpuria",
    src: "/speakers/ankitbayanpuria.svg",
    width: 200,
    height: 200,
  },
  {
    name: "Saina Nehwal",
    src: "/speakers/sainanehwal.svg",
    width: 200,
    height: 200,
  },
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
        {/* <Image
          src="/partnersDate.svg"
          alt="Festival logo"
          width={127}
          height={52}
          className="object-contain min-w-xl w-120 h-100"
        /> */}
        <Image
                            className="size-30 xl:size-52"
                            // src="https://ik.imagekit.io/zjaqik2mc/homehero/logo.svg?updatedAt=1743486047833"
                            src="/mainpage/logo.svg"
                            alt="Festival logo"
                            width={127}
                            height={52}
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
          src="/centermobilelogo.png"
          alt="Festival logo"
          width={67}
          height={67}
          className="object-cover w-20 "
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
                width={speaker.width}
                height={speaker.height}
                className="object-contain"
              />
              <p className="mt-2 text-black text-lg font-ebGaramond">
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
                width={speaker.width}
                height={speaker.height}
              />
              <p className="mt-2 text-black text-lg font-ebGaramond">
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
                width={speaker.width}
                height={speaker.height}
              />
              <p className="mt-2 text-black text-sm font-ebGaramond">
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
