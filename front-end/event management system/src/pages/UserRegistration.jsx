import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import LoginGif from "../assets/login.gif";
import { NavLink, useNavigate } from "react-router-dom";
import "./Pages.css";
import { useAuth } from "../store/auth";
import { GoogleLogin } from "@react-oauth/google";


function UserRegistration() {
  const {storeToken} = useAuth();
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
const navigate = useNavigate();
  const handleInputChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleRegister =async () => {
    try {
        const response = await fetch("http://localhost:7000/api/createAccount",{
            method : "POST",
            headers : {
                "Content-Type": "application/json",
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
            alert(responseData.message);
            navigate("/login");

        }
    } catch (error) {
        console.error("User registration error : ",error);
        alert(error);
    }
  };

 const responseMessage = (response)=>{
  console.log("Google login response : ",response);
 }

 const errorMessage = (error) => {
  console.error("Google login error : ",error);
 }

  return (
    <>
      <div className=" d-flex justify-content-around container">
        <div className="rounded col-6 mt-5">
        <h1 className="text-center mt-5 p-2 heading">Register here!</h1>
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
          <FloatingLabel label="Password" className="m-4">
            <Form.Control
              type="password"
              placeholder="Password"
              className="form-field"
              name="password"
              value={register.password}
              onChange={handleInputChange}
            />
          </FloatingLabel>
          <div className="text-center mb-3">
            <Button onClick={handleRegister}>Register</Button>
          </div>
          <div className="d-flex justify-content-center align-items-center my-3">
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
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
