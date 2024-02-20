import React from 'react'
import ConferenceImage from "../assets/concert.jpg";
import { Container} from "react-bootstrap";
import "./Pages.css";

function ServicesPage() {
  return (
    <>
      <Container className="my-5 p-3">
        <h1 className="text-center my-3 heading">Services</h1>
        <p className="text-secondary text-center">
          Our comprehensive event management services are designed to seamlessly
          bring your vision to life. From meticulous planning and creative
          conceptualization to flawless execution, we offer a range of expertise
        </p>
        <div className="d-flex flex-wrap gap-1 text-white services">
          <div className="col-3 my-3 mx-auto rounded">
            <img
              src={ConferenceImage}
              alt="Conference Image"
              className="img-fluid rounded"
            />
            <div className="my-2 fw-bold">Events Plainnig</div>
          </div>
          <div className="col-3 my-3 mx-auto rounded">
            <img
              src={ConferenceImage}
              alt="Conference Image"
              className="img-fluid rounded"
            />
            <div className="my-2 fw-bold">Events Design</div>
          </div>
          <div className="col-3 my-3 mx-auto rounded">
            <img
              src={ConferenceImage}
              alt="Conference Image"
              className="img-fluid rounded"
            />
            <div className="my-2 fw-bold">Vanue Selection</div>
          </div>
          <div className="col-3 my-3 mx-auto rounded">
            <img
              src={ConferenceImage}
              alt="Conference Image"
              className="img-fluid rounded"
            />
            <div className="my-2 fw-bold">Entertainment Sourcing</div>
          </div>
          <div className="col-3 my-3 mx-auto rounded">
            <img
              src={ConferenceImage}
              alt="Conference Image"
              className="img-fluid rounded"
            />
            <div className="my-2 fw-bold">Catering Arrangment</div>
          </div>
          <div className="col-3 my-3 mx-auto rounded">
            <img
              src={ConferenceImage}
              alt="Conference Image"
              className="img-fluid rounded"
            />
            <div className="my-2 fw-bold">Post-Event Evaluation</div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ServicesPage
