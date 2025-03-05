import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full">
      {/* Blue decorative background */}
      <div className="w-full">
        <Image
          className="w-full object-cover h-[45vh]"
          src="/hero-bg.svg"
          alt="Decorative background"
          width={400}
          height={150}
          sizes="20vh"
        />
      </div>
      
      {/* Center logo */}
      <div className="absolute top-15 object-cover left-1/2 transform -translate-x-1/2 -translate-y-0 md:-translate-y-1/4 h-[33.8vh] w-[10.8vw]">
        <div className="">
          <Image
            src="/logo.svg"
            alt="Festival logo"
            width={137}
            height={62}
            className="object-cover w-full"
            priority
          />
        </div>
      </div>
      <div className="relative h-[82vh] z-10 hero-temple bg-center bg-cover bg-no-repeat">
  </div>
  <div className="absolute bottom-0 left-0 right-0 bg-[#D72327] h-16 md:h-24 lg:h-32"></div>
  {/* <Image
    className="w-full relative z-10 object-cover"
    src="/hero-temple.svg"
    alt="Festival logo"
    width={300}
    height={100}
    priority
  /> */}
    </div>  
  );
}