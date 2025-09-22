import React from "react";
import "./Career.scss";

const Career = () => {
  return (
    <section className="career">
      <div className="container">
        <h2 className="career__title">Careers at Tapvox</h2>
        <p className="career__desc">
          Join a leading global telecom provider and grow your future in voice and messaging technology. 
          Tapvox values innovation, teamwork, and excellence across every region we serve. 
          Explore opportunities in network engineering, sales, support, and more.
        </p>

        <div className="career__cta">
          <h3>Ready to advance your telecom career?</h3>
          <a href="mailto:support@tapvox.net" className="career__btn">
            Send Your Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Career;
