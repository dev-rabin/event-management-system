import React from 'react'
import ConcertImage from "../assets/party.jpg";
import ConferenceImage from "../assets/concert.jpg";
import WeddingImage from "../assets/wedding.jpg";
import PartyImage from "../assets/party1.jpg";
import { Container } from "react-bootstrap";
import "./Pages.css";

function EventsPage() {
  return (
    <>
      <Container className="my-5 p-3">
        <h1 className="text-center my-3 heading">Events</h1>
        <div className="d-flex text-center my-3 flex-wrap gap-1">
          <div className="col-3 my-3 mx-auto border border-primary rounded">
            <img
              src={PartyImage}
              alt="Party Image"
              className="img-fluid rounded"
            />
            <div className="my-2 fw-bold heading fs-5">Party</div>
          </div>
          <div className="col-3 my-3 mx-auto border border-primary rounded">
            <img
              src={WeddingImage}
              alt="Wedding Image"
              className="img-fluid rounded"
            />
            <div className="my-2 fw-bold heading fs-5">Wedding</div>
          </div>
          <div className="col-3 my-3 mx-auto border border-primary rounded">
            <img
              src={ConcertImage}
              alt="Concert Image"
              className="img-fluid rounded"
            />
            <div className="my-2 fw-bold heading fs-5">Concert</div>
          </div>
          <div className="col-3 my-3 mx-auto border border-primary rounded">
            <img
              src={ConferenceImage}
              alt="Conference Image"
              className="img-fluid rounded"
            />
            <div className="my-2 fw-bold heading fs-5">Conference</div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default EventsPage;
