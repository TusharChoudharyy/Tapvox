import { useEffect } from "react";
import "./About.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import AboutImg from "../../assets/cta-phone.png"; // Replace with your image

import { CheckCircle } from "lucide-react";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const features = [
    "Real-time insights for your business",
    "Seamless integration with your workflow",
    "Secure and reliable messaging",
    "User-friendly interface and design",
  ];

  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__image" data-aos="fade-right">
          <img src={AboutImg} alt="About Tapvox" />
        </div>
        <div className="about__content" data-aos="fade-left">
          <h2>About Tapvox</h2>
          <p>
            Tapvox is designed to simplify communication and help businesses
            connect with their audience efficiently. Our platform ensures
            reliability, security, and ease of use for every user.
          </p>
          <ul className="about__features">
            {features.map((feature, index) => (
              <li key={index}>
                <CheckCircle className="about__icon" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
