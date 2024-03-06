import React, { useEffect, useState } from 'react';
import { Container } from "react-bootstrap";
import { useAuth } from '../store/auth';
import EventlyImage from "../assets/Evently.png";
import { Link } from 'react-router-dom';

function EventsPage() {
   const [events,setEvents] = useState([]);

  const getAllEvents = async () =>{
    try {
        const response = await fetch("http://localhost:7000/api/events", {
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        });
        if (response.ok) {
            const responseData = await response.json();
            setEvents(responseData.data);
            console.log("Events data : ", responseData.data);
        }
    } catch (error) {
        console.error("Events error : ", error);
    }
}

useEffect(() =>{
  getAllEvents();
},[])

  return (
    <Container className="my-5 p-3">
      <h1 className="text-center my-3 heading">Events</h1>
      <div className="d-flex gap-1 text-center justify-content-start flex-wrap event-div">
        {events.length === 0 ? (<div className='text-center text-white col-12'>No events found!</div>) : (
          events.map((event, index) => (
          <div key={index} className="col-3 my-3 mx-auto border border-primary rounded">
            <Link to={`/events/${event.eventId}`} className='text-decoration-none'>
              <img
                src={`http://localhost:7000/api/${event.imagesURL}`}
                alt="Event Image"
                className="img-fluid rounded"
              />
              <div className="my-2 fw-bold heading fs-5">{event.title}</div>
            </Link>
          </div>
        ))
        )}
      </div>
    </Container>
  );
}

export default EventsPage;
