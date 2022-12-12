import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from '../src/containers/appointmentsPage/AppointmentsPage'
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [ contacts, setContact ] = useState([{name: 'mamush', phone: '29212312', email: 'mamush@email.com'}, {name: 'MIKE', phone: '41231321', email: 'MIKE@email.com'}]);
  const [ appointments, setAppointments ]  = useState([
    {title: 'doctor', contact: contacts[0].name, date: 'april 21', time: '3pm'},
    {title: 'restaurant', contact: contacts[1].name, date: 'april 22', time: '4pm'}
  ]);


  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = newContact => {
    setContact(prev => [newContact, ...prev])
  }

  const addAppointment = newAppointment => {
    setAppointments(prev => [newAppointment, ...prev])
  }

  return (
    <>
      <h1>HELLO MAMUSH!</h1>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;

//{name: 'mamush', phone: '29212312', email: 'mamush@email.com'}
