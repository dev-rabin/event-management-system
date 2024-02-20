import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import LoginGif from "../assets/login.gif";
import { NavLink } from "react-router-dom";
import "./Pages.css";
import { useAuth } from "../store/auth";

function UserRegistration() {
  const {storeToken} = useAuth();
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleRegister =async () => {
    try {
        const response = await fetch("http://localhost:7000/api/createAccount",{
            method : "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(register)
        });
        if(response.ok){
            const responseData = await response.json();
            storeToken(responseData.token);
            setRegister({
                name: "",
                email: "",
                password: "",
            });
            console.log("User registration data : ",responseData);
            alert(responseData.message)
        }
    } catch (error) {
        console.error("User registration error : ",error);
        alert(error);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5 p-2 heading">Register</h1>
      <div className=" d-flex justify-content-around container">
        <div className="rounded col-6 mt-5">
          <h2 className="text-center text-white">User Registration!</h2>
          <FloatingLabel label="Name" className=" m-4">
            <Form.Control
              type="text"
              placeholder="Name"
              className="form-field"
              name="name"
              value={register.name}
              onChange={handleInputChange}
            />
          </FloatingLabel>
          <FloatingLabel label="Email" className=" m-4">
            <Form.Control
              type="email"
              placeholder="Email"
              className="form-field"
              name="email"
              value={register.email}
              onChange={handleInputChange}
            />
          </FloatingLabel>
          <FloatingLabel co label="Password" className="m-4">
            <Form.Control
              type="password"
              placeholder="Password"
              className="form-field"
              name="password"
              value={register.password}
              onChange={handleInputChange}
            />
          </FloatingLabel>
          <div className="text-center">
            <Button onClick={handleRegister}>Register</Button>
          </div>
          <p className="text-center mt-4 text-light">
            Already have an account ?
            <span>
              <NavLink to="/login" className="text-decoration-none"> Login here</NavLink>
            </span>
          </p>
        </div>
        <div className="col-6 text-center">
          <img
            src={LoginGif}
            alt="Login Gif"
            className="img-fluid"
            width="450px"
          />
        </div>
      </div>
    </>
  );
}

export default UserRegistration;
