import React, { useState } from 'react';
import '../styles/gameboard.css';

export default function GameBoard() {
  const [p1Board, setp1Board] = useState([
    ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    ['A', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['B', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['C', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['D', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['E', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['F', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['G', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['H', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['I', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['J', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const renderBoard = p1Board.map((row, idx) => {
    return (
      <div className="row">
        {row.map((square, idx) => {
          return (
            <div className="square">
              <div id={`${row[0]}${idx}`} className="square" key={idx}>
                {square}
              </div>
            </div>
          );
        })}
      </div>
    );
  });

  return <div className="board">{renderBoard}</div>;
}
