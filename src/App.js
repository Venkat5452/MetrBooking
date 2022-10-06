import './App.css';
import Home from "./components/Home";
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <div className='container-fluid p-3' >
      <div className='d-flex bg-secondary'>
       <div className='ml-auto' >
         <img width={'50%'} height='100%' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6U5ewqY784pm8F-RHow7sgr7-bwaFzWEB1w&usqp=CAU' alt=''></img>
        </div>
        <div className='px-auto u'>
          <h4 className=''>Hyderabad Metro</h4>
        </div>
      </div>  
      <Routes>
        <Route path="/Home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
