import React from 'react'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../Context/UserAuthContext";
function Loggedin() {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };
    return (
      <>
      <div className='pp'>
        <div className="p-4 box mt-3 text-center ">
          Hello Welcome <br />
          {user && user.email}
        <div className="d-grid gap-2 mt-3">
          <Button variant="primary" onClick={handleLogout}>
            Log out
          </Button>
        </div>
       </div> 
      </div>  
      </>
    );
  };

export default Loggedin;