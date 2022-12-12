import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm'
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  // console.log(props)


  const [ name, setName ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ email, setEmail ] = useState('');

  const [ duplicate, setDuplicate ] = useState(false);

  useEffect(() => {
    const alreadyThere = props.contacts.findIndex(element => element.name === name);
    if(alreadyThere !== -1) {
      setDuplicate(true)
      console.log({done: 'done!'})
    }else {
      setDuplicate(false)
    }
  }, [name])


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   const newContact = {
    name: name,
    phone: phone,
    email: email
   }

   if(duplicate === false && name!=='') {
    console.log(newContact)
    props.addContact(newContact)
    setName('');
    setPhone('');
    setEmail('');
   }

   if(duplicate === true) {
    window.alert('duplicate!')
   }

  //  setName('');
  //  setPhone('');
  //  setEmail('');
  };

  

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={props.contacts}/>
      </section>
    </div>
  );
};
