// import React,{useState,useEffect} from "react";
// import db2 from '../Firebase';
// import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import { uid } from "uid";
// import {set,ref} from 'firebase/database'

// function UpdateCost() {
//     const [Station, setStation]=useState("");

//     const handleChange=(e)=>{
//         e.preventDefault();
//         setStation(e.target.value);
//     }
//     const writeToDB=()=>{
//         const uuid=uid();
//         set(ref(db2,`/${uuid}`), {
//             Station,
//             uuid,
//         });
//         setStation("");
//     };
//     return (
//         <div className="App text-center m-3 ">
//             <input type="text" value={Station} onChange={handleChange}/>
//             <div className="m-2"><Button  onClick={writeToDB}>Submit</Button></div>
//         </div>
//   )
// }

// export default UpdateCost;