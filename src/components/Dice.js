import React from 'react';
import Die from './Die';

export default function Dice(props) {
  const style = { backgroundColor: 'blue' };

  return (
    <div className="dice-container">
      {props.diceArray.map((dice, i) => {
        return (
          <Die
            diceArray={props.diceArray}
            id={dice.id}
            toggleFreeze={props.toggleFreeze}
            key={i}
            diceValue={dice.diceValue}
            style={{ backgroundColor: dice.isFrozen ? 'lightblue' : 'white' }}
          />
        );
      })}
    </div>
  );
}
