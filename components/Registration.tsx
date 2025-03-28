// import React from 'react';
// import Image from 'next/image';

// const Registration = () => {
//   return (
//     <div className=" min-h-[90vh] relative w-full max-w-7xl mx-auto overflow-hidden px-4  ">
//       {/* Main container */}
//       <div className="bg-white pb-8 relative">
//         {/* Content container with phone illustration and text */}
//         <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8">
//           {/* Left side - Phone with people walking illustration */}
//           <div className="relative w-full md:w-1/2 lg:w-2/5 flex-shrink-0">
//             <Image 
//               className='pt-10 md:pt-20 lg:pt-40 mx-auto'
//               src="/mobile.svg" 
//               alt="People walking on smartphone" 
//               width={450}
//               height={450}
//               style={{ objectFit: "contain" }}
//               priority
//             />
//           </div>
          
//           {/* Right side - Registration heading and text */}
//           <div className="w-full md:w-1/2 lg:w-3/5 mt-8 md:mt-0">
//             {/* Registration heading with decorative elements */}
//             <div className="flex items-center justify-center gap-2 mb-4">
//               <Image src="/shank.svg" alt="Decorative element" width={60} height={150} className="w-12 md:w-16 lg:w-20" />
//               <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-red-600 font-leckerli">Registration</h1>
//               <Image src="/shank.svg" alt="Decorative element" width={60} height={150} className="w-12 md:w-16 lg:w-20 scale-x-[-1]" />
//             </div>
            
//             {/* Registration text */}
//             <p className="text-center text-[10px] md:text-lg lg:text-xl px-2 md:px-4 lg:px-6">
//               The 2025 edition of the Puri Literary Festival will bring together literary 
//               icons, cultural historians, and thought leaders for an inspiring 
//               celebration of India&apos;s heritage and future. Register now to be part of this 
//               immersive experience from April 18-20 in Puri, Odisha, featuring 
//               dynamic sessions, cultural performances, heritage walks, and 
//               interactive workshops that bridge tradition with contemporary 
//               discourse.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registration;


import React from 'react';
import Image from 'next/image';

const Registration = () => {
  return (
    <div className=" min-h-[90vh] relative w-full max-w-7xl mx-auto overflow-hidden px-4  ">
      {/* Main container */}
      <div className="bg-white pb-8 relative">
        {/* Content container with phone illustration and text */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8">
          {/* Left side - Phone with people walking illustration */}
          <div className="relative w-full md:w-1/2 lg:w-2/5 flex-shrink-0">
            <Image 
              className='pt-10 md:pt-20 lg:pt-40 mx-auto'
              src="/mobile.svg" 
              alt="People walking on smartphone" 
              width={450}
              height={450}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          
          {/* Right side - Registration heading and text */}
          <div className="w-full md:w-1/2 lg:w-3/5 mt-8 md:mt-0">
            {/* Registration heading with decorative elements */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <Image src="/shank.svg" alt="Decorative element" width={60} height={150} className="w-12 md:w-16 lg:w-20" />
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-red-600 font-leckerli">Registration</h1>
              <Image src="/shank.svg" alt="Decorative element" width={60} height={150} className="w-12 md:w-16 lg:w-20 scale-x-[-1]" />
            </div>
            
            {/* Registration text */}
            <p className="text-center text-[10px] md:text-lg lg:text-xl px-2 md:px-4 lg:px-6">
              The 2025 edition of the Puri Literary Festival will bring together literary 
              icons, cultural historians, and thought leaders for an inspiring 
              celebration of India&apos;s heritage and future. Register now to be part of this 
              immersive experience from April 18-20 in Puri, Odisha, featuring 
              dynamic sessions, cultural performances, heritage walks, and 
              interactive workshops that bridge tradition with contemporary 
              discourse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
