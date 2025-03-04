import React from "react";
import Image from "next/image";
function Speakers() {
  return (
    <div className="speakers-bg bg-no-repeat bg-cover bg-center h-[130vh] flex justify-around items-center relative">
      <div className="h-96 w-96 bg-[#FFEC8C] rounded-full absolute top-0 left-1/6 -z-10">
      </div>  
        <Image
          src="/woman.svg"
          alt="woman"
          width={350}
          height={350}
          className="absolute -top-16 left-1/6  z-50"
        ></Image>
      <div>
        <h1 className="text-5xl text-[#E90909] font-leckerli text-center w-3/4 ml-16">
          Puri Lit Fest’s <span className="text-6xl">Speakers</span>
        </h1>
      </div>
      <div className="relative w-1/2">
        <div className="absolute bottom-10">
          <Image
            src="speaker.svg"
            alt="speaker"
            width={282}
            height={282}
          ></Image>
        </div>
        <div className="absolute bottom-0 right-30">
          <Image
            src="speaker.svg"
            alt="speaker"
            width={282}
            height={282}
          ></Image>
        </div>
        <div className="absolute top-0">
          <Image
            src="speaker.svg"
            alt="speaker"
            width={282}
            height={282}
          ></Image>
        </div>
        <div className="absolute top-10 right-30">
          <Image
            src="speaker.svg"
            alt="speaker"
            width={282}
            height={282}
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Speakers;
