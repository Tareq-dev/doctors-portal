import React from 'react';
import Blogs from '../../BlogPost/Blogs';
import Feature from '../../Feature/Feature';
import MakeAppointment from '../../MakeAppointment/MakeAppointment';
import Testimonial from '../../Testimonial/Testimonial';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
     return (
          <div>
               <Header></Header>
               <Services></Services>
               <Feature></Feature>
               <MakeAppointment></MakeAppointment>
               <Testimonial></Testimonial>
               <Blogs></Blogs>
          </div>
     );
};

export default Home;