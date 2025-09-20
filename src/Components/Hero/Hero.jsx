import "./Hero.scss";
import Wrapper from "../Wrapper/Wrapper";
import Img1 from "../../assets/Tapvoxdashboardupdated.svg"
import Img2 from "../../assets/hero-right.svg"
import Img3 from "../../assets/hero-left.svg"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Hero() {
  useEffect(()=> {
    Aos.init({duration: 1000});
  })
  return (
    <section id="Home" className="hero">
      <Wrapper className="hero__container">
        <div className="hero__left" data-aos='zoom-in-up'>
          <h1>Global Voice & Messaging Solutions</h1>
          <p>Wholesale Origination, Termination & A2P SMS Services with Premium Quality, Competitive Rates, and Worldwide Coverage.
            Tapvox connects carriers, enterprises, and call centers with reliable VoIP and messaging solutions across Asia, Africa, the Gulf, and CIS.
          </p>

          <div className="hero__btn-container">
            <a href="#" className="button-primary"> Get Started - it's free</a>

            <a href="#" className="button-outline">How it's works</a>
          </div>
        </div>

        <div className="hero__right" data-aos="fade-left">
          <img src={Img1} className="img-1" alt="" />
          <img src={Img2} className="img-2" alt="" />
          <img src={Img3} className="img-3" alt="" />
        </div>
      </Wrapper>
    </section>
  )
}

export default Hero
