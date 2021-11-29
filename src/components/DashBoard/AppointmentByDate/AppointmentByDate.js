import React from 'react';

const AppointmentByDate = ({appointments}) => {
     return (
          <div>
               <h2>Appointments : {appointments.length}</h2>
          </div>
     );
};

export default AppointmentByDate;