import "./CompanySection.scss";
import Wrapper from "../Wrapper/Wrapper";
// import Company1 from "../../assets/tapvox logos (155 x 40 px)/1.png";
// import Company2 from "../../assets/tapvox logos (155 x 40 px)/2.png";
// import Company3 from "../../assets/tapvox logos (155 x 40 px)/3.png";
// import Company4 from "../../assets/tapvox logos (155 x 40 px)/4.png";
// import Company5 from "../../assets/tapvox logos (155 x 40 px)/5.png";
import Phone from "../../assets/companysectionphone.png";
import AppStore from "../../assets/appstore.svg";
import PlayStore from "../../assets/playstore.svg";
import Bg from "../../assets/companies-bg.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function CompanySection() {
  useEffect(()=> {
    Aos.init({duration: 1000});
  })
  return (
    <section id="WhyChooseUs" className="company">
      <Wrapper>
        {/* <div data-aos="fade-up">
        <h4>Trusted by over 500+ companies</h4>
        <div className="company__companies">
          <img src={Company1} alt="" />
          <img src={Company2} alt="" />
          <img src={Company3} alt="" />
          <img src={Company4} alt="" />
          <img src={Company5} alt="" />
        </div>
        </div> */}

        <div className="company__container">
          <div className="company__left" data-aos='fade-right'>
            <img src={Phone} className="img-1" alt="" />
            <div className="img-2">
              {/* <img src={AppStore} alt="" /> */}
            </div>
            <div className="img-3">
              {/* <img src={PlayStore} alt="" /> */}
            </div>
          </div>

          <div className="company__right" data-aos='fade-left'>
            <h3>Why Tapvox as a VoIP Aggregator?</h3>
            <p>Tapvox simplifies communication by unifying multiple VoIP services, ensuring cost efficiency, reliability, seamless integration, and enhanced call quality for businesses.</p>

            <div className="company__points-container">
              <div className="company__point">
                <div className="company__point-icon">
                  <div>1</div>
                </div>
                <div className="company__point-text">
                  Strong Supplier Interconnects – Global carrier partnerships
                </div>
              </div>
              <div className="company__point">
                <div className="company__point-icon">
                  <div>2</div>
                </div>
                <div className="company__point-text">
                  LCR Routing – Cost-optimized without compromising quality
                </div>
              </div>
              <div className="company__point">
                <div className="company__point-icon">
                  <div>3</div>
                </div>
                <div className="company__point-text">
                  24/7 NOC & Real-Time Monitoring – KPIs like ACD, ASR, PDD, NER tracked constantly
                </div>
              </div>
              <div className="company__point">
                <div className="company__point-icon">
                  <div>4</div>
                </div>
                <div className="company__point-text">
                  24/7 NOC & Real-Time Monitoring – KPIs like ACD, ASR, PDD, NER tracked constantly
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

      <img src={Bg} className="company__bg" alt="" />
    </section>
  );
}

export default CompanySection;
