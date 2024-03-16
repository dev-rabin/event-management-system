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
    console.log("delete event eventId : ", eventId);
    try {
      const response = await fetch(`http://localhost:7000/api/admin/eventDelete/${eventId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        console.log(`Event with ID ${eventId} deleted successfully`);
        // Filter out the deleted event from the events array
        const updatedEvents = events.filter(event => event.eventId !== eventId);
        // Update the events state with the filtered array
        setEvents(updatedEvents);
        alert("Event has been deleted!");
      } else {
        console.error("Failed to delete event:", response.statusText);
      }
    } catch (error) {
      console.error("Delete event error:", error);
    }
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <>
      <Container className="bg-light text-dark rounded p-3" style={{ margin: "5rem 2rem" }}>
        <h1 className="text-left text-decoration-underline">Events</h1>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Event Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Location</th>
              <th>Capacity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{event.title}</td>
                <td>{event.description}</td>
                <td>{event.category}</td>
                <td>{event.location}</td>
                <td>{event.capacity}</td>
                <td>
                  <Button variant="danger" onClick={() => deleteEvent(event.eventId)}>Delete</Button>
                  <Button variant="success" className="mx-2" onClick={() => handleEventUpdate(event.eventId)}>Update</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
}

export default AdminEvents;
