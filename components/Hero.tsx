import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="relative w-full mt-5 sm:mt-0 md:mt-8 lg:mt-8 xl:mt-8 2xl:mt-8">


      {/* Blue decorative background */}  
      
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

     
      

      {/* Center logo */}
      <h1 className=" md:block hidden absolute text-xl text-center  top-65 mt-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  18th APRIL - 20th APRIL 2025<br/>
  <span className="text-2xl font-libreCaslon">Taj Hotels, Puri</span>
</h1>
<h1 className="md:hidden absolute text-sm -mt-12 left-1/2 transform -translate-x-1/2 translate-y-3/6 text-center">
  18th APRIL - 20th APRIL 2025<br/>
  <span className="text-xl">Taj Hotels, Puri</span>
</h1>
<h1 className="text-red-600 md:hidden  absolute text-2xl translate-2/3 mt-8 transform  left-1/2 -translate-x-1/2 text-center font-libreBodoni">CELEBRATING<span><br/>BOOKS & IDEAS</span>

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
            src="/centermobilelogo.png"
            alt="Festival logo"
            width={127}
            height={52}
            className="object-cover w-full md:hidden"
            priority
          />
        </div>
      </div>

      <div className="relative hidden md:block md:mt-0 mt-50  h-[40vh] md:h-[90vh] z-20 hero-temple bg-center bg-cover bg-no-repeat"></div>
      <div className="mt-50 md:hidden">
      <Image
            src="/mobileherobg.png"
            alt="Festival logo"
            width={127}
            height={52}
            className="object-cover w-full md:hidden"
            priority  
          />
      </div>
      

      <div
        className="absolute md:block hidden bottom-0 left-0 right-0 bg-[#D72327] 
                      h-12 md:h-16 lg:h-24 xl:h-32"
      ></div>
    </div>
  );
}
