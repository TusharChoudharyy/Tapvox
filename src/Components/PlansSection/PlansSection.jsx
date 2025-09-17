import "./PlansSection.scss";
import Wrapper from "../Wrapper/Wrapper";
import Tick from "../../assets/plans-tick.svg";
import Img1 from "../../assets/plan-1.jpg";
import Img2 from "../../assets/plan-2.jpg";
import Img3 from "../../assets/plan-3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function PlansSection() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <section className="plans">
      <Wrapper>
        <h3 data-aos="fade-up">Our Expert Telecom Services</h3>

        <div className="plans__container">
          <div className="plans__card" data-aos="fade-right">
            <div className="plans__card-left">
              <div className="plans__card-features">
                <img src={Tick} alt="" />
                <p>Scalable SIP trunks for enterprises</p>
              </div>
              <div className="plans__card-features">
                <img src={Tick} alt="" />
                <p>Seamless number portability</p>
              </div>
              <div className="plans__card-features">
                <img src={Tick} alt="" />
                <p>Reliable inbound voice routing</p>
              </div>
              {/* <a href="" className='button-primary'> 
                Get a card online
              </a> */}
            </div>
            <div className="plans_card_right">
              <img src={Img1} alt="" />
              <div className="plans__card-title">
                <h6>Wholesale Origination</h6>
                {/* <span>$ 0.00 USD / Month</span> */}
              </div>
            </div>
          </div>

          <div className="plans__card" data-aos="fade-left">
            <div className="plans__card-left">
              <div className="plans__card-features">
                <img src={Tick} alt="" />
                <p>Direct CLI premium routes</p>
              </div>
              <div className="plans__card-features">
                <img src={Tick} alt="" />
                <p>Cost-effective NCLI termination</p>
              </div>
              <div className="plans__card-features">
                <img src={Tick} alt="" />
                <p>Tier-1/2 carrier interconnects</p>
              </div>
              {/* <a href="" className='button-primary'> 
                Get a card online
              </a> */}
            </div>
            <div className="plans_card_right">
              <img src={Img2} alt="" />
              <div className="plans__card-title">
                <h6>Wholesale Termination</h6>
                {/* <span>$ 0.00 USD / Month</span> */}
              </div>
            </div>
          </div>
          <div className="plans__card" data-aos="fade-right">
            <div className="plans__card-left">
              <div className="plans__card-features">
                <img src={Tick} alt="" />
                <p>High-volume, low-latency routing</p>
              </div>
              <div className="plans__card-features">
                <img src={Tick} alt="" />
                <p>Optimized ACD & ASR</p>
              </div>
              <div className="plans__card-features">
                <img src={Tick} alt="" />
                <p>Scalable call handling</p>
              </div>
              {/* <a href="" className='button-primary'> 
                Get a card online
              </a> */}
            </div>
            <div className="plans_card_right">
              <img src={Img3} alt="" />
              <div className="plans__card-title">
                <h6>Call Center Routing</h6>
                {/* <span>$ 0.00 USD / Month</span> */}
              </div>
            </div>
          </div>

          <div className="plans__card" data-aos="fade-right">
            <div className="plans__card-left">
              <div className="plans__card-features">
                <img src={Tick} alt="" />
                <p>High-quality voice telephony</p>
              </div>
              <div className="plans__card-features">
                <img src={Tick} alt="" />
                <p>Seamless integration with retail systems</p>
              </div>
              <div className="plans__card-features">
                <img src={Tick} alt="" />
                <p>Cost-effective communication solutions</p>
              </div>
              {/* <a href="" className='button-primary'> 
                Get a card online
              </a> */}
            </div>
            <div className="plans_card_right">
              <img src={Img1} alt="" />
              <div className="plans__card-title">
                <h6>Retail Voice Services</h6>
                {/* <span>$ 0.00 USD / Month</span> */}
              </div>
            </div>
          </div>

          <div className="plans__card" data-aos="fade-right">
            <div className="plans__card-left">
              <div className="plans__card-features">
                <img src={Tick} alt="" />
                <p>Flexible routing & payouts</p>
              </div>
              <div className="plans__card-features">
                <img src={Tick} alt="" />
                <p>Global Premium Rate Numbers</p>
              </div>
              <div className="plans__card-features">
                <img src={Tick} alt="" />
                <p>Intelligent ATX call termination</p>
              </div>
              {/* <a href="" className='button-primary'> 
                Get a card online
              </a> */}
            </div>
            <div className="plans_card_right">
              <img src={Img2} alt="" />
              <div className="plans__card-title">
                <h6>ATX & IPRN Services</h6>
                {/* <span>$ 0.00 USD / Month</span> */}
              </div>
            </div>
          </div>

          <div className="plans__card" data-aos="fade-right">
            <div className="plans__card-left">
              <div className="plans__card-features">
                <img src={Tick} alt="" />
                <p>Global A2P SMS termination</p>
              </div>
              <div className="plans__card-features">
                <img src={Tick} alt="" />
                <p>Direct operator connections</p>
              </div>
              <div className="plans__card-features">
                <img src={Tick} alt="" />
                <p>High delivery, competitive rates</p>
              </div>
              {/* <a href="" className='button-primary'> 
                Get a card online
              </a> */}
            </div>
            <div className="plans_card_right">
              <img src={Img3} alt="" />
              <div className="plans__card-title">
                <h6>A2P SMS Messaging</h6>
                {/* <span>$ 0.00 USD / Month</span> */}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default PlansSection;
