import React from 'react';
import './Form.css';

const Form = () => {
     return (
         <section className="contact-us ml-4">
         <div className="container mt-4 pt-5">
         <div className="text-center">
          <h5 className="text-primary">CONTACT US</h5>
          <h2>Always Connect With Us</h2>     
         </div>
         <form id="contact-form" onSubmit="" method="POST">
    <div className="form-group">
        <label htmlFor="name" >Name</label>
        <input type="text" className="form-control" placeholder="Your Name*" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Your Email*" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5" placeholder="Your Message*"></textarea>
    </div>
    <button type="submit" className="btn btn-primary  p-2">Submit</button>
</form>
         </div>
         </section>
     );
};

export default Form;