import React from 'react';

const ServicesDetails = ({service}) => {


     
     return (
          <div className="col-md-4 text-center">
          <img style={{height:'70px'}} src={service.img} alt="" />  
          <h5 className="mt-3 mb-3">{service.name}</h5>
          <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adip dolor sit amet, consectetur adip dolor sit amet, consectetur adip</p>
          </div>
     );
};

export default ServicesDetails;