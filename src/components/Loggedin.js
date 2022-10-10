import React from 'react'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../Context/UserAuthContext";
import { useState } from 'react';
import { Alert } from "react-bootstrap";
function Loggedin() {
    const { logOut, user } = useUserAuth();
    const [valTo, setValTo] = useState("");
    const [valFrom, setValFrom] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleLogout = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };
    const handleSubmit=()=>{
      setError("");
      if(valFrom === valTo || valFrom==="" || valTo==="") {
        setError("Invalid Input");
      }
      else {
        setError("Booking Your Trip!!");
      }
    }
    return (
      <>
      <div className="p-4 box mt-3 text-center text-success">
          Hello Welcome <br />
          {user && user.email}
      </div>    
      <div className='pp1 box gap-4 mt-4 '>
        <h4 className='p-4 '>Book Metro QR Ticket</h4>
        {error==="Invalid Input" && <Alert variant="danger">{error}</Alert>}
        {error!=="Invalid Input" && error!=="" && <Alert variant="success">{error}</Alert>}
        <div className='box p-3 d-flex'>
        <select class="form-select" aria-label="Default select example" onChange={(e) => setValFrom(e.target.value)}>
         <option selected value="">From</option>
         <option value="2">Ameerpet</option>
         <option value="1">Raidurg</option>
         <option value="3">Rasoolpura</option>
         <option value="4">Parade Ground</option>
         <option value="5">Tarnaka</option>
         <option value="6">Nagole</option>
         <option value="7">Miyapur</option>
         <option value="8">Kukatpally</option>
         <option value="9">Nampally</option>
         <option value="10">MGBS</option>
         <option value="11">L.B.Nagar</option>
         <option value="12">JBS Parade Ground</option>
         <option value="13">Gandhi Hospital</option>
       </select>
      </div>
      <div className='box p-3 d-flex'>
        <select class="form-select" aria-label="Default select example" onChange={(e) => setValTo(e.target.value)}>
         <option selected value="">To</option>
         <option value="2">Ameerpet</option>
         <option value="1">Raidurg</option>
         <option value="3">Rasoolpura</option>
         <option value="4">Parade Ground</option>
         <option value="5">Tarnaka</option>
         <option value="6">Nagole</option>
         <option value="7">Miyapur</option>
         <option value="8">Kukatpally</option>
         <option value="9">Nampally</option>
         <option value="10">MGBS</option>
         <option value="11">L.B.Nagar</option>
         <option value="12">JBS Parade Ground</option>
         <option value="13">Gandhi Hospital</option>
       </select>
      </div> 
      <div className='pt-3 pb-3 b1 d-flex'>
        <Button type='submit' onClick={handleSubmit}>Submit</Button>
      </div>
      </div>
        <div className="d-grid mt-3 p-1">
          <Button variant="primary" onClick={handleLogout}>
            Log out
          </Button>
        </div>  
      </>
    );
  };

export default Loggedin;