import React from 'react';

const TestimonialDetails = ({testimonial}) => {

            return (
         <div class="card">
         <div class="card-body">
         <p class="card-text text-secondary">This is a longer card with supporting text below as a natural 
         lead-in to additional content. This content is a little bit longer longer card with 
         supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
         <div className="d-flex mt-5 ml-5">
         <div className="mr-3"><img style={{height:'50px', width:'50px'}} src={testimonial.img} class="" alt="..."/></div>
         <div>
         <h5 class="card-title text-primary">{testimonial.name}</h5>
         <p class="card-text"><small class="text-muted">{testimonial.address}</small></p>
         </div>
         </div>
         </div>
         </div>
     );
};

export default TestimonialDetails;