import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="relative w-full mt-7 md:mt-8.5">
      {/* Blue decorative background */}
      <div className="w-full relative">
        <Image
          className="w-full h-[15vh] md:h-[40vh] hidden md:block"
          src="/hero-bg1.svg"
          alt="Decorative background"
          width={400}
          height={150}
          sizes="(max-width: 768px) 100vw, 40vh"
        />
        <Image
          className="w-full h-[30vh] md:hidden "
          src="/Vector1.svg"
          alt="Decorative background"
          width={600}
          height={150}
          sizes=""
        />

      </div>
      

      {/* Center logo */}
      <h1 className=" md:block hidden absolute text-2xl top-67 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  18th APRIL - 20nd APRIL 2025
</h1>
<h1 className="md:hidden absolute text-sm  left-1/2 transform -translate-x-1/2 translate-y-3/6 text-center">
  18th APRIL - 20th APRIL 2025<br/>
  <span className="text-xl">Taj Hotels, Puri</span>
</h1>
<h1 className="text-red-600 md:hidden  absolute text-4xl translate-2/3 transform  left-1/2 -translate-x-1/2 text-center">Celebrating<span><br/>Books & Ideas</span>

</h1>

<Button 
  variant="destructive" 
  className="fixed z-100 md:hidden -left-10 top-1/2 transform -translate-y-1/2 -rotate-90 m-0 font-leckerli px-3 py-2"
>
  Register Now&nbsp;
</Button>

 


      <div
        className="absolute top-16 left-1/2 transform -translate-x-1/2 
                      md:top-15 md:-translate-y-1/4 
                      h-[30vh] md:h-[30.8vh] 
                      w-[18.5vw] md:w-[8.8vw]"
      >
        <div>
          <Image
            src="/logo.svg"
            alt="Festival logo"
            width={127}
            height={52}
            className="object-cover w-full md:block hidden"
            priority
          />
          <Image
            src="/logomobile.svg"
            alt="Festival logo"
            width={127}
            height={52}
            className="object-cover w-full md:hidden"
            priority
          />
        </div>
      </div>

      <div className="relative md:mt-0 mt-50  h-[40vh] md:h-[82vh] z-10 hero-temple bg-center bg-cover bg-no-repeat"></div>

      <div
        className="absolute bottom-0 left-0 right-0 bg-[#D72327] 
                      h-12 md:h-16 lg:h-24 xl:h-32"
      ></div>
    </div>
  );
}
