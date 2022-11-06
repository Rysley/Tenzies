import React from 'react';

export default function Roll(props) {
  return (
    <div className="btn-container">
      <button onClick={props.handleRoll} className="btn btn-roll">
        Roll
      </button>
    </div>
  );
}
