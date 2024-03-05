import React, { useEffect, useState } from 'react';
import { Container,Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Pages.css';

function EventDetailPage() {
const {eventId }= useParams();
const [eventDetails, setEventDetails] = useState();
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [successMessage, setSuccessMessage] = useState(null);
const token = localStorage.getItem("token");

const getEventById =async () =>{
    try {
        const response = await fetch(`http://localhost:7000/api/events/${eventId}`, {
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        }) ;
        if (response.ok) {
            const eventData = await response.json();
            console.log("Event data details : ", eventData.data);
            setEventDetails(eventData.data);
          } else {
            console.error('Failed to fetch event details');
          }
    } catch (error) {
        console.error('Error fetching event details:', error);
    }
}
useEffect(()=>{
    getEventById();
},[eventId]);

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
    <div>
      <Container className="my-5 rounded p-2">
      <h1 className="text-center my-5 event-title text-light">Event Details</h1>
      {eventDetails ? (        
        <div className="event-details d-flex">
        <div className='col-6'>
            <img src={eventDetails.imagesURL} className='rounded img-fluid'/>
        </div>
          <div style={{marginLeft : "20px"}}>
          <h2 className="event-details-title">{eventDetails.title}</h2>
          <p className="event-details-description">{eventDetails.description}</p>
          <p className="event-details-info">Date: {eventDetails.date}</p>
          <p className="event-details-info">Location: {eventDetails.location}</p>
        <p>Category : {eventDetails.category}</p>
        <p>Capacity : {eventDetails.capacity}</p>
        <Button
              className='my-2'
              onClick={() => registerAtEvent(eventDetails.eventId)}
              variant="primary"
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </Button>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
          </div>
          
        </div>
      ) : (
        <p className="loading-message">Loading event details...</p>
      )}
    </Container>
    </div>
  )
}

export default EventDetailPage
