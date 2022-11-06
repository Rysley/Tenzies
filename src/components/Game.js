import React from 'react';
import Roll from './Roll';
import Rules from './Rules';
import Dice from './Dice';

export default function Game() {
  const initArray = [...Array(10).keys()];
  const getRandomNum = () => Math.floor(Math.random() * 6 + 1);
  const [diceArray, setDiceArray] = React.useState(initArray);

  function diceArrayInit() {
    setDiceArray((prevSate) => {
      console.log(prevSate, 'prev');
      const newDiceArray = prevSate.map((dice, i) => {
        return {
          key: Math.random(),
          id: Math.random(),
          isFrozen: dice.isFrozen ? true : false,
          diceValue: dice.isFrozen ? dice.diceValue : getRandomNum(),
        };
      });
      console.log(newDiceArray, 'arr');
      return newDiceArray;
    });
  }

  function castDice() {
    diceArrayInit();
  }

  function toggleFreeze(e) {
    console.log(e.target, Number(e.target.innerHTML));
    setDiceArray((prevSate) => {
      console.log(prevSate);
      const modState = prevSate.map((dice) => {
        console.log(dice.id === Number(e.target.id));
        if (dice.id === Number(e.target.id)) {
          return { ...dice, isFrozen: !dice.isFrozen };
        } else {
          return dice;
        }
      });
      console.log(modState);
      return modState;
      //return [...prevSate];
    });
  }
  console.log(diceArray);

  return (
    <div className="game-wrapper">
      <div className="game-board">
        <Rules />
        <Dice diceArray={diceArray} toggleFreeze={(e) => toggleFreeze(e)} />
        <Roll handleRoll={() => castDice()} />
      </div>
    </div>
  );
}
