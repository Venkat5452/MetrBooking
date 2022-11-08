import React from 'react'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../Context/UserAuthContext";
import { useState } from 'react';
import { Alert } from "react-bootstrap";
import { toDataURL } from 'qrcode';
import jsPDF from 'jspdf';
import hydemetro from '../images/img2.png';
import moment from 'moment/moment';
import displayrazorpay from '../utils/paymentgateway';


//import { Document, Page, pdfjs } from "react-pdf";
function Loggedin() {
    const { logOut, user } = useUserAuth();
    const [valTo, setValTo] = useState("");
    const [valFrom, setValFrom] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [pay,setpay]=useState(false);
    const [img1, setIMG]=useState("");
    const Stations = [
      "Raidurg", "Ameerpet", "Rasoolpura", "Parade Ground","Tarnaka","Nagole","Miyapur","Kukatpally","Nampally","MGBS","L.B.Nagar","JBS Parade Ground","Gandhi Hospital"];
    const handleLogout = async () => {
     setpay(false);
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
        const data=await displayrazorpay(setpay,user);
        console.log(data);
        setError("Payment Successfull"); 
      }
      console.log(pay);
  }
  const generateQr=async(e)=>{
    setpay(false);
    e.preventDefault();
    console.log(pay);
    if(pay) {
      const date = new Date();
      var date1 = moment();
      var currentDate = date1.format('DD/MM/YYYY');
      const showTime = date.getHours()+':'+ date.getMinutes()+":" + date.getSeconds();
      const curr=valFrom+"/"+valTo +"/"+ currentDate +"/" + showTime;
      setError("Happy Journey!!");
      const res=await toDataURL(curr);
      setIMG(res);
      //console.log(res);
      }
      setpay(false);
  }
    const pdfGenerate=()=>{
      setpay(false);
      console.log(pay);
        var date1 = moment();
        var currentDate = date1.format('DD/MM/YYYY');
        //console.log(currentDate);
         var doc=new jsPDF('landscape','px','a5','false');
         doc.addImage(hydemetro,'PNG',10,10,70,70);
         doc.setTextColor("Blue");
         doc.setFontSize(24);
         doc.text(145,20,"Hyderabad Metro Ticket");
         doc.setFontSize(12);
         doc.setTextColor("Black");
         doc.text(120,45,"Station From");
         doc.text(195,45,"--");
         doc.text(210,45,Stations[valFrom - 1]);
         doc.text(120,75,"Station To");
         doc.text(195,75,"--");
         doc.text(210,75,Stations[valTo - 1]);
         doc.text(120,105,"Valid Till");
         doc.text(195,105,"--");
         doc.text(210,105,currentDate + " ,11:45 pm ");
         doc.addImage(img1,'PNG',160,115,125,125);
         doc.setTextColor("Green");
         doc.setFontSize(25);
         doc.text(165,275,"Happy Journey");
         doc.save('QR.pdf');
         setIMG("")
         setpay(false);
         setValTo("");
         setValFrom("");
         navigate("/Loggedin");
    }
    return (
      <>
      <div className="p-4 box mt-3 text-center text-success">
          Hello Welcome <br />
          {user && user.email}
      </div>    
      <div className='pp1 box gap-4 mt-4 '>
      {!img1 && !pay && (<div>  <h4 className='p-4 '>Book Metro QR Ticket</h4>
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
      {<div className='pt-3 pb-3 b1 d-flex'>
        <Button type='submit' onClick={handleSubmit}>Submit</Button>
      </div>}  </div> )}
      { pay && <div className='text-center p-3'>
      {error!=="Invalid Input" && error!=="" && <Alert variant="success">{error}</Alert>} 
        <Button type='submit' onClick={generateQr}>Generate Ticket</Button>
      </div>} 
      {
        img1 && (
          <div className='text-center'>
            <div><h4 className='pt-3'>Download Your Ticket</h4></div>
            {error!=="Invalid Input" && error!=="" && <Alert variant="success">{error}</Alert>} 
            <div><img src={img1} alt="qr"></img></div>
            <div className='p-3'><Button variant="success" onClick={pdfGenerate}  type="submit" >Download</Button></div>
          </div>
          //<a href={img1}   download= "qr.pdf"></a>
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