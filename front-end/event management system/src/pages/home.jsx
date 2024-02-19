import React from "react";
import NavbarComponent from "../components/Navbar";
import "./Pages.css";
import {Button} from "react-bootstrap";
import EventsPage from "./Events";
import ServicesPage from "./Services";
import AboutPage from "./About";
import BlogsPage from "./Blogs";
import ContactPage from "./Contact";


function HomePage() {
  return (
    <div>
      <div className="img-container">
        <div className="img-content ">
          <div className="img-div col-12 col-md-8 col-sm-12 col-lg-6 col-xl-6 mt-md-5 mt-sm-5 mt-lg-2 mt-5">
            Elevate Your Events with Unforgettable Experiences
          </div>
          <div className="img-para my-3 col-10 col-md-6 col-sm-10 col-lg-4">
            Elevate your event experiences with our experts touch. Immense In
            Unforgettable moments where sophistication meets modernity.
          </div>
          <div className="img-button my-3">
            <Button variant="primary">Book Now</Button>
          </div>
        </div>
      </div>
      <EventsPage/>
      <ServicesPage/>
      <AboutPage/>
      <BlogsPage/>
      <ContactPage/>
    </div>
  );
}

export default HomePage;
