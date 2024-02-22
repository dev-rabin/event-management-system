import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Admin.css";
import { useAuth } from "../../store/auth";

function EventsCreation() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    organizerId: user.userId,
    title: '',
    description: '',
    date: '',
    location: '',
    capacity: '',
    category: '',
    imagesURL: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // const handleImageChange = (e) => {
  //   const imagesURL = Array.from(e.target.files);
  //   const imageUrls = [];
  //   imagesURL.forEach(async (image) => {
  //     const dataUrl = await readFileAsDataURL(image);
  //     imageUrls.push(dataUrl);
  //   });
  //   setFormData(prevState => ({
  //     ...prevState,
  //     imagesURL: imageUrls
  //   }));
  // };

  // const readFileAsDataURL = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = reject;
  //     reader.readAsDataURL(file);
  //   });
  // };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:7000/api/admin/eventCreate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Event created successfully:", responseData);
      } else {
        console.error("Failed to create event:", response.message);
      }
    } catch (error) {
      console.error("Event create error:", error);
    }
  };
    return (
      <div>
        <h2>Submit Event</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Organizer ID:</label>
            <input type="text" name="organizerId" value={formData.organizerId} onChange={handleChange} />
          </div>
          <div>
            <label>Title:</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} />
          </div>
          <div>
            <label>Description:</label>
            <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
          </div>
          <div>
            <label>Date:</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} />
          </div>
          <div>
            <label>Location:</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} />
          </div>
          <div>
            <label>Capacity:</label>
            <input type="number" name="capacity" value={formData.capacity} onChange={handleChange} />
          </div>
          <div>
            <label>Category:</label>
            <input type="text" name="category" value={formData.category} onChange={handleChange} />
          </div>
          {/* <div>
            <label>images:</label>
            <input type="file" multiple onChange={handleImageChange} />
          </div> */}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  

export default EventsCreation;
