import React, { useState } from 'react'
import { Container, Button, Form, FloatingLabel } from "react-bootstrap";
import "./Pages.css";

function ContactPage() {
  const [contact, setContact] = useState({
    email : "",
    name : "",
    mobile : "",
    message : ""
  });

  const handleContactSubmit = async() => {
   try {
    const response = await fetch("http://localhost:7000/api/contact", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(contact)
    });
    if (response.ok) {
      console.log("Handle contact log : ", response);
      alert("Contact query has been saved!");
      setContact({
        email : "",
        name : "",
        mobile : "",
        message : ""
      });
    }
   } catch (error) {
    console.log("Handle conatct error : ", error);
    alert(error);
   }
  }

  const handleContactInput = (e) => {
    setContact({...contact,[e.target.name] : e.target.value});
  }

  return (
    <>
      <Container className='my-5'>
        <h1 className="text-center my-3 heading">Contact Us</h1>
        <div className="d-flex justify-content-between flex-wrap" >
        <FloatingLabel label="Email" className="col-4 my-1 form-label">
          <Form.Control type="email" placeholder="Email" className='form-field' name='email' value={contact.email} onChange={handleContactInput}/>
        </FloatingLabel>
        <FloatingLabel label="Name" className="col-4 my-1 form-label">
          <Form.Control type="text" placeholder="Name" className='form-field' name='name' value={contact.name} onChange={handleContactInput}/>
        </FloatingLabel>
        <FloatingLabel label="Contact No." className="col-4 my-1 form-label">
          <Form.Control type="text" placeholder="Contact No." className='form-field' name='mobile' value={contact.mobile} onChange={handleContactInput}/>
        </FloatingLabel>
        <textarea id="" cols="0" rows="5" className="col-12 my-1 rounded p-2 form-field" placeholder='Message...' name='message' value={contact.message} onChange={handleContactInput}/>
        <div className="text-center col-12 my-1">
          <Button variant="primary" onClick={handleContactSubmit}>Send Message</Button>
        </div>
        </div>
      </Container>
    </>
  )
}

export default ContactPage
