import React from 'react'
import ConcertImage from "../assets/party.jpg";
import ConferenceImage from "../assets/concert.jpg";
import WeddingImage from "../assets/wedding.jpg";
import PartyImage from "../assets/party1.jpg";
import { Container } from "react-bootstrap";

function EventsPage() {
  return (
    <div>
      <Container className="my-5 p-3 text-white">
        <h1 className="text-center my-3">Events</h1>
        <div className="d-flex text-center my-3 flex-wrap gap-1">
          <div className="col-3 my-3 mx-auto border border-primary rounded">
            <img
              src={PartyImage}
              alt="Party Image"
              className="img-fluid rounded"
            />
            <div className="my-2 fw-bold">Party</div>
          </div>
          <div className="col-3 my-3 mx-auto border border-primary rounded">
            <img
              src={WeddingImage}
              alt="Wedding Image"
              className="img-fluid rounded"
            />
            <div className="my-2 fw-bold">Wedding</div>
          </div>
          <div className="col-3 my-3 mx-auto border border-primary rounded">
            <img
              src={ConcertImage}
              alt="Concert Image"
              className="img-fluid rounded"
            />
            <div className="my-2 fw-bold">Concert</div>
          </div>
          <div className="col-3 my-3 mx-auto border border-primary rounded">
            <img
              src={ConferenceImage}
              alt="Conference Image"
              className="img-fluid rounded"
            />
            <div className="my-2 fw-bold">Conference</div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default EventsPage;
