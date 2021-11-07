import React from 'react';
import './MakeAppointment.css'
import doctor from '../../images/doctor.png';

const MakeAppointment = () => {
     return (
          <section className="make-appointment">
               <div className="container mb-5">
                    <div className="row">
                      <div className="col-md-5 d-none d-md-block">
                           <img src={doctor} alt="" />
                      </div>
                      <div className="col-md-7 text-white py-5">
                                <h5 className="text-primary text-uppercase">Appointment</h5>
                                <h1 className="my-4"> Make an Appointment <br/> Today</h1>
                                <p>lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
                          <button className="btn btn-primary">Learn More</button>
                      </div>
                   </div>
                </div>
          </section>
     );
};

export default MakeAppointment;