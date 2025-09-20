import { Routes, Route } from "react-router-dom";
import BlogSection from "./Components/BlogSection/BlogSection"
import Brands from "./Components/BrandsSection/Brands"
import CtaSection from "./Components/CtaSection/CtaSection"
import FeaturesSection from "./Components/FeaturesSection/FeaturesSection"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import PaymentSection from "./Components/PaymentSection/PaymentSection"
import PlansSection from "./Components/PlansSection/PlansSection"
import CompanySection from "./Components/companySection/CompanySection"
import Career from "./Components/CareerSection/Career"
import PrivacyPage from "./Components/PrivacyPage/Privacy"

// 🟢 Home page ko alag function banaya
function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <CompanySection />
      <FeaturesSection />
      <PaymentSection />
      <CtaSection />
      <PlansSection />
      <Career />
      <BlogSection />
      <Footer />
    </>
  )
}

// 🟢 App me routes daale
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
    </Routes>
  )
}

export default App;
