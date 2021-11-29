import React, { useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const containerStyle ={
     backgroundColor: '#F4FDFB',
     height: '100%'
}

const Dashboard = () => {

     const [selectedDate, setselectedDate] = useState(new Date()); 
     const [appointments ,setAppointments] = useState([]); 

     const handleDateChange = date =>{
          setselectedDate(date);
          fetch('http://localhost:5500/appointmentByDate',{
               method: 'POST',
               header: {'Content-Type': 'application/json'},
               body: JSON.stringify({date: selectedDate})
          })
          .then(res=>res.json())
          .then(data => setAppointments)
     }
    

     return (
          <section>
          <div style={containerStyle} className="container-fluid row">
          <div className="col-md-2">
          <Sidebar></Sidebar>
          </div>
          <div className="col-md-5">
          <Calendar
          onChange={handleDateChange}
          value={new Date()}
          />
          </div>
          <div className="col-md-5">
          <AppointmentByDate appointments={appointments}></AppointmentByDate>
          </div>
          </div>
          </section>
     );
};

export default Dashboard;