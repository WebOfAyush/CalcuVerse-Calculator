import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <section>
      <div className="landing-content">
        <h1>Welcome to Calculator</h1>
        <p>Perform calculations efficiently and accurately!</p>
        <div className="landing-buttons">
          <a className="landing-btn" href="#features">Features</a>
          <Link className="landing-btn" to="/calculator">Use Calculator</Link>
        </div>
      </div>
    </section>

      <section className="features" id="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Basic Calculations</h3>
            <p>Perform addition, subtraction, multiplication, and division with ease.</p>
          </div>
          <div className="feature-item">
            <h3>Scientific Mode</h3>
            <p>Advanced functions for scientific calculations.</p>
          </div>
          <div className="feature-item">
            <h3>History</h3>
            <p>View your past calculations for reference.</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us at <a href="mailto:webofayush7@gmail.com">webofayush7@gmail.com</a>.</p>
      </section>
    </div>
  );
};

export default LandingPage;
