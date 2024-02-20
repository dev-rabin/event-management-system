import React from 'react'
import ConcertImage from "../assets/party.jpg";
import ConferenceImage from "../assets/concert.jpg";
import WeddingImage from "../assets/wedding.jpg";
import PartyImage from "../assets/party1.jpg";
import { Container } from "react-bootstrap";
import "./Pages.css";
import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';
import { useAuth } from '../store/auth';

function EventsPage() {
  const {events} = useAuth();
  console.log("Events data from Event Page",events);

  return (
    <>
    <NavbarComponent/>
      <Container className="my-5 p-3">
        <h1 className="text-center my-3 heading">Events</h1>
        <div className="d-flex text-center my-3 flex-wrap gap-1">
        {events.map((event,index)=>(
          <div key={index} className="col-3 my-3 mx-auto border border-primary rounded">
          <img
            src={event.images}
            alt="Party Image"
            className="img-fluid rounded"
          />
          <div className="my-2 fw-bold heading fs-5">{event.title}</div>
        </div>
        ))}
        </div>
      </Container>
      <FooterComponent/>
    </>
  )
}

export default EventsPage;
