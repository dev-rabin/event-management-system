import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-scroll";
import { useAuth } from "../store/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn, faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import "./components.css";
import { googleLogout } from "@react-oauth/google";


function NavbarComponent() {
  const { isLoggedIn, logOutUser, user } = useAuth();
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPercentage = (position / (scrollHeight - clientHeight)) * 100;
      setScrollPosition(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClassName =
    scrollPosition >= 6
      ? "custom-navbar fixed-top scrolled"
      : "custom-navbar fixed-top";


  return (
    <div>
      <Navbar expand="md" className={navbarClassName}>
        <Container>
          <Navbar.Brand className="fs-1 evently">Evently</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto d-flex justify-content-evenly align-items-center">
              <NavLink
                to="/"
                className="fs-5 mx-3 text-decoration-none text-white"
              >
                Home
              </NavLink>
              <NavLink
                to="/events"
                className="fs-5 mx-3 text-decoration-none text-white"
              >
                Events
              </NavLink>
              <NavLink
                to="/services"
                className="fs-5 mx-3 text-decoration-none text-white"
              >
                Services
              </NavLink>
              <NavLink
                to="/blogs"
                className="fs-5 mx-3 text-decoration-none text-white"
              >
                Blogs
              </NavLink>
            </Nav>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Button variant="primary" className="m-2">
                    Contact Us
                  </Button>
                </Link>
              </div>
              <div>
                {user ? (
                  <Dropdown>
                    <Dropdown.Toggle variant="none" id="dropdown-basic">
                      {user && user.picture ? (
                        <img
                          src={user.picture}
                          alt="Profile"
                          className="rounded-circle"
                          width="30"
                        />
                      ) : (
                        <FontAwesomeIcon icon={faUser} fontSize={"16px"} />
                      )}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {user && (
                        <>
                          <div
                            style={{
                              fontSize: "14px",
                              maxWidth: "150px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap"
                            }}
                          >
                            <Dropdown.ItemText>{user.name}</Dropdown.ItemText>
                            <Dropdown.ItemText>{user.email}</Dropdown.ItemText>
                          </div>
                        </>
                      )}
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={logOutUser}>
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <NavLink
                    to="/login"
                    className="text-decoration-none text-white"
                  >
                    {/* <FontAwesomeIcon icon={faSignIn} fontSize={"22px"} /> */}
                   <Button variant="outline-primary">Login</Button>
                  </NavLink>
                )}
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
