import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'




const infosData = [{
     title: 'Opening Hours',
     Description: 'We are open 7 days',
     icon: faClock,
     background: 'primary'
},
{
     title: 'Visit Our Location',
     Description: 'Badda, Dhaka-1456',
     icon: faMapMarker,
     background: 'dark'
},
{
     title: 'Call Us Now',
     Description: '01905-243744',
     icon: faPhone,
     background: 'primary'
}
]
const BusinessInfo = () => {
     return (
       <section className="d-flex justify-content-center">
       <div className="w-75 row">
       {
          infosData.map(info=><InfoCard info={info}></InfoCard>)
       }
       </div>
       </section>
     );
};

export default BusinessInfo;