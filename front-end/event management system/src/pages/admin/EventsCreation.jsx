import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useAuth } from '../../store/auth';
import "./Admin.css";

const CreateEventForm = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    organizerId: '',
    title: '',
    description: '',
    date: '',
    location: '',
    capacity: '',
    category: '',
    imagesURL: null,
  });

  console.log("Event creation User:", user);

  useEffect(() => {
    if (user) {
      setFormData({ ...formData, organizerId: user.userId });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Event creation Name:", name);
    console.log("Event creation Value:", value);
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Event creation imageURL : ", file);
    setFormData(prevData => ({ ...prevData, imagesURL: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithFile = new FormData();
      formDataWithFile.append('organizerId', formData.organizerId);
      formDataWithFile.append('title', formData.title);
      formDataWithFile.append('description', formData.description);
      formDataWithFile.append('date', formData.date);
      formDataWithFile.append('location', formData.location);
      formDataWithFile.append('capacity', formData.capacity);
      formDataWithFile.append('category', formData.category);
      formDataWithFile.append('imagesURL', formData.imagesURL);

      console.log("FormatDataWithFile : ", formDataWithFile);
      const response = await fetch('http://localhost:7000/api/admin/eventCreate', {
        method: 'POST',
        body: formDataWithFile,
      });
      const data = await response.json();
      setFormData({
        organizerId: '',
        title: '',
        description: '',
        date: '',
        location: '',
        capacity: '',
        category: '',
        imagesURL: null,
      })
      console.log("Events creation data : ", data);
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <Container className='event-creation'>
    <h1 className='text-center my-2'>Plan a event</h1>
            <Form onSubmit={handleSubmit}>
          <div className='d-flex justify-content-around flex-wrap'>
          <Form.Group controlId="organizerId" className='col-5'>
              <Form.Label>Organizer</Form.Label>
              <Form.Control type="text" name="organizerId" placeholder="Organizer ID" value={formData.organizerId} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="title"  className='col-5'>
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
            </Form.Group>
          </div>
         <div className='d-flex justify-content-around flex-wrap'>
         <Form.Group controlId="description" className='col-5'>
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="date" className='col-5'>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" placeholder="Date" value={formData.date} onChange={handleChange} />
            </Form.Group>
         </div>
         <div className='d-flex justify-content-around flex-wrap'>
         <Form.Group controlId="location" className='col-5'>
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="capacity" className='col-5'>
              <Form.Label>Capacity</Form.Label>
              <Form.Control type="number" name="capacity" placeholder="Capacity" value={formData.capacity} onChange={handleChange} />
            </Form.Group>
         </div>
        <div className='d-flex justify-content-around flex-wrap'>
        <Form.Group controlId="category" className='col-5'>
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="imagesURL" className='col-5'>
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" name="imagesURL" onChange={handleFileChange} />
            </Form.Group>
        </div>
            
           <div className='text-center my-4'>
           <Button variant="primary" type="submit" className='col-11'>Create Event</Button>
           </div>
          
          </Form>
    </Container>
  );
};

export default CreateEventForm;
