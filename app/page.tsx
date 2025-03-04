
import Hero from "@/components/Hero"
import About from "@/components/About"
import Partners from "@/components/Partners"
import Speakers from '@/components/Speakers'
import Events from '@/components/Events'
import Registration from '@/components/Registration'

export default function Home() {
  return(
    <div>
      <Hero/>
      <About />
      <Partners/>
      <Speakers />
      <Events/>
      <Registration/>
    </div>
    );
}

