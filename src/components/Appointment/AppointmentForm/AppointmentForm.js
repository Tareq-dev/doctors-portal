import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');


const AppointmentForm = ({modalIsOpen,closeModal,appointmentOn,date}) => {
     const {register, handleSubmit, formState: { errors } } = useForm();
     const onSubmit = data => {
          console.log(data)
          closeModal();
     }
   
     return (
          <div >
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 className="text-brand text-center">{appointmentOn}</h2>
            <p className="text-secondary text-center"><small>{date.toDateString()}</small></p>
            <form onSubmit={handleSubmit(onSubmit)}>
           <div>
           <input {...register("firstName", { required: true })} placeholder="Your name" />
           {errors.firstName?.type === 'required' && "First name is required"}
           </div>
            
           <div>
           <input {...register("lastName", { required: true })} placeholder="Phone Number"/>
           {errors.lastName && "Phone Number is required"}
           </div>
           
           
            <input type="submit" />
          </form>
          </Modal>    
          </div>
     );
};

export default AppointmentForm;
