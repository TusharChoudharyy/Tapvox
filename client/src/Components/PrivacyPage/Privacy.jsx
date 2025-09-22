import Wrapper from "../Wrapper/Wrapper.jsx";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Privacy.scss";

function PrivacyPage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="privacy" className="privacy">
      <Wrapper>
        <div className="privacy__container" data-aos="fade-up">

          {/* Terms & Conditions Card */}
          <div className="privacy__card">
            <h1>📑 Terms & Conditions – TapVox</h1>
            {/* <p>Effective Date: [Insert Date]</p> */}
            <p>Company: TapVox Limited (Hong Kong)</p>

            <h2>1. Introduction</h2>
            <p>
              Welcome to TapVox. By accessing or using our website (www.tapvox.net) 
              or our services, you agree to comply with and be bound by these Terms & Conditions. 
              If you do not agree, please do not use our services.
            </p>

            <h2>2. Services Provided</h2>
            <p>
              TapVox operates as a VoIP Services Aggregator, providing wholesale 
              origination, termination, ATX, IPRN, and A2P SMS services. 
              All services are offered subject to availability, technical limitations, 
              and applicable regulations.
            </p>

            <h2>3. Eligibility</h2>
            <p>
              Our services are intended for business entities, carriers, enterprises, 
              and service providers. By using TapVox services, you confirm you are 
              authorized to act on behalf of your organization.
            </p>

            <h2>4. Pricing & Payment</h2>
            <ul>
              <li>Pricing is based on agreed wholesale rates and volume commitments.</li>
              <li>All invoices are payable in the currency specified in the agreement.</li>
              <li>Late payments may incur penalties and/or service suspension.</li>
            </ul>

            <h2>5. Service Quality & Routing</h2>
            <ul>
              <li>TapVox uses Least Cost Routing (LCR) across supplier interconnections to optimize cost and quality.</li>
              <li>Quality metrics (ACD, ASR, PDD, NER) are monitored in real-time.</li>
              <li>TapVox does not guarantee uninterrupted service due to factors outside our control (e.g., third-party outages, regulatory restrictions).</li>
            </ul>

            <h2>6. Acceptable Use Policy</h2>
            <p>You agree not to use TapVox services for:</p>
            <ul>
              <li>Fraudulent or illegal activities</li>
              <li>Spamming, phishing, or abusive practices</li>
              <li>Traffic types that violate local or international telecom regulations</li>
            </ul>
            <p>TapVox reserves the right to block or suspend traffic violating this policy.</p>

            <h2>7. Limitation of Liability</h2>
            <p>
              TapVox is not liable for indirect, incidental, or consequential damages, 
              including but not limited to loss of revenue, profits, or goodwill.
            </p>

            <h2>8. Confidentiality</h2>
            <p>
              Both parties agree to maintain confidentiality of commercial, technical, 
              and financial information shared during business operations.
            </p>

            <h2>9. Governing Law & Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with 
              the laws of Hong Kong SAR. Any disputes shall be subject to the exclusive 
              jurisdiction of the courts of Hong Kong.
            </p>
          </div>

          {/* Privacy Policy Card */}
          <div className="privacy__card">
            <h1>📑 Privacy Policy – TapVox</h1>
            <p>Effective Date: [Insert Date]</p>
            <p>Company: TapVox Limited (Hong Kong)</p>

            <h2>1. Introduction</h2>
            <p>
              TapVox respects your privacy. This Privacy Policy explains how we 
              collect, use, and protect your personal and business information.
            </p>

            <h2>2. Information We Collect</h2>
            <ul>
              <li>Business Information: Company name, contact person, email, phone, billing details.</li>
              <li>Technical Information: IP addresses, call detail records (CDRs), routing logs.</li>
              <li>Website Data: Usage analytics (cookies, browsing data).</li>
            </ul>

            <h2>3. How We Use Information</h2>
            <ul>
              <li>To deliver and manage VoIP and messaging services</li>
              <li>To process billing and payments</li>
              <li>To ensure compliance with telecom regulations</li>
              <li>To improve service quality and customer support</li>
            </ul>

            <h2>4. Data Sharing & Disclosure</h2>
            <p>We may share information:</p>
            <ul>
              <li>With interconnect partners for service delivery</li>
              <li>With regulatory authorities where legally required</li>
              <li>With payment processors and technical vendors under strict confidentiality</li>
            </ul>
            <p>We do not sell customer data to third parties.</p>

            <h2>5. Data Security</h2>
            <p>
              We implement technical and organizational safeguards to protect against unauthorized access, 
              alteration, or disclosure of data, including secure routing, fraud detection, and encrypted storage where applicable.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              Call detail records and logs are retained only as long as necessary to fulfill regulatory and operational requirements.
            </p>

            <h2>7. User Rights</h2>
            <p>
              If you are based in jurisdictions that provide data protection rights (e.g., GDPR regions), 
              you may request access, correction, or deletion of personal data by contacting us at{" "}
              <a href="mailto:privacy@tapvox.net" className="text-blue-600 underline">privacy@tapvox.net</a>.
            </p>

            <h2>8. Cookies Policy</h2>
            <p>
              Our website may use cookies to improve user experience and analyze site traffic. 
              You may disable cookies in your browser settings.
            </p>

            <h2>9. Updates to Policy</h2>
            <p>
              TapVox may update this Privacy Policy from time to time. Updates will be published on our website.
            </p>

            <h2>10. Contact</h2>
            <p>For questions regarding this policy, contact:</p>
            <p>📧 privacy@tapvox.net</p>
            <p>📍 TapVox Limited, Hong Kong</p>
          </div>

        </div>
      </Wrapper>
    </section>
  );
}

export default PrivacyPage;
