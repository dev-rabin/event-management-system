import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import "./components.css";
import { NavLink } from 'react-router-dom';

function NavbarComponent() {
  return (
    <div>
      <Navbar bg='md-dark lg-none' variant="dark" expand="md" className='fixed-top navbar-collapse'>
        <Container>
          <Navbar.Brand className='fs-2 evently'>Evently</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav bg-body-dark" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='mx-auto d-flex justify-content-evenly align-items-center'>
              <NavLink to="/" className='fs-5 mx-2 text-decoration-none text-white'>Home</NavLink>
              <NavLink to = "/events" className='fs-5 mx-2 text-decoration-none text-white'>Events</NavLink>
              <NavLink to = "/gallery" className='fs-5 mx-2 text-decoration-none text-white'>Gallery</NavLink>
              <NavLink to = "/blogs" className='fs-5 mx-2 text-decoration-none text-white'>Blogs</NavLink>
            </Nav>
            <div className='text-center'><Button>Contact Us</Button></div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
