import React, { useState } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import LoginGif from "../assets/login.gif";
import { NavLink, useNavigate } from "react-router-dom";
import "./Pages.css"
import { useAuth } from "../store/auth";

function LoginPage() {

    const { storeToken, isAuthenticated } = useAuth();

    const navigate = useNavigate();
    const [login , setLogin] = useState({
        email : "",
        password : ""
    });

    const handleInputChange = (e) => {
        setLogin({...login, [e.target.name] : e.target.value});
    }

    const handleLogin = async() => {
        try {
            const response = await fetch("http://localhost:7000/api/login", {
            method : "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(login)
        });
        if(response.ok){
            const responseData = await response.json();
            storeToken(responseData.token);
            console.log("response data user token : ", responseData.token);
            setLogin({
                email : "",
                password : ""
            });
            alert(responseData.message);
            navigate("/");
            console.log("User login : ",responseData);
            return;
        }
        } catch (error) {
            console.error("Login error : ",error);
            alert(error);
            return;
        }
    }
  return (
    <>
      <Container className="my-5">
      <h1 className="text-center mt-5 p-2 heading">Login</h1>
      <div className=" d-flex justify-content-around container">
        <div className="rounded col-6 mt-5">
        <h2 className="text-center text-white">User Login!</h2>
          <FloatingLabel label="Email" className=" m-5">
            <Form.Control type="email" placeholder="Email" className='form-field' name="email" value={login.email} onChange={handleInputChange}/>
          </FloatingLabel>
          <FloatingLabel co label="Password" className="m-5">
            <Form.Control type="password" placeholder="Password" className='form-field' name="password" value={login.password} onChange={handleInputChange} />
          </FloatingLabel>
          <div className="text-center">
            <Button onClick={handleLogin}>Login</Button>
          </div>
          <p className="text-center mt-4 text-light">You haven't account ? <span><NavLink to="/register" className="text-decoration-none">Register here</NavLink></span></p>
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
      </Container>
    </>
  );
}

export default LoginPage;
