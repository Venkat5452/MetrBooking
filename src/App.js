import './App.css';
import { Container,Row,Col } from 'react-bootstrap';
import Header from './components/Header';
import { Route ,Routes } from "react-router-dom";
import {UserAuthContextProvider} from './Context/UserAuthContext'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Loggedin from './components/Loggedin';
import ProtectedRoute from './components/ProtectedRoute';
import PhoneSignUp from './components/PhoneSignUp';
import Footer from './components/Footer';
import About from './components/About';
import Destitest from './components/Destitest';
import Boardtest from './components/Boardtest';
import { useEffect } from 'react';
function App() {
  const loadScript=(src)=>{
    return new Promise((resolve)=>{
      const script = document.createElement('script');
      script.src=src;

      script.onload=()=>{
        resolve(true);
      }
      script.onerror=()=>{
        resolve(false);
      }

      document.body.appendChild(script);
    })
  }


  useEffect(() => {
   loadScript("https://checkout.razorpay.com/v1/checkout.js");  
  })
  return (
    <Container>
      <Header />
      {/*className='container-fluid p-3' <div className='d-flex bg-secondary'>
       <div className='ml-auto' >
         <img width={'50%'} height='100%' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6U5ewqY784pm8F-RHow7sgr7-bwaFzWEB1w&usqp=CAU' alt=''></img>
        </div>
        <div className='px-auto u'>
          <h4 className=''>Hyderabad Metro</h4>
        </div>
      </div>
      */}
      <Row>
        <Col>
        <UserAuthContextProvider>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Destitest' element={<Destitest/>}/>
            <Route path='/Boardtest' element={<Boardtest/>}/>
            <Route path='/PhoneSignUp' element={<PhoneSignUp/>}/>
            <Route path='/Loggedin' element={<ProtectedRoute><Loggedin/></ProtectedRoute>}/>
          </Routes>
        </UserAuthContextProvider> 
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default App;
