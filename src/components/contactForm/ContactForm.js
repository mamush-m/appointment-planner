import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  // console.log(name, phone, email)

  const handleName = e => {
    setName(e.target.value)
  }
  

  const handlePhone = e => {
    setPhone(e.target.value)
  }

  const handleEmail = e => {
    setEmail(e.target.value)
  }

  return (
    // ContactForm
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input id='name' onChange={handleName} value={name} required/>

        <label htmlFor='phone'>Phone</label>
        <input id='phone' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={handlePhone} value={phone} required/>

        <label htmlFor='name'>Email</label>
        <input id='email' type={'email'} onChange={handleEmail} value={email} required/>

        <input type='submit'/>
        
      </form>
    </div>
  );
};

