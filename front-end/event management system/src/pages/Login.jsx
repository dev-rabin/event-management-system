import React, { useState, useEffect } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import { useGoogleLogin } from "@react-oauth/google";
import LoginGif from "../assets/login.gif";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import "./Pages.css";

function LoginPage() {
    const { storeToken, storeGoogleUser } = useAuth();
    const navigate = useNavigate();
    const [login, setLogin] = useState({ email: "", password: "" });
    const [googleUser, setGoogleUser] = useState(null);

    const handleInputChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:7000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(login)
            });
            if (response.ok) {
                const responseData = await response.json();
                storeToken(responseData.token);
                setLogin({ email: "", password: "" });
                navigate("/");
            } else {
                const errorData = await response.json();
                alert(errorData.message);
            }
        } catch (error) {
            console.error("Login error: ", error);
            alert("Login failed. Please try again.");
        }
    };

    const googleLogin = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setGoogleUser(codeResponse);
        },
        onError: (error) => console.log("Login Failed:", error),
    });

    const handleGoogleLogin = async () => {
        if (googleUser) {
            try {
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleUser.access_token}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${googleUser.access_token}`,
                        Accept: "application/json",
                    },
                });
                const data = await response.json();
                console.log("Google user data response :", data);
                storeGoogleUser(data);
                navigate("/");
            } catch (err) {
                console.log(err);
            }
        }
    };

    useEffect(() => {
        if (googleUser) {
            handleGoogleLogin();
        }
    }, [googleUser]);

    return (
        <Container className="my-5 p-3">
            <div className="d-flex justify-content-around container">
                <div className="rounded col-6 mt-5">
                    <h1 className="text-center heading p-2">Login here!</h1>
                    <FloatingLabel label="Email" className="m-5">
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            className='form-field'
                            name="email"
                            value={login.email}
                            onChange={handleInputChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel label="Password" className="m-5">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            className='form-field'
                            name="password"
                            value={login.password}
                            onChange={handleInputChange}
                        />
                    </FloatingLabel>
                    <div className="text-center">
                        <Button onClick={handleLogin}>Login</Button>
                    </div>
                    <p className="text-center mt-4 text-light">
                        You don't have an account? <span><NavLink to="/register" className="text-decoration-none">Register here</NavLink></span>
                    </p>
                    <div className="text-center">
                        <Button variant="outline-primary" className="m-2" onClick={googleLogin}>
                            Sign in with Google
                        </Button>
                    </div>
                </div>
                <div className="col-6 text-center">
                    <img src={LoginGif} alt="Login Gif" className="img-fluid" width="450px" />
                </div>
            </div>
        </Container>
    );
}

export default LoginPage;
