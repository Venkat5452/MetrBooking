import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../Context/UserAuthContext";
import './Login.css';
const Login = () => {
 // const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
 // const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   try {
  //     await logIn(email, password);
  //     navigate("/Loggedin");
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/Loggedin");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    <div className="pp">
      <div className="p-4 box">
        <h2 className="mb-3">Please Login here</h2>
        {/* {error && <Alert variant="danger">{error}</Alert>} */}
        {/* <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form> */}
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
          <Link to='/PhoneSignUp' className="text-success">
        <div className="d-grid gap-2 mt-4">
            <Button variant="success" type="Submit">
              Sign In With Phone
            </Button>
          </div>
          </Link>
          {/* <div className="p-3 box text-center mt-3">
            Don't have an account? <Link to="/Signup">Sign up</Link>
          </div>  */}
      </div>
    </div>  
    </>
  );
};

export default Login;
