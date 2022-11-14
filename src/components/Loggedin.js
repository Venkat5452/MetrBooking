import React from 'react'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../Context/UserAuthContext";
import { useState} from 'react';
import { collection ,getDocs} from 'firebase/firestore';
import { Alert } from "react-bootstrap";
import { toDataURL } from 'qrcode';
import jsPDF from 'jspdf';
import hydemetro from '../images/img2.png';
import moment from 'moment/moment';
import img2 from '../images/img2.png';
import PhoneInput from 'react-phone-number-input';
import { db } from '../Firebase';

//import displayrazorpay from '../utils/paymentgateway';

//import { Document, Page, pdfjs } from "react-pdf";

function Loggedin() {
    const { logOut, user } = useUserAuth();
    const [number,setNumber]=useState("");
    const [valTo, setValTo] = useState("");
    const [valFrom, setValFrom] = useState("");
    const [error, setError] = useState("");
    const [Amt, setAmt] = useState("");
    const [flagc,setflagc]=useState("");
    const [sendflag,setsendflag]=useState(false);
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
    const sendPDF=async(e)=>{
      e.preventDefault();
      setError("");
      setsendflag(true);
    }

    const sendpdf2=async(e)=>{
      e.preventDefault();
      setError("");
      if(number==="") {
        setError("Invalid Input");
      }
      else {
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
         setsendflag(false);
         console.log(doc);
         setIMG("")
         setNumber("");
         setpay(false);
         setValTo("");
         setValFrom("");
         navigate("/Loggedin");
      }
    }
    const handleSubmit=async(e)=>{
      e.preventDefault();
      setError("");
      setAmt("");
      //setQr("");
      if(valFrom === valTo || valFrom==="" || valTo==="") {
        setError("Invalid Input");
      }
      else {
        setflagc(true);
        const tofrom=valTo+valFrom;
        const fromto=valFrom+valTo;
        const stationcostref=collection(db,'Cost');
        getDocs(stationcostref).then(response => {
          const k= response.docs.map(doc => ({
            data:doc.data()
          }))
          console.log(k);
          try {
            for(var s in k) {
            console.log(k[s].data);
            if(k[s].data.FromTo===tofrom || k[s].data.FromTo===fromto) {
              setAmt(k[s].data.cost)
              console.log(k[s].data.cost)
              break;
            }
          }
          // console.log(Amt);
          // console.log(tofrom);
        }catch(e) {

        }
        }).catch(error=>console.log(error.message));
      }
      console.log(pay);
      //console.log(costv);
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
      setAmt("");
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
    const handlepayment=async(e)=>{
      e.preventDefault();
      if(Amt!=="") {
        var options= {
          key:"rzp_test_Rg7Lgz7NgVAUCu",
          key_secret:"x0e5GSKDeyVrNQcr0gJ7pOmP",
          amount:Amt*100,
          currency:"INR",
          name:"Hyderabad Metro",
          image:img2,
          description:"For ticket booking transactions",
          handler:function(response) {
            setpay(true);
          },
          prefill :{
            email:user.email
          },
          notes :{
             address:"Hyderabad metro Office"
          },
          theme :{
            color:"blue"
          }
        };
        //console.log(data);
        var pay1=new window.Razorpay(options);
        pay1.open();
        setflagc(false);
      }
    }
    return (
      <>
      <div className="p-4 box mt-3 text-center text-success">
          Hello Welcome <br />
          {user && user.email}
      </div>    
      <div className='pp1 box gap-4 mt-4 '>
      {!flagc && !img1 && !pay && (<div>  <h4 className='p-4 '>Book Metro QR Ticket</h4>
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
      {!flagc && <div className='pt-3 pb-3 b1 d-flex'>
        <Button type='submit' onClick={handleSubmit}>Submit</Button>
      </div>}  
      </div> )}
      {
        flagc && (
          <div className='text-center'>
            <div><h4 className='p-2'>Pay for Your Ticket from{<h4 className='text-primary'>{Stations[valFrom - 1]}</h4>}to{<h4 className='text-primary'>{Stations[valTo - 1]}</h4>}</h4></div>
            {error!=="Invalid Input" && error!=="" && <Alert variant="success">{error}</Alert>} 
            <div className='m-1 p-2'><Button variant="success" onClick={handlepayment}  type="submit" >Make Payment</Button></div>
          </div>
          //<a href={img1}   download= "qr.pdf"></a>
        )
      }
      { pay && <div className='text-center p-3'>
      {<Alert variant="success">Payment of rupees {<h4>{Amt}</h4>} Successfull</Alert>} 
        <Button type='submit' onClick={generateQr}>Generate Ticket</Button>
      </div>} 
      {
        img1 && !sendflag && (
          <div className='text-center'>
            <div><h4 className='pt-3'>Download Your Ticket</h4></div>
            {error!=="Invalid Input" && error!=="" && <Alert variant="success">{error}</Alert>} 
            <div><img src={img1} alt="qr"></img></div>
            <div className='m-1 p-1'><Button variant="success" onClick={pdfGenerate}  type="submit" >Download</Button></div>
            <p>OR</p>
            <div className='m-3'><Button variant="primary" >Booked For Others ?</Button></div>
          </div>
          //<a href={img1}   download= "qr.pdf"></a>
        )
      }
      {
        img1 && sendflag && (
          <div className='text-center m-2'>
            <div><h4 className='p-2 m-2'>Enter Phone Number</h4></div>
            {error==="Invalid Input" && error!=="" && <Alert  variant="danger">{error}</Alert>} 
            <div>
            <PhoneInput
              defaultCountry="IN"
              //value={number}
              color="blue"
              onChange={setNumber}
              placeholder="Enter Phone Number"
            /></div>
            <div className='m-2 p-2'><Button variant="success" onClick={sendpdf2}  >Send Ticket</Button></div>
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