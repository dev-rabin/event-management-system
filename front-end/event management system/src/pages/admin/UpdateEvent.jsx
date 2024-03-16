import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateEvent = () => {
  const location = useLocation();
  const eventId = location.state && location.state.eventId;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    eventId: eventId,
    title: '',
    description: '',
    date: '',
    location: '',
    capacity: '',
    category: '',
    imagesURL: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const imagesURL = Array.from(e.target.files);
    setFormData(prevState => ({
      ...prevState,
      imagesURL: imagesURL
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:7000/api/admin/eventUpdate/${eventId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Event updated successfully:', responseData);
        navigate("/admin/events");
      } else {
        console.error('Failed to update event:', response.status);
      }
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  return (
    <Container style={{margin:"5rem"}}>
      <h2>Update Event</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title:</Form.Label>
          <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description:</Form.Label>
          <Form.Control as="textarea" rows={3} name="description" value={formData.description} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formDate">
          <Form.Label>Date:</Form.Label>
          <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formLocation">
          <Form.Label>Location:</Form.Label>
          <Form.Control type="text" name="location" value={formData.location} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formCapacity">
          <Form.Label>Capacity:</Form.Label>
          <Form.Control type="number" name="capacity" value={formData.capacity} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formCategory">
          <Form.Label>Category:</Form.Label>
          <Form.Control type="text" name="category" value={formData.category} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formimagesURL">
          <Form.Label>imagesURL:</Form.Label>
          <Form.Control type="file" multiple onChange={handleImageChange} />
        </Form.Group>
        <Button variant="primary" type="submit" className='mt-2'>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default UpdateEvent;
