import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./Admin.css";
import { useNavigate } from "react-router-dom";

function AdminEvents() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  const handleEventUpdate = (eventId) => {
    console.log("onclick event id : ", eventId);
    navigate("/admin/eventUpdate", {
      state: { eventId: eventId }
    });
  }

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
            console.log("Admin Events data : ", responseData.data);
        }
    } catch (error) {
        console.error("Events error : ", error);
    }
}

const deleteEvent = async (eventId) => {
  console.log("delete event userId : ", eventId);
  try {
    const response = await fetch(`http://localhost:7000/api/admin/eventDelete/${eventId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.ok) {
      console.log(`event with ID ${eventId} deleted successfully`);
      // Filter out the deleted event from the events array
      const updatedEvents = events.filter(event => event.eventId !== eventId);
      // Update the events state with the filtered array
      setEvents(updatedEvents);
      alert("Event has been deleted!");
    } else {
      console.error("Failed to delete event:", response.message);
    }
  } catch (error) {
    console.error("Delete event error:", error);
  }
};



  useEffect(()=>{
    getAllEvents();
  },[]);

  console.log("Events state:", events); // Log the events state

  return (
    <>
      <Container className="bg-light text-dark rounded p-3" style={{margin : "5rem 2rem"}}>
        <h1 className="text-center">Events</h1>
        <div className="d-flex text-left justify-content-start flex-wrap ">
           
            {events.map((event,index)=>(
              <div key={index}
                className="col-4 my-3 mx-auto border border-primary rounded p-3 scroll-div">
                <div>
                  <div className="my-2 fs-5"><b>Event Name</b> : {event.title}</div>
                  <div className="my-2 fs-5"><b>Description</b> : {event.description}</div>
                  <div className="my-2 fs-5"><b>Category</b> : {event.category}</div>
                  <div className="my-2 fs-5"><b>Location</b> : {event.location}</div>
                  <div className="my-2 fs-5"><b>Capacity</b> : {event.capacity}</div>
                </div>
                <div className="d-flex justify-content-start">
                  <Button variant="danger" onClick={() => deleteEvent(event.eventId)}>Delete</Button>
                  <Button variant="success" className="mx-2" onClick={() => handleEventUpdate(event.eventId)}>Update</Button>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </>
  );
}

export default AdminEvents;
