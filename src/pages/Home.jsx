import ContactUs from "../components/ContactUs"
import Gallery from "../components/Gallery"
import Hero from "../components/Hero"
import Menue from "../components/Menue"
import Testmoniols from "../components/Testmoniols"

function Home() {
  return (
    <div>
      <Hero/>
      <Menue/>
      <Gallery/>
      <Testmoniols/>
      <ContactUs/>
    </div>
  )
}
export default Home