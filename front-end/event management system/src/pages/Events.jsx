import React, { useState } from 'react';
import { Button, Container } from "react-bootstrap";
import { useAuth } from '../store/auth';
import EventlyImage from "../assets/Evently.png";

function EventsPage() {
  const { events } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const token = localStorage.getItem("token");

  const registerAtEvent = async (eventId) => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:7000/api/registerAtEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
        body: JSON.stringify({ eventId })
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message);
        console.log("You are registered with : ", data.message);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Event Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="my-5 p-3">
      <h1 className="text-center my-3 heading">Events</h1>
      <div className="d-flex gap-1 text-center justify-content-start flex-wrap">
        {events.map((event, index) => (
          <div key={index} event={event} className="col-3 my-3 mx-auto border border-primary rounded">
            <img
              src={event ? event.imagesURL : EventlyImage}
              alt="Event Image"
              className="img-fluid rounded"
            />
            <div className="my-2 fw-bold heading fs-5">{event.title}</div>
            <Button
              className='my-2'
              onClick={() => registerAtEvent(event.eventId)}
              variant="primary"
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </Button>
          </div>
        ))}
      </div>
      {error && <div className="alert alert-danger mt-3">{error}</div>}
      {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
    </Container>
  );
}

export default EventsPage;
