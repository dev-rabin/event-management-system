import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Admin.css";

function EventsCreation() {

    const [event, setEvent] = useState({
        userId : 1,
        title : "",
        description : "",
        date : "",
        category : "",
        capacity : "",
        images : "",
        location : ""
    });

    const handleInputChange = (e) => {
        setEvent({...event, [e.target.name] : e.target.value});
    }



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
            />
            <label htmlFor="floatingPasswordCustom">Category</label>
          </Form.Floating>
          <Form.Floating className="mb-3 text-secondary col-3">
            <Form.Control
              id="floatingInputCustom"
              type="file"
              placeholder="Images"
              name="images"
              value={event.images}
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
              />
              <label htmlFor="floatingPasswordCustom">Capacity</label>
            </Form.Floating>
          </div>
          <div className="text-center"><Button>Event Create</Button></div>
        </div>
      </Container>
    </>
  );
}

export default EventsCreation;
