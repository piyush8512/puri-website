import Hero from "@/components/Hero";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Speakers from "@/components/Speakers";
import Events from "@/components/Events";
import Registration from "@/components/Registration";
import Programes from "@/components/Programes";
import Stay from "@/components/Stay";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Partners />
      <Speakers />
      <Programes />
      <Events />
      <Registration />
      {/* <div className="md:hidden">
        <Stay />
      </div> */}
      <Footer />
    </div>
  );
}
