import './Footer.scss';
import Wrapper from '../Wrapper/Wrapper';
import Logo from "../../assets/tapvox.png";
import grapewishLogo from "../../assets/grapewish.gif";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <footer className="footer">
      <Wrapper>
        <div className="footer__top" data-aos="fade-up">
          {/* Logo + Tagline */}
          <div className="footer__brand">
            <img src={Logo} alt="Tapvox Logo" className="footer__brand-logo" />
            <p className="footer__tagline">
              Powering global communication & strategic finance solutions for over a decade.
            </p>
          </div>

          {/* Contact Details */}
          <div className="footer__contacts">
            <h4>Corporate Office</h4>
            <p>
              Unit 1603, 16th Floor, The L. Plaza,<br />
              367 - 375 Queen's Road Central,<br />
              Sheung Wan, Hong Kong
            </p>
            <div className="footer__emails">
              <p><strong>Sales:</strong> <a href="mailto:sales@tapvox.net">sales@tapvox.net</a></p>
              <p><strong>Support:</strong> <a href="mailto:support@tapvox.net">support@tapvox.net</a></p>
              <p><strong>Billing:</strong> <a href="mailto:billing@tapvox.net">billing@tapvox.net</a></p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
            <div className="footer__marketed">
              <p>Developed by</p>
              <img src={grapewishLogo} alt="Grapewish Logo" className="footer__grapewish-logo" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom" data-aos="fade-up">
          <p>© {new Date().getFullYear()} Tapvox Limited. All rights reserved.</p>
          <p className="footer__credits">Empowering Enterprises with Trusted Communication Solutions</p>
        </div>
      </Wrapper>
    </footer>
  );
}

export default Footer;
