import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import QrScanner from 'qr-scanner'; 
import { Alert } from "react-bootstrap";

function Boardtest() {
  const [stationid,setStationid] = useState(0);
  const [IMG,setIMG]=useState("");
  const [data,setdata]=useState("");
  const handleSubmit=async(e)=>{
    setdata("")
    e.preventDefault();
   // console.log(IMG);
    try {
      const res=await QrScanner.scanImage(IMG);
      //console.log(res);
      const id=res.substring(0,2);
      const d=res.substring(6,16);
      //console.log(d);
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
        //console.log(day);
    if((id)===stationid && day===d) {
      // console.log("Accepted");
      setdata("Accepted")
    }
    else {
      // console.log("Not Accepted");
      setdata("Not Accepted")
    }
    }catch(err) {
       setdata(err);
    }
  }
  return (
    <>
    <div>
      <div className="p-2 box text-center text-primary">
         <h2>Boarding Verification</h2>
         {(data==="Not Accepted" || data==="No QR code found") && <Alert variant="danger">{data}</Alert>}
         {data==="Accepted" && <Alert variant="success">{data}</Alert>} 
      </div> 
    <div className='pp2 box'>
    <Form onSubmit={handleSubmit}>
      <div>
        <h5 className='text-primary'>Select Station</h5>
      </div>
    <select class="form-select" aria-label="Default select example" className="mb-3 border-primary" onChange={(e) => setStationid(e.target.value)}>
         <option selected value="01">Raidurg</option>
         <option value="02">Ameerpet</option>
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
      <div className='mb-3'>
      <input type="file" accept='.png ,.jpg,.jpeg'
      required
      className='' 
      onChange={(e)=>{setIMG(e.target.files[0])}}
      />
      </div>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Check</Button>
    </Form>
    </div>
    </div>
    </>
  );
}

export default Boardtest;