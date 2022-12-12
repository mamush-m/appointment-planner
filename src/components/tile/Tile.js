import React from "react";

export const Tile = (props) => {
  console.log(props, 'bye bye bye')

  return (
    <div className="tile-container">
      {/* <p className="tile-title">{props.contact.name}</p>
      <p className="tile">{props.contact.email}</p>
      <p className="tile">{props.contact.phone}</p> */}

      {
        'contact' in props? <div>
          <p className="tile-title">{props.contact.name}</p>
          <p className="tile">{props.contact.phone}</p>
          <p className="tile">{props.contact.email}</p>
        </div>
        :
        <div>
          <p className="tile-title">{props.appointment.title}</p>
          <p className="tile">{props.appointment.contact}</p>
          <p className="tile">{props.appointment.date}</p>
          <p className="tile">{props.appointment.time}</p>
        </div>
      }

    </div>
  );
};
