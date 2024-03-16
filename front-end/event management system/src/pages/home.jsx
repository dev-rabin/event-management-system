import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-scroll";
import EventsPage from "./Events";
import ServicesPage from "./Services";
import AboutPage from "./About";
import BlogsPage from "./Blogs";
import ContactPage from "./Contact";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";


function HomePage() {
  const { user } = useAuth();
 

  console.log("Homepage user : ", user);

  return (
    <>
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
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button variant="primary">Book Now</Button>
            </Link>
          </div>
        </div>
      </div>

      <div id="events">
        <EventsPage />
      </div>

      <div className="text-center">
        <NavLink to="/events">
          <Button>Show all</Button>
        </NavLink>
      </div>

      <ServicesPage />
      <AboutPage />
      <BlogsPage />

      <div id="contact">
        <ContactPage />
      </div>
    </>
  );
}

export default HomePage;
