import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Admin.css";
import { useAuth } from "../../store/auth";

function EventsCreation() {
    const {user} = useAuth;
    const [event, setEvent] = useState({
        organizerId: user ? user.userId : "1",
        title: "",
        description: "",
        date: "",
        category: "",
        capacity: "",
        images: "", // This will hold the base64 encoded string of the image
        location: ""
    });

    const handleEventSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append("organizerId", event.organizerId); // Ensure organizerId is set in FormData
            formData.append("title", event.title);
            formData.append("description", event.description);
            formData.append("date", event.date);
            formData.append("category", event.category);
            formData.append("capacity", event.capacity);
            formData.append("location", event.location);
            formData.append("image", event.images);
    
            const response = await fetch("http://localhost:7000/api/createEvent", {
                method: "POST",
                body: formData
            });
    
            if (response.ok) {
                const responseData = await response.json();
                console.log("Event created successfully:", responseData);
            } else {
                console.error("Failed to create event:", response.statusText);
            }
        } catch (error) {
            console.error("Event create error:", error);
        }
    };
    


    const handleInputChange = (e) => {
        if (e.target.name === "images") {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setEvent({ ...event, images: reader.result });
                };
                reader.readAsDataURL(file);
            }
        } else {
            setEvent({ ...event, [e.target.name]: e.target.value });
        }
    };




  return (
    <>
      <Container className="my-3">
        <h1 className="text-center">Create Event </h1>
        <div className="mb-3">
        <Form.Floating className="mb-3 text-secondary">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              placeholder="Event Description"
              name="description"
              value={event.description}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingPasswordCustom">Event Description</label>
          </Form.Floating>
          <div className="col-12 my-2 d-flex justify-content-between">
          <Form.Floating className="text-secondary mb-3 col-3">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              placeholder="Event Name"
              name="title"
                value={event.title}
                onChange={handleInputChange}
            />
            <label htmlFor="floatingInputCustom">Event Name</label>
          </Form.Floating>
            <Form.Floating className="text-secondary col-3">
              <Form.Control
                id="floatingInputCustom"
                type="date"
                placeholder="Date"
                name="date"
                value={event.date}
                onChange={handleInputChange}
              />
              <label htmlFor="floatingPasswordCustom">Date</label>
            </Form.Floating>
            <Form.Floating className="text-secondary col-3">
              <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="Location"
                name="location"
                value={event.location}
                onChange={handleInputChange}
              />
              <label htmlFor="floatingPasswordCustom">Location</label>
            </Form.Floating>
          </div>
          <div className="d-flex justify-content-between">
          <Form.Floating className="mb-3 text-secondary col-3">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              placeholder="Category"
              name="category"
              value={event.category}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingPasswordCustom">Category</label>
          </Form.Floating>
          <Form.Floating className="mb-3 text-secondary col-3">
            <Form.Control
              id="floatingInputCustom"
              type="file"
              placeholder="Images"
              name="images"
              onChange={handleInputChange}
            />
            <label htmlFor="floatingPasswordCustom">Images</label>
          </Form.Floating>
          <Form.Floating className="mb-3 text-secondary col-3">
              <Form.Control
                id="floatingInputCustom"
                type="number"
                placeholder="Capacity"
                className="event-time-class-inputs"
                name="capacity"
                value={event.capacity}
                onChange={handleInputChange}
              />
              <label htmlFor="floatingPasswordCustom">Capacity</label>
            </Form.Floating>
          </div>
          <div className="text-center"><Button onClick={handleEventSubmit}>Event Create</Button></div>
        </div>
      </Container>
    </>
  );
}

export default EventsCreation;
