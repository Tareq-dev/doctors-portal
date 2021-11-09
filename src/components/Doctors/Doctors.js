import React from 'react';
import doctor from '../../images/doctor-small.png';

const doctorsData = [
     {
          img: doctor,
          name:"Dr. Caudi",
          phone:"+6254 545 26545"
     },
     {
          img: doctor,
          name:"Dr. Caudi",
          phone:"+6254 545 26545"
     },

     {
          img:doctor,
          name:"Dr. Caudi",
          phone:"+6254 545 26545"
     }
]

const Doctors = ({doctorsData}) => {
     return (
          <section className="">
          <div className="container mt-5 pt-5">
            <div>
            <h4 className="text-center text-primary">Our Doctors</h4>
            </div> 
            <div className="d-flex mt-5 pt-5">
            <div className="text-center mr-4 pl-2">
            <img style={{height:"300px",width:"350px"}} src={doctor} alt="" />
            <h6 className="pt-3">Doctors Name</h6>
            <p><small>Phone number</small></p>
            </div>
            <div className="text-center mr-4 pl-2">
            <img style={{height:"300px",width:"350px"}} src={doctor} alt="" />
            <h6 className="pt-3">Doctors Name</h6>
            <p><small>Phone number</small></p>
            </div>
            <div className="text-center mr-4 pl-2">
            <img style={{height:"300px",width:"350px"}} src={doctor} alt="" />
            <h6 className="pt-3">Doctors Name</h6>
            <p><small>Phone number</small></p>
            </div>
            </div>  
          </div>
          
          </section>
     );
};

export default Doctors;