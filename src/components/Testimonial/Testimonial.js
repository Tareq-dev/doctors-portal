import React from 'react';
import People from'../../images/people-1.png';
import TestimonialDetails from './TestimonialDetails/TestimonialDetails';

const patientData =[
     {
          comment : "It is long established that by the readable content of a lot layout. The point pf using lorem a more-or-less normal distribution to using the content here",
          img: People,
          name:"Winson Herry",
          address: "California"
     },
     {
          comment : "It is long established that by the readable content of a lot layout. The point pf using lorem a more-or-less normal distribution to using the content here",
          img: People,
          name:"Winson Herry",
          address: "California"
     },{
          comment : "It is long established that by the readable content of a lot layout. The point pf using lorem a more-or-less normal distribution to using the content here",
          img: People,
          name:"Winson Herry",
          address: "California"
     }
]
const Testimonial = () => {
     return (
        <section className="testimonial my-4 py-4">
        <div className="container">
        <div className="my-5 py-5">
        <h5 className="text-primary">TESTIMONIAL</h5>
        <h1>What's Our Patients <br/> Says</h1>
        </div>
        <div class="card-deck">
        
          {
               patientData.map(testimonial=><TestimonialDetails testimonial={testimonial}></TestimonialDetails>)
          }       
        </div>
        </div>
        </section>
     );
};

export default Testimonial;