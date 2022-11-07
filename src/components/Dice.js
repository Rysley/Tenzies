import React from 'react';
import Die from './Die';

export default function Dice(props) {
  return (
    <div className="dice-container">
      {props.diceArray.map((dice, i) => {
        return (
          <Die
            id={dice.id}
            toggleFreeze={props.toggleFreeze}
            key={dice.key}
            diceValue={dice.diceValue}
            style={{ backgroundColor: dice.isFrozen ? 'lightblue' : 'white' }}
          />
        );
      })}
    </div>
  );
}
