import React, { useState } from "react";
import { Link, Navigate, useNavigate} from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../Context/UserAuthContext";
import 'react-phone-number-input/style.css';
import PhoneInput from "react-phone-number-input";


function PhoneSignUp() {
    const [number,setNumber]=useState("");
    const [error, setError] = useState("");
    const { setUpRecaptcha }=useUserAuth();
    const [otp,setOtp]=useState("");
    const [flag,setFlag]=useState(false);
    const [confirmObj,setConfirmObj]=useState("");
    const navigate=useNavigate();
    const getOtp = async(e) => {
        e.preventDefault();
        setError("");
        if(number === "" || number === undefined) 
            return setError("Enter a valid Phone Number");
        try{
               const response = await setUpRecaptcha(number);
               console.log(response);
               setConfirmObj(response);
               setFlag(true);
        } catch(err) {
               setError(err.message);
        }
        console.log(number);
    };

    const verifyOtp= async(e)=>{
        e.preventDefault();
        if(otp==="" || otp===null) 
          return ;
        try {
            setError("");
           await confirmObj.confirm(otp);
           navigate("/Loggedin");
        }  catch(err) {
           setError(err.message);
        }
    }
  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Phone Authentication</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOtp} style={{display : !flag ? "block" : "none"}}>
          <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <PhoneInput
            defaultCountry="IN"
            value={number}
            onChange={setNumber}
            placeholder="Enter Phone Number"
            />
            <div id="recaptcha-container" />
          </Form.Group>
          <div className="button-right gap-2">
            <Link to="/Login">
             <Button variant="secondary">Cancel</Button>
             </Link>
             <Button variant="primary" type="submit">Send Otp</Button>
          </div>
          </Form>

          <Form onSubmit={verifyOtp} style={{display : flag ? "block" : "none"}}>
          <Form.Group className="mb-3" controlId="formBasicOtp">
            <Form.Control
                type="otp"
                placeholder="Enter OTP"
                onChange={(e)=>setOtp(e.target.value)}
            />
          </Form.Group>
          <div className="button-right gap-2">
            <Link to="/PhoneSignUp">
             <Button variant="secondary">Cancel</Button>
             </Link>
             <Button variant="primary" type="submit">Verify Otp</Button>
          </div>
          </Form>
          </div>
        </>
  )
}

export default PhoneSignUp;