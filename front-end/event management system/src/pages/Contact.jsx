import React from 'react'
import { Container, Button, Form, FloatingLabel } from "react-bootstrap";

function ContactPage() {
  return (
    <div>
      <Container className='my-5'>
        <h1 className="text-center text-white my-3">Contact Us</h1>
        <div className="d-flex justify-content-between flex-wrap" >
        <FloatingLabel label="Your Email" className="col-4 my-1 form-label">
          <Form.Control type="email" placeholder="Your Email" className='form-field' />
        </FloatingLabel>
        <FloatingLabel co label="Your Name" className="col-4 my-1 form-label">
          <Form.Control type="text" placeholder="Your Name" className='form-field' />
        </FloatingLabel>
        <FloatingLabel label="Your Contact No." className="col-4 my-1 form-label">
          <Form.Control type="text" placeholder="Your Contact No." className='form-field' />
        </FloatingLabel>
        <textarea name="" id="" cols="0" rows="5" className="col-12 my-1 rounded p-2 form-field" placeholder='Message...'/>
        <div className="text-center col-12 my-1">
          <Button variant="primary">Send Message</Button>
        </div>
        </div>
      </Container>
    </div>
  )
}

export default ContactPage
