import "./PaymentSection.scss";
import Wrapper from "../Wrapper/Wrapper";
import PhoneImg from "../../assets/payment-phone.png";
import CardImg from "../../assets/payment-card.png";
import TickImg from "../../assets/payment-tick.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function PaymentSection() {
  useEffect(()=> {
    Aos.init({duration: 1000});
  })
  return (
    <section className="payment">
      <Wrapper className='payment__container'>
        <div className="payment__left" data-aos='fade-right'>
          <h3>Broad Global Coverage</h3>
          <p>Tapvox enables telecom businesses with strong A–Z coverage, connecting carriers via direct operator routes across Asia, Africa, the Gulf, and CIS regions.</p>

          <div className="payment__text">
            <img src={TickImg} alt="" />
            <div>
              <h4>Asia Expertise</h4>
              <p>India, Bangladesh, Philippines, Vietnam, Pakistan, China</p>
            </div>
          </div>

          <div className="payment__text">
            <img src={TickImg} alt="" />
            <div>
              <h4>Africa Reach</h4>
              <p>Nigeria, Kenya, South Africa, Ghana, Egypt, Tanzania</p>
            </div>
          </div>

           <div className="payment__text">
            <img src={TickImg} alt="" />
            <div>
              <h4>Gulf Network</h4>
              <p> UAE, Saudi Arabia, Oman, Qatar, Bahrain, Kuwait</p>
            </div>
          </div>

          <div className="payment__text">
            <img src={TickImg} alt="" />
            <div>
              <h4>CIS Interconnects</h4>
              <p>Russia, Ukraine, Kazakhstan, Georgia, Uzbekistan</p>
            </div>
          </div>

          
        </div>

        

        <div className="payment__right" data-aos='fade-left'>
          <img src={PhoneImg} className="img-1" alt="" />
          <img src={CardImg} className="img-2" alt="" />

          <div className="payment__partners">
            <h4>3500</h4>
            <div>Trusted Partners</div>
          </div>

          <div className="payment__users">
            <h4>1M</h4>
            <p>Active Users</p>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default PaymentSection
