import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full">
      {/* Blue decorative background */}
      <div className="w-full relative">
        <Image
          className="w-full object-cover h-[40vh]"
          src="/hero-bg.svg"
          alt="Decorative background"
          width={400}
          height={150}
          sizes="20vh"
        />
        
        {/* Upmandir Image Positioned Above */}
        <Image
          src="/mandirup.svg"
          alt="Upmandir"
          width={400}
          height={150}
          className="absolute top-70  left-1/2 transform -translate-x-50 translate-y-52 z-20"
        />
      </div>
      
      {/* Center logo */}
      <div className="absolute top-15 object-cover left-1/2 transform -translate-x-1/2 -translate-y-0 md:-translate-y-1/4 h-[30.8vh] w-[8.8vw]">
        <div>
          <Image
            src="/logo.svg"
            alt="Festival logo"
            width={127}
            height={52}
            className="object-cover w-full"
            priority
          />
        </div>
      </div>

      <div className="relative h-[82vh] z-10 hero-temple bg-center bg-cover bg-no-repeat"></div>

      <div className="absolute bottom-0 left-0 right-0 bg-[#D72327] h-16 md:h-24 lg:h-32"></div>
    </div>
  );
}
