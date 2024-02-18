import React from 'react'
import { Container } from "react-bootstrap";

function AboutPage() {
  return (
    <div>
      <Container className="my-5 p-3">
        <h1 className="text-white text-center my-3">About Us</h1>
        <p className="text-secondary text-center">
          At Evently, we are passionate about transforming your visions into
          exceptional events. With a dedicated team of professionals, we blend
          creativity, precision, and innovation to curate memorable experiences.
          From corporate gathering to weddings, we strive for excellence in
          every detail, ensuring your event is nothing short of extraordinary.
          Welcome to a world of unparalleled event management.
        </p>
      </Container>
    </div>
  )
}

export default AboutPage
