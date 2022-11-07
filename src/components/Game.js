import React from 'react';
import Roll from './Roll';
import Rules from './Rules';
import Dice from './Dice';
import { nanoid } from 'nanoid';

export default function Game() {
  function getInitArray() {
    let randomArray = [];
    for (let i = 0; i < 10; i++) {
      randomArray.push({
        id: i,
        key: nanoid(),
        isFrozen: false,
        diceValue: getRandomNum(),
      });
    }
    return randomArray;
  }

  const getRandomNum = () => Math.ceil(Math.random() * 6);
  const [diceArray, setDiceArray] = React.useState(getInitArray());

  function castDice() {
    setDiceArray((prevSate) => {
      const newDiceArray = prevSate.map((dice, i) => {
        return {
          ...dice,
          isFrozen: dice.isFrozen ? true : false,
          diceValue: dice.isFrozen ? dice.diceValue : getRandomNum(),
        };
      });
      return newDiceArray;
    });
  }

  React.useEffect(() => {
    const allEqual = diceArray.every(
      (die) => die.diceValue === diceArray[0].diceValue
    );
    if (allEqual && diceArray != getInitArray()) console.log('🎉 YOU WIN!! 🎉');
  }, [diceArray]);

  function toggleFreeze(e) {
    setDiceArray((prevSate) => {
      const modState = prevSate.map((dice) => {
        if (dice.id === Number(e.target.id)) {
          return { ...dice, isFrozen: !dice.isFrozen };
        } else {
          return dice;
        }
      });
      return modState;
    });
  }

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
