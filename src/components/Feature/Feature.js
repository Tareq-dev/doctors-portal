import React from 'react';
import treatment from '../../images/treatment.png';

const Feature = () => {
     return (
        <section className="feature pb-0 pb-md-5 my-5">
           <div className="container mb-5">
               <div className="row mb-5">
                 <div className="col-md-5 mb-4 m-md-0">
                 <img className="img-fluid" src={treatment}alt="" />
                 </div>
                 <div className="col-md-7 align-self-center">
                  <h1>Exceptional Dental <br/> Care,on Your Terms</h1>
                  <p className="text-secondary">lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
                  <button className="btn btn-primary">Learn More</button>
                 </div>
               </div>
           </div>
        </section>
        
     );
};

export default Feature;