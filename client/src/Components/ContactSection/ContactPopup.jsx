import { useState } from "react";
import "./ContactPopup.scss";

function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      subject: e.target[2].value,
      message: e.target[3].value,
    };

    try {
      const res = await fetch("http://localhost:5001/api/contact/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        const confetti = document.querySelector(".confetti");
        if (confetti) confetti.classList.add("show");
        setTimeout(() => confetti && confetti.classList.remove("show"), 2000);
      } else {
        console.error("Failed to submit");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button className="contact-btn" onClick={togglePopup}>
        Contact Us
      </button>

      {isOpen && (
        <div className="popup-overlay">
          <div className="overlay-decor"></div>

          <div className="popup-content">
            <button className="close-btn" onClick={togglePopup}>
              ✕
            </button>

            {!submitted ? (
              <>
                <h2 className="popup-title">Get in Touch</h2>
                <p className="popup-subtitle">
                  We’d love to hear from you! Fill out the form below.
                </p>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input type="text" required />
                    <label>Your Name</label>
                  </div>
                  <div className="form-group">
                    <input type="email" required />
                    <label>Your Email</label>
                  </div>
                  <div className="form-group">
                    <input type="text" required />
                    <label>Subject</label>
                  </div>
                  <div className="form-group">
                    <textarea rows="5" required></textarea>
                    <label>Your Message</label>
                  </div>
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            ) : (
              <div className="success-message">
                <div className="confetti"></div>
                <h2>Thank You!</h2>
                <p>Your message has been sent successfully.</p>
                <button className="close-btn-success" onClick={togglePopup}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ContactPopup;
