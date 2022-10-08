import './App.css';
import { Container,Row,Col } from 'react-bootstrap';
import Header from './components/Header';
import { Route ,Routes } from "react-router-dom";
import {UserAuthContextProvider} from './Context/UserAuthContext'
import Login from './components/Login';
import Signup from './components/Signup';
import Loggedin from './components/Loggedin';
import ProtectedRoute from './components/ProtectedRoute';
import PhoneSignUp from './components/PhoneSignUp';
function App() {
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
            <Route path="/Login" element={<Login/>}/>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/PhoneSignUp' element={<PhoneSignUp/>}/>
            <Route path='/Loggedin' element={<ProtectedRoute><Loggedin/></ProtectedRoute>}/>
          </Routes>
        </UserAuthContextProvider> 
        </Col>
      </Row>
    </Container>
  );
}

export default App;
