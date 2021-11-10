import React from 'react';
import BookingCard from '../AppointmentHeader/BookingCard/BookingCard';

const BookAppointment = ({date}) => {
     
     const bookingsData = [
          {
              id: 1,
              name: 'Teeth Orthodonics',
              time: '08.00 AM - 09.00 AM',
              space: 10,
          },
          {
              id: 2,
              name: 'Cosmetic Dentistry',
              time: '09.00 AM - 10.00 AM',
              space: 8,
          },
          {
              id: 3,
              name: 'Teeth Cleaning',
              time: '10.00 AM - 11.00 AM',
              space: 9,
          },
          {
              id: 4,
              name: 'Cavity Protection',
              time: '11.00 AM - 12.00 PM',
              space: 5,
          },
          {
              id: 5,
              name: 'Pediatric Dental',
              time: '06.00 PM - 07.00 PM',
              space: 10,
          },
          {
              id: 6,
              name: 'Oral Surgery',
              time: '07.00 PM - 08.00 PM',
              space: 10,
          },
      ]

     return (
          <section className="container">
          <h2 className="text-center text-brand mb-5"> Available Appointment on {date.toDateString()}</h2>
          <div className="row">
          {
               bookingsData.map(booking => <BookingCard date={date} key={booking.id} booking={booking}></BookingCard>)
          }
          </div>
          </section>
     );
};

export default BookAppointment;