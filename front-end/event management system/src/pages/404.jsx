import React from 'react';
import { Link } from 'react-router-dom';
import './404.css';
import NotfoundImage from "../assets/404.jpg"

function NotFound() {
  return (
    <div className="not-found-container">
      <img
        src={NotfoundImage}
        alt="404 Not Found"
        className="not-found-image"
      />
      <div className="not-found-content">
        <h1 className="not-found-title">404 - Page Not Found</h1>
        <p className="not-found-message">
          The page you are looking for does not exist.
        </p>
        <Link to="/" className="not-found-link">
          Go to Home Page
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
