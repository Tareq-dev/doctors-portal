import React from 'react';
import chair from '../../../images/chair.png';
import { useHistory } from "react-router-dom";


const HeaderMain = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/appointment");
  }
     return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
         <div className="col-md-4 offset-md-1">
          <h1 style={{color:'#3A4256'}}> Your New Smile <br/> start Here</h1>
          <p className="text-secondary">lorem ipsum dolor sit amet, consectetur adip sit amet, consectetur adip </p>
         <button className="btn btn-primary" onClick={handleClick}>Get Appointment</button>
          </div>
         <div className="col-md-6">
           <img src={chair} alt="" className="img-fluid" />
         </div>
        </main>
     );
};

export default HeaderMain;