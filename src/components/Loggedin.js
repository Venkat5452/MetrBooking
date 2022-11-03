import React from 'react'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../Context/UserAuthContext";
import { useState } from 'react';
import { Alert } from "react-bootstrap";
import { toDataURL } from 'qrcode';
function Loggedin() {
    const { logOut, user } = useUserAuth();
    const [valTo, setValTo] = useState("");
    const [valFrom, setValFrom] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [img1, setIMG]=useState("");
    const handleLogout = async () => {
     // setQr("");
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };
    const handleSubmit=async(e)=>{
      e.preventDefault();
      setError("");
      //setQr("");
      if(valFrom === valTo || valFrom==="" || valTo==="") {
        setError("Invalid Input");
      }
      else {
        const date = new Date();
        var dd=date.getDay();
        var mm=date.getMonth();
        if(dd<10) {
          dd="0"+dd;
        }
        if(mm<10) {
          mm="0"+mm;
        }
        const day= `${dd}/${mm+1}/${date.getFullYear()}`;
        const showTime = date.getHours()+':'+ date.getMinutes()+":" + date.getSeconds();
        const curr=valFrom+"/"+valTo +"/"+ day +"/" + showTime;
        //setQr(curr);
        setError("Happy Journey!!");
        const res=await toDataURL(curr);
        console.log(curr);
        setIMG(res);
      }
    }
    return (
      <>
      <div className="p-4 box mt-3 text-center text-success">
          Hello Welcome <br />
          {user && user.email}
      </div>    
      <div className='pp1 box gap-4 mt-4 '>
      {!img1 && (<div>  <h4 className='p-4 '>Book Metro QR Ticket</h4>
        {error==="Invalid Input" && <Alert variant="danger">{error}</Alert>}
        {/* {error!=="Invalid Input" && error!=="" && <Alert variant="success">{error}</Alert>} */}
         <div className='box p-3 d-flex'>
        <select className="form-select" aria-label="Default select example" onChange={(e) => setValFrom(e.target.value)}>
         <option selected value="">From</option>
         <option value="02">Ameerpet</option>
         <option value="01">Raidurg</option>
         <option value="03">Rasoolpura</option>
         <option value="04">Parade Ground</option>
         <option value="05">Tarnaka</option>
         <option value="06">Nagole</option>
         <option value="07">Miyapur</option>
         <option value="08">Kukatpally</option>
         <option value="09">Nampally</option>
         <option value="10">MGBS</option>
         <option value="11">L.B.Nagar</option>
         <option value="12">JBS Parade Ground</option>
         <option value="13">Gandhi Hospital</option>
       </select>
      </div> 
      <div className='box p-3 d-flex'>
        <select className="form-select" aria-label="Default select example" onChange={(e) => setValTo(e.target.value)}>
         <option selected value="">To</option>
         <option value="02">Ameerpet</option>
         <option value="01">Raidurg</option>
         <option value="03">Rasoolpura</option>
         <option value="04">Parade Ground</option>
         <option value="05">Tarnaka</option>
         <option value="06">Nagole</option>
         <option value="07">Miyapur</option>
         <option value="08">Kukatpally</option>
         <option value="09">Nampally</option>
         <option value="10">MGBS</option>
         <option value="11">L.B.Nagar</option>
         <option value="12">JBS Parade Ground</option>
         <option value="13">Gandhi Hospital</option>
       </select>
      </div>
      <div className='pt-3 pb-3 b1 d-flex'>
        <Button type='submit' onClick={handleSubmit}>Submit</Button>
      </div>  </div> )}
      {
        img1 && (
          <div className='text-center'>
            <div><h4 className='pt-3'>Download Your Ticket</h4></div>
            {error!=="Invalid Input" && error!=="" && <Alert variant="success">{error} Valid till 11:45pm</Alert>} 
            <div><img src={img1} alt="qr"></img></div>
            <div className='p-3'><a href={img1} download= "qr.png"><Button variant="success" type="submit" >Download</Button></a></div>
          </div>
          
        )
      }
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