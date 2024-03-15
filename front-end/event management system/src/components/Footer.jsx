import React from "react";
import "./components.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

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
                Follow us on : <br />
                <span>
                  <Link to="https://github.com/dev-rabin" target="blank">
                    <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
                  </Link>
                </span>
                <span className="mx-2">
                <Link to="https://www.linkedin.com/in/robin-mandhotia-560579289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
                  </Link>
                </span>
                for updates and inspiration!
              </p>
              <p>Copyright © 2024 Evently. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
