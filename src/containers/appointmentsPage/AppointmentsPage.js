import React, { useState } from "react";
import App from "../../App";
import {AppointmentForm} from '../../components/appointmentForm/AppointmentForm'
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
 console.log(props)

  const [ title, setTitle ] = useState('');
  const [ contact, setContact ] = useState('');
  const [ date, setDate ] = useState('');
  const [ time, setTime ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   const newAppointment = {
    title: title,
    contact: contact,
    date: date,
    time: time
   }

   props.addAppointment(newAppointment)
  };


  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        title={title}
        setTitle={setTitle}
        contacts={props.contacts}
        setContact={setContact}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}

        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList
        appointments={props.appointments}
        />
      </section>
    </div>
  );
};
