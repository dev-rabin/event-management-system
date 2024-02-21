import React from "react";
import { useAuth } from "../../store/auth";
import { Button, Container } from "react-bootstrap";
import "./Admin.css";
import { useNavigate } from "react-router-dom";


function AdminEvents() {
  const navigate = useNavigate();
  const {events} = useAuth();

  const handleEventUpdate = (eventId) =>{
    console.log("onclick event id : ", eventId);
    navigate("/admin/eventUpdate" , {
      state : {eventId : eventId}
    });
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
      } else {
        console.error("Failed to delete event:", response.message);
      }
    } catch (error) {
      console.error("Delete event error:", error);
    }
  };

  

  return (
      <>
        <Container className="my-2 p-3">
          <h1 className="text-left mx-5">Events</h1>
          <div className="d-flex text-left text-dark rounded gap-1 justify-content-between flex-wrap bg-light">
            {events.map((event, index) => (
              <div 
                key={index}
                className="col-3 my-3 mx-auto border border-primary rounded p-3 scroll-div">
                <div>
                <div className="my-2 fs-5">Event Name : {event.title}</div>
                <div className="my-2 fs-5">Description : {event.description}</div>
                <div className="my-2 fs-5">Category : {event.category}</div>
                <div className="my-2 fs-5">Location : {event.location}</div>
                <div className="my-2 fs-5">Capacity : {event.capacity}</div>
                </div>
                <div><Button className="m-2" onClick={()=> deleteEvent(event.eventId)}>Delete</Button>
                <span><Button onClick={()=> handleEventUpdate(event.eventId)}>Update</Button></span></div>
              </div>
            ))}
          </div>
        </Container>
      </>

  );
}

export default AdminEvents;
