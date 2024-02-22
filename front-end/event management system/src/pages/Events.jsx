import React from 'react';
import { Button, Container } from "react-bootstrap";
import "./Pages.css";
import { useAuth } from '../store/auth';
import EventlyImage from "../assets/Evently.png";
import { NavLink } from 'react-router-dom';

function EventsPage() {
  const { events } = useAuth();
  console.log("Events data from Event Page", events);
  const token = localStorage.getItem("token");

  const registerAtEvent = (userId, eventId) => {
    // Send registration request to backend
    fetch('http://localhost:7000/api/registerAtEvent', {
      method: 'POST',
      headers: {
        Authorization : token
      },
      body: JSON.stringify({ userId, eventId }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle response from backend
        console.log(data);
        if (data.success) {
          alert('Registration successful!');
        } else {
          alert('Error during registration. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error during registration. Please try again.');
      });
  };

  return (
    <>
      <Container className="my-2 p-3">
        <h1 className="text-center my-3 heading">Events</h1>
        <div className="d-flex gap-1 text-center justify-content-start flex-wrap">
          {events.map((event, index) => (
            <div key={index} event={event} className="col-3 my-3 mx-auto border border-primary rounded">
              <img
                src={event ? event.imagesURL : EventlyImage}
                alt="Party Image"
                className="img-fluid rounded"
              />
              <div className="my-2 fw-bold heading fs-5">{event.title}</div>
              <Button className='my-2' onClick={() => registerAtEvent(userId, event.id)} variant="primary">Register</Button>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default EventsPage;
