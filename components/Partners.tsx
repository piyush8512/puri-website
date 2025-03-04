import React from "react";
import Image from "next/image";
function Partners() {
  return (
    <div className="flex flex-col min-h-[80vh] justify-center gap-20 relative">
      <h1 className="text-center text-6xl font-leckerli text-[#FF0707]">
        Partners
      </h1>
      <div className="flex justify-evenly">
        <div className="dashed-border p-[10px] bg-center bg-no-repeat bg-cover">
          <Image
            src="/partner1.svg"
            alt="logo"
            width={201}
            height={201}
          ></Image>
        </div>
        <div className="dashed-border p-[10px] bg-center bg-no-repeat bg-cover">
          <Image
            src="/partner2.svg"
            alt="logo"
            width={201}
            height={201}
          ></Image>
        </div>
        <div className="dashed-border p-[10px] bg-center bg-no-repeat bg-cover">
          <Image
            src="/partner3.svg"
            alt="logo"
            width={201}
            height={201}
          ></Image>
        </div>
        <div className="dashed-border p-[10px] bg-center bg-no-repeat bg-cover">
          <Image
            src="/partner4.svg"
            alt="logo"
            width={201}
            height={201}
          ></Image>
        </div>
        <div className="dashed-border p-[10px] bg-center bg-no-repeat bg-cover">
          <Image
            src="/partner5.svg"
            alt="logo"
            width={201}
            height={201}
          ></Image>
        </div>
      </div>
      
    </div>
  );
}

export default Partners;
