import './FeaturesSection.scss';
import Wrapper from '../Wrapper/Wrapper';
import Img1 from "../../assets/feature-1.svg";
import Img2 from "../../assets/feature-2.svg";
import Img3 from "../../assets/feature-3.svg";
import Img4 from "../../assets/feature-4.svg";
import Img5 from "../../assets/feature-5.svg";
import Img6 from "../../assets/feature-6.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function FeaturesSection() {
  useEffect(()=> {
    Aos.init({duration: 1000});
  })
  return (
    <section id='features' className='features'>
      <Wrapper>
        <div className="features__text" data-aos='fade-up'>
          <h3>Reliable Global Voice & Messaging Solutions</h3>
          <p>Tapvox offers premium VoIP and A2P SMS services with global reach, high-quality voice routes, advanced call center features, and 24/7 carrier-grade telecom reliability.</p>
        </div>

        <div className="features__container" data-aos='fade-up'>
          <div className="features__feature dark-feature">
            <img src={Img1} alt="" />
            <h4 className='dark-feature-title'>Global Connectivity</h4>
            <p>Extensive voice and messaging coverage across Asia, Africa, the Gulf, and CIS regions.</p>
          </div>
          <div className="features__feature white-feature">
            <img src={Img2} alt="" />
            <h4 className='white-feature-title'>Wholesale Voice Solutions</h4>
            <p>Direct CLI and NCLI routes deliver high-quality, reliable global voice services.</p>
          </div>
          <div className="features__feature dark-feature">
            <img src={Img3} alt="" />
            <h4 className='dark-feature-title'>Enterprise-Grade Performance</h4>
            <p>Advanced routing and premium rate solutions designed for call centers and large enterprises.</p>
          </div>
          <div className="features__feature white-feature">
            <img src={Img4} alt="" />
            <h4 className='white-feature-title'>Omnichannel Messaging</h4>
            <p>Powerful A2P SMS and customer engagement services with premium global delivery.</p>
          </div>
          <div className="features__feature dark-feature">
            <img src={Img5} alt="" />
            <h4 className='dark-feature-title'>24/7 Uptime & Security</h4>
            <p>Carrier-grade switching and proactive monitoring ensure uninterrupted, secure operations.</p>
          </div>
          <div className="features__feature white-feature">
            <img src={Img6} alt="" />
            <h4 className='white-feature-title'>Flexible Value-Added Services</h4>
            <p>Aggregation, custom routing, and payout models tailored for scalable, compliant growth.</p>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default FeaturesSection
