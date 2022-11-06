import React from 'react';
import Roll from './Roll';
import Rules from './Rules';
import Dice from './Dice';

export default function Game() {
  return (
    <div className="game-wrapper">
      <div className="game-board">
        <Rules />
        <Dice />
        <Roll />
      </div>
    </div>
  );
}
