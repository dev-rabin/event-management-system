import React from 'react'
import { Container } from "react-bootstrap";
import "./Pages.css";
import { useAuth } from '../store/auth';

function EventsPage() {
  const {events} = useAuth();
  console.log("Events data from Event Page",events);

  return (
    <>
      <Container className="my-5 p-3">
        <h1 className="text-center my-3 heading">Events</h1>
        <div className="d-flex border text-center justify-content-start flex-wrap">
        {events.map((event,index)=>(
          <div key={index} className="col-3 my-3 mx-auto border border-primary rounded">
          <img
            src={event.imagesURL[0]}
            alt="Party Image"
            className="img-fluid rounded"
          />
          <div className="my-2 fw-bold heading fs-5">{event.title}</div>
        </div>
        ))}
        </div>
      </Container>
    </>
  )
}

export default EventsPage;
