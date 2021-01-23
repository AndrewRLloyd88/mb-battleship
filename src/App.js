import React from 'react';
import './styles/index.css';
import GameBoard from './Components/GameBoard';
import Ships from './Components/Ships';
import UniqueDropzone from './Components/UniqueDropZone';

function App() {
  return (
    <div>
      <h1>Battleship</h1>
      <div id="UniqueDropzone" className="game-area">
        <GameBoard />
        <Ships />
      </div>
    </div>
  );
}

export default App;
