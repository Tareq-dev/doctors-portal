import React from 'react';
import Feature from '../../Feature/Feature';
import MakeAppointment from '../../MakeAppointment/MakeAppointment';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
     return (
          <div>
               <Header></Header>
               <Services></Services>
               <Feature></Feature>
               <MakeAppointment></MakeAppointment>
          </div>
     );
};

export default Home;