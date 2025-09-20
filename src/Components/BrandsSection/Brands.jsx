import "./Brands.scss";
import Wrapper from "../Wrapper/Wrapper";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules"; // Pagination removed
import "swiper/css";
import "swiper/css/navigation";

import Logo1 from "../../assets/tapvox logos (155 x 40 px)/1.png";
import Logo2 from "../../assets/tapvox logos (155 x 40 px)/2.png";
import Logo3 from "../../assets/tapvox logos (155 x 40 px)/3.png";
import Logo4 from "../../assets/tapvox logos (155 x 40 px)/4.png";
import Logo5 from "../../assets/tapvox logos (155 x 40 px)/5.png";
import Logo6 from "../../assets/tapvox logos (155 x 40 px)/6.png";

function Brands() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

  return (
    <section id="brand" className="brands">
      <Wrapper>
        <div className="brands__container" data-aos="fade-up">
          <h2 className="brands__title">Our Trusted Partners</h2>
          <p className="brands__subtitle">
            We proudly collaborate with leading global brands
          </p>

          {/* First row - Left to Right */}
          <Swiper
            modules={[Autoplay, FreeMode, Navigation]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            speed={8000}
            // navigation // uncomment if you want arrows
            className="brands__swiper"
          >
            {logos.map((logo, i) => (
              <SwiperSlide key={i}>
                <div className="brands__item">
                  <img src={logo} alt={`Brand ${i + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Second row - Right to Left */}
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 4,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            speed={5000}
            className="brands__swiper second-row"
          >
            {logos.map((logo, i) => (
              <SwiperSlide key={i}>
                <div className="brands__item">
                  <img src={logo} alt={`Brand ${i + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Wrapper>
    </section>
  );
}

export default Brands;
