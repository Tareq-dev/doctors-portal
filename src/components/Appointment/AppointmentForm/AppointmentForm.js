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
          
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
      <h2 className="text-brand text-center">{appointmentOn}</h2>
      <p className="text-secondary text-center"><small>{date.toDateString()}</small></p>
      <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
      <input type="text" {...register('test', { required: true })}  placeholder="Enter your Name" ></input>
      {errors.name && <span className="text-danger"> This field is required</span>}
      </div>
      <div className="form-group">
      <input type="text" {...register('phone', { required: true })}  placeholder="Enter your Phone No" ></input>
      {errors.phone && <span className="text-danger"> This field is required</span>}
      </div>
      <div className="form-group">
      <input type="text" {...register('email', { required: true })}  placeholder="Enter your Email" ></input>
      {errors.email && <span className="text-danger"> This field is required</span>}
      </div>
      <div className=" text-right">
      <button type="submit" className="btn btn-brand">Send</button>
      </div>
      </form>
      </Modal>    
        
     );
};

export default AppointmentForm;
