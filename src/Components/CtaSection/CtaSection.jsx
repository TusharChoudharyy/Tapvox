import './CtaSection.scss';
import Wrapper from '../Wrapper/Wrapper';
import PhoneImg from "../../assets/Cta-imagessvg.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function CtaSection() {
  useEffect(()=> {
    Aos.init({duration: 1000});
  })
  return (
    <section className='cta'>
      <Wrapper className='cta__container'>
       <div className="cta__left" data-aos='fade-right'>
        <img src={PhoneImg} alt="" />
       </div>

       <div className="cta__right" data-aos='fade-left'>
        <h3>Take control of your telecom network today</h3>
        <p>
         Seamless integrations and powerful tools to optimize your voice and messaging workflows, empowering your teams for unmatched connectivity and efficiency.
        </p>

        <form action="">
          <input type="email" placeholder='Enter Your Email' className='email' name="" id="" />
          <input type="submit" value='submit' className='button-primary' />
        </form>
       </div>
      </Wrapper>
    </section>
  )
}

export default CtaSection
