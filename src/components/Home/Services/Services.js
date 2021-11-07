import React from 'react';
import Fluoride from '../../../images/fluoride.png';
import Cavity from '../../../images/cavity.png';
import Whitening from '../../../images/whitening.png';
import ServicesDetails from '../ServicesData/ServicesDetails';



const serviceData=[
     {
     name:'Fluoride Treatment',
     img: Fluoride
     },
     {
     name:'Cavity Filling',
     img: Cavity
     },
     {
     name:'Teeth Whitening',
     img: Whitening
     }
]
const Services = () => {
     return (
        <section className="services-container mt-4">
        <div className="text-center">
        <h5 style={{color:'#14D1D2'}}> OUR SERVICES</h5>
         <h2>Services We Provide</h2>      
        </div>
        <div className="d-flex justify-content-center">
       <div className="w-75 row mt-5 pt-5">
       {
          serviceData.map(service=><ServicesDetails service={service}></ServicesDetails>)
       }
       </div>
       </div>
        </section>
     );
};

export default Services;