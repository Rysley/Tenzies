import React from 'react';

export default function Dice() {
  return (
    <div className="dice-container">
      <button className="btn dice-button">1</button>
      <button className="btn dice-button">2</button>
      <button className="btn dice-frozen dice-button">3</button>
      <button className="btn dice-button">1</button>
      <button className="btn dice-button">2</button>
      <button className="btn dice-frozen dice-button">3</button>
      <button className="btn dice-frozen dice-button">1</button>
      <button className="btn dice-button">2</button>
      <button className="btn dice-button">3</button>
      <button className="btn dice-button">1</button>
    </div>
  );
}
