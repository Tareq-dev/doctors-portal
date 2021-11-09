import React from 'react';
import Blogs from '../../BlogPost/Blogs';
import Doctors from '../../Doctors/Doctors';
import Feature from '../../Feature/Feature';
import Footer from '../../Footer/Footer';
import Form from '../../Form/Form';
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
               <Doctors></Doctors>
               <Form></Form>
               <Footer></Footer>
          </div>
     );
};

export default Home;