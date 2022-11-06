import React from 'react';

export default function Die(props) {
  console.log(props);

  return (
    <div
      onClick={props.toggleFreeze}
      value={props.diceValue}
      id={props.id}
      className="btn die-button"
      style={props.style}
    >
      {props.diceValue}
    </div>
  );
}
