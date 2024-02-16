import React from "react";
import NavbarComponent from "../components/Navbar";
import "./Home.css";
import { Container, Button } from "react-bootstrap";
import ConcertImage from "../assets/party.jpg";
import ConferenceImage from "../assets/concert.jpg";
import WeddingImage from "../assets/wedding.jpg";
import PartyImage from "../assets/party1.jpg";

function Home() {
  return (
    <div>
      <NavbarComponent />
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
      <Container className="my-5 p-3 text-white">
        <h1 className="text-center my-3">Events</h1>
        <div className="d-flex text-center my-3 flex-wrap gap-1">
          <div className="col-3 my-3 mx-auto border border-primary rounded">
            <img src={PartyImage} alt="Party Image" className="img-fluid rounded" />
            <div className="my-2 fw-bold">Party</div>
          </div>
          <div className="col-3 my-3 mx-auto border border-primary rounded">
            <img src={WeddingImage} alt="Wedding Image" className="img-fluid rounded" />
            <div className="my-2 fw-bold">Wedding</div>
          </div>
          <div className="col-3 my-3 mx-auto border border-primary rounded">
            <img src={ConcertImage} alt="Concert Image" className="img-fluid rounded" />
            <div className="my-2 fw-bold">Concert</div>
          </div>
          <div className="col-3 my-3 mx-auto border border-primary rounded">
            <img src={ConferenceImage} alt="Conference Image" className="img-fluid rounded" />
            <div className="my-2 fw-bold">Conference</div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
