import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { useAuth } from '../store/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function NavbarComponent() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <Navbar expand="md"  className="custom-navbar fixed-top">
        <Container>
          <Navbar.Brand className='fs-1 evently'>Evently</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='mx-auto d-flex justify-content-evenly align-items-center'>
              <NavLink to="/" className='fs-5 mx-3 text-decoration-none text-white'>Home</NavLink>
              <NavLink to="/events" className='fs-5 mx-3 text-decoration-none text-white'>Events</NavLink>
              <NavLink to="/services" className='fs-5 mx-3 text-decoration-none text-white'>Services</NavLink>
              <NavLink to="/blogs" className='fs-5 mx-3 text-decoration-none text-white'>Blogs</NavLink>
            </Nav>
            <div className='text-center'>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button variant="primary">Contact Us</Button>
              </Link>
            </div>
            <div>
              {isLoggedIn ? <NavLink to="/logout" className="text-decoration-none text-white mx-2"><FontAwesomeIcon icon={faPowerOff} fontSize={"23px"} /></NavLink> : <NavLink to="/login" className="text-decoration-none text-white mx-2"><FontAwesomeIcon icon={faSignIn} /></NavLink>}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
