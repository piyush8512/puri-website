import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="relative py-15 inset-0 overflow-x-hidden">
      {/* Desktop view: hero section with logo and background image */}
      <div className="hidden hero-bg bg-center bg-cover bg-no-repeat min-h-[30vh] h-[34vh] md:flex md:flex-col items-center justify-start relative">
        <Image
          src="/partnersDate.svg"
          alt="Festival logo"
          width={127}
          height={52}
          className="object-contain min-w-xl w-120 h-100"
        />
      </div>

      {/* Mobile view: hero section with logo and background image */}
      <div className="md:hidden hero-bg-mobile bg-center bg-cover bg-no-repeat h-[21vh] w-full flex flex-col justify-center items-center relative">
        {/* Logo image */}
        <Image
          src="/mobilePartnersDate.svg"
          alt="Festival logo"
          width={67}
          height={67}
          className="object-cover w-50 sm:w-75"
        />
      </div>
      <h1 className="font-leckerli font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#D72327] text-center md:10 lg:mt-25">
        Partners
      </h1>
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 justify-center items-center mt-5 sm:mt-8 md:mt-10 lg:mt-15 px-3 sm:px-4 md:px-5">
        {/* In Association With Section */}
        <div className="w-full max-w-6xl">
          <h1 className="font-libreBodoni font-medium text-xl sm:text-2xl text-center py-3 sm:py-5">
            In Association With
          </h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 items-center justify-items-center">
            <li className="text-center text-sm sm:text-base md:text-lg">
              <Link href="https://odisha.gov.in" target="_blank">
                <Image
                  src="/Government_of_India_logo.svg"
                  alt="odisha seal"
                  width={150}
                  height={150}
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40"
                />
              </Link>
            </li>
            <li>
              <Link href="https://odisha.gov.in" target="_blank">
                <Image
                  src="/Seal_of_Odisha.svg"
                  alt="odisha seal"
                  width={150}
                  height={150}
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40"
                />
              </Link>
            </li>
            <li className="text-center text-sm sm:text-base md:text-lg">
              <Link href="https://odisha.gov.in" target="_blank">
                <Image
                  src="/Ministry_of_Culture_India.svg"
                  alt="odisha seal"
                  width={150}
                  height={150}
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40"
                />
              </Link>
            </li>
            <li className="text-center text-sm sm:text-base md:text-lg">
              <Link href="https://odisha.gov.in" target="_blank">
                <Image
                  src="/logo1.svg"
                  alt="odisha seal"
                  width={150}
                  height={150}
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40"
                />
              </Link>
            </li>
            <li className="text-center text-sm sm:text-base md:text-lg">
              <Link href="https://odisha.gov.in" target="_blank">
                <Image
                  src="/IGNCA.svg"
                  alt="odisha seal"
                  width={150}
                  height={150}
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40"
                />
              </Link>
            </li>
          </ul>
        </div>

        {/* Session Partners Section */}
        <div className="w-full max-w-6xl">
          <h1 className="font-libreBodoni font-medium text-xl sm:text-2xl text-center py-3 sm:py-5">
            Session Partners
          </h1>
          <div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 items-center justify-items-center">
              <li>
                <Link href="https://www.brhat.in" target="_blank">
                  <Image
                    src="/brhat.jpg"
                    alt="Brhat logo"
                    width={150}
                    height={150}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://www.isdm.org.in" target="_blank">
                  <Image
                    src="/isdm.jpg"
                    alt="ISDM logo"
                    width={150}
                    height={150}
                  />
                </Link>
              </li>
              <li className="text-center text-sm sm:text-base md:text-lg">
                Celsius
              </li>
            </ul>
          </div>
        </div>

        {/* University Partner Section */}
        <div className="w-full max-w-6xl">
          <h1 className="font-libreBodoni font-medium text-xl sm:text-2xl text-center py-3 sm:py-5">
            University Partner
          </h1>
          <div>
            <ul className="grid grid-cols-1 items-center justify-items-center">
              <li>
                <Link href="https://jgu.edu.in" target="_blank">
                  <Image
                    src="/jindalUni.jpg"
                    alt="Jindal University logo"
                    width={150}
                    height={150}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Media Partners Section */}
        <div className="w-full max-w-6xl">
          <h1 className="font-libreBodoni font-medium text-xl sm:text-2xl text-center py-3 sm:py-5">
            Media Partners
          </h1>
          <div className="mb-10 sm:mb-16 md:mb-20">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 items-center justify-items-center">
              <li>
                <Link href="https://www.argusmedia.com/en" target="_blank">
                  <Image
                    src="/argus.jpg"
                    alt="Argus Media logo"
                    width={150}
                    height={150}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://www.prameyaepaper.com" target="_blank">
                  <Image
                    src="/prameya.jpg"
                    alt="Prameya logo"
                    width={150}
                    height={150}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
