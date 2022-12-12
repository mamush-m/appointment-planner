import React from "react";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  console.log(getTodayString())

  const contactsSelect = contacts.map(contact => {
    return <option>{contact.name}</option>
  })

  const handleTitle = e => {
    setTitle(e.target.value)
  }

  const handleDate = e => {
    setDate(e.target.value)
  }

  const handleTime = e => {
    setTime(e.target.value)
  }

  const handleContact = e => {
    setContact(e.target.value)
  }

  console.log(contactsSelect)

  return (
    // AppointmentForm
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Name of appointment</label>
        <input id="title" onChange={handleTitle} required/>

        <label htmlFor='date'>Date</label>
        <input id="date" placeholder={getTodayString()} onChange={handleDate} required/>

        <label htmlFor='time'>Time</label>
        <input id="time" type={'time'} placeholder='12:30 PM' onChange={handleTime} required/>
        
        <label htmlFor='contact'>Select Contact</label>
        <select id="contact" onChange={handleContact} placeholder='haha' required>
          <option>---PLEASE SELECT A CONTACT---</option>
          {/* {contactsSelect} */}
          {/* <option>{contactsSelect}</option> */}
          {
            contacts.map((contact, ind) => <option key={ind}>{contact.name}</option>)
          }
        </select>

        <input type={'submit'}/>
      </form>
    </div>
  );
};
