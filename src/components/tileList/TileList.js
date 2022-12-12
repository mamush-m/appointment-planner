import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  console.log(props, 'hi hi hi')

  return (
    <div>
      {/* {props.contacts.map(contact => {
        return <div key={contact.name}>
          <p className="tile-title">{contact.name}</p>
          <p className="tile">{contact.phone}</p>
          <p className="tile">{contact.email}</p>
        </div>
      })} */}

      {/* {
        props.appointments.map(appointment => {
          return <div>
            <p>{appointment.title}</p>
            <p>{appointment.date}</p>
            <p>{appointment.title}</p>
          </div>
        })
      } */}

      {
        'contacts' in props? props.contacts.map((contact, ind) => <Tile key={ind} contact={contact}/>) : props.appointments.map((appointment, ind) => <Tile key={ind} appointment={appointment}/>)
      }
      
    </div>
  );
};
