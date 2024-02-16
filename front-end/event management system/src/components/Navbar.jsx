import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import "./components.css";

function NavbarComponent() {
  return (
    <div>
      <Navbar bg='md-dark lg-none' variant="dark" expand="md" className='fixed-top navbar-collapse'>
        <Container>
          <Navbar.Brand className='fs-2 navbar-evently'>Evently</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='mx-auto d-flex justify-content-evenly align-items-center'>
              <Nav.Link href="#home" className='fs-5 fw-bold mx-2'>Home</Nav.Link>
              <Nav.Link href="#features" className='fs-5 fw-bold mx-2'>Events</Nav.Link>
              <Nav.Link href="#pricing" className='fs-5 fw-bold mx-2'>Gallery</Nav.Link>
              <Nav.Link href="#pricing" className='fs-5 fw-bold mx-2'>Blogs</Nav.Link>
            </Nav>
            <div className='text-center'><Button>Contact Us</Button></div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
