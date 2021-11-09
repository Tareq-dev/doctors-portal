import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import './Footer.css';

const Facebook = <FontAwesomeIcon icon={faClock} />


const Footer = () => {
     return (
        <section className="footer-container">
        <div className="row mt-5 py-5 ml-4">
        <div className="col-md-3 mt-4 py-2">
        <a href="/#" className=""><p>Emergency Dental Care</p></a>
        <a href="/#" className=""><p>Check up</p></a>
        <a href="/#" className=""><p>Treatment</p></a>
        <a href="/#" className=""><p>Tooth Exceptional</p></a>
        <a href="/#" className=""><p>Check up</p></a>
        </div> 
        <div className="col-md-3">
        <h4 className="text-primary mb-4">Services</h4>
        <a href="/#" className=""><p>Emergency Dental Care</p></a>
        <a href="/#" className=""><p>Check up</p></a>
        <a href="/#" className=""><p>Treatment</p></a>
        <a href="/#" className=""><p>Tooth Exceptional</p></a>
        <a href="/#" className=""><p>Check up</p></a>
        </div> 
        <div className="col-md-3">
        <h4 className="text-primary mb-4">Oral Health</h4>
        <a href="/#" className=""><p>Emergency Dental Care</p></a>
        <a href="/#" className=""><p>Check up</p></a>
        <a href="/#" className=""><p>Treatment</p></a>
        <a href="/#" className=""><p>Tooth Exceptional</p></a>
        <a href="/#" className=""><p>Check up</p></a>
        </div> 
        <div className="col-md-3">
        <h4 className="text-primary mb-4">Our Adrees</h4>
        <a href="/#" className=""><p>Emergency Dental Care</p></a>
        <a href="/#" className=""><p>Check up</p>{Facebook}</a>
       </div> 
       </div>
       <div className="text-center">
      <h6 className="text-dark"> Copyright 2021 All Rights Reserved</h6>   
      </div>
        </section>
          
     );
};

export default Footer;