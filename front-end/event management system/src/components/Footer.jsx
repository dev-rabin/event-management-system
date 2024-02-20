import React from "react";
import "./components.css";

const FooterComponent = () => {
  return (
    <div className="mt-3">
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Connect With Us : </h3>
              <p className="evently fs-2">Evently</p>
              <p>New Delhi, India</p>
              <p>Phone: 0000000000</p>
              <p>Email: eventlyhandle@gmail.com</p>
            </div>
            <div className="footer-section">
              <p>
                Follow us on <br/> [Social Media Platforms] for updates and
                inspiration!
              </p>
              <p>
                Copyright © [Year] [Your Company Name]. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
