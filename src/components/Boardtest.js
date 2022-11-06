import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert } from "react-bootstrap";
import QrReader from 'react-qr-scanner';
import moment from 'moment/moment';
function Boardtest() {
  const [stationid,setStationid] = useState(0);
  //const [res,setres]=useState("");
  const [flag,setflag]=useState(false);
  const [data,setdata]=useState("");
  const handleSubmit=async(e)=>{
    setdata("");
    //console.log(stationid);
    if(stationid!==0 && stationid!=="00") {
      setflag(true);
    }
    else {
      setdata("Invalid");
      setflag(false);
    }
    //console.log(stationid);
    e.preventDefault();
  }
  const handleErrorWebcam=(error)=>{
    setdata(error);
    console.log(error);
  }
  const handleScanWebcam=(myresult)=>{
    try {
      if(myresult) {
      //console.log(myresult);
      //setdata(myresult.text);
      const res=myresult.text;
      //console.log(res);
      //console.log(res);
      const id=res.substring(0,2);
      const d=res.substring(6,16);
      //console.log(id);
      //console.log(stationid);
      //console.log(d);
      // const date = new Date();
      //   var dd=date.getDay();
      //   var mm=date.getMonth();
      //   if(dd<10) {
      //     dd="0"+dd;
      //   }
      //   if(mm<10) {
      //     mm="0"+mm;
      //   }
      //   const day= `${dd}/${mm+1}/${date.getFullYear()}`;
      //   console.log(day);
      var date1 = moment();
        var currentDate = date1.format('DD/MM/YYYY');
        console.log(currentDate);
    if((id)===stationid && currentDate===d) {
      // console.log("Accepted");
      setdata("Accepted")
    }
    else {
      // console.log("Not Accepted");
      setdata("Not Accepted")
    }
    setflag(false);
    setStationid("00");
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
         {(data && data!=="Accepted") && <Alert variant="danger">{data}</Alert>}
         {data && data==="Accepted" && <Alert variant="success">{data}</Alert>} 
      </div> 
    {!flag && <div className='pp2 box'>
    <Form onSubmit={handleSubmit}>
      <div>
        <h5 className='text-primary'>Select Station</h5>
      </div>
    <select class="form-select" aria-label="Default select example" className="mb-3 border-primary" onChange={(e) => setStationid(e.target.value)}>
         <option value="00">From</option>
         <option value="01">Raidurg</option>
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
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Check</Button>
      {/* <QrReader
        delay={200}
        style={{width:"150px"}}
        onError={handleErrorWebcam}
        onScan={handleScanWebcam}
      /> */}
    </Form>
    </div> }
    { flag && <div className='pp1 box text-center'>
       <QrReader
        delay={10}
        style={{maxWidth:"275px",maxHeight:"350px"}}
       className='pp1 box'
        onError={handleErrorWebcam}
        onScan={handleScanWebcam}
      />
    </div>}
    </div>
    </>
  );
}

export default Boardtest;