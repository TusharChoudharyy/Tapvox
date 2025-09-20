import BlogSection from "./Components/BlogSection/BlogSection"
import Brands from "./Components/BrandsSection/Brands"
// import About from "./Components/Countries/About"
// import CountriesSection from "./Components/Countries/CountriesSection"
import CtaSection from "./Components/CtaSection/CtaSection"
import FeaturesSection from "./Components/FeaturesSection/FeaturesSection"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import PaymentSection from "./Components/PaymentSection/PaymentSection"
import PlansSection from "./Components/PlansSection/PlansSection"
import CompanySection from "./Components/companySection/CompanySection"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Brands />
      <CompanySection />
      <FeaturesSection />
      <PaymentSection />
      <CtaSection />
      <PlansSection />
      <BlogSection />
      <Footer />
    </>
  )
}

export default App
