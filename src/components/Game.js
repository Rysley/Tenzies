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
      const newDiceArray = prevSate.map((dice, i) => {
        return {
          key: Math.random(),
          id: Math.random(),
          isFrozen: dice.isFrozen ? true : false,
          diceValue: dice.isFrozen ? dice.diceValue : getRandomNum(),
        };
      });

      return newDiceArray;
    });
  }

  function castDice() {
    diceArrayInit();
  }

  React.useEffect(() => {
    const allEqual = diceArray.every(
      (die) => die.diceValue === diceArray[0].diceValue
    );
    if (allEqual && diceArray != initArray) console.log('🎉 YOU WIN!! 🎉');
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
