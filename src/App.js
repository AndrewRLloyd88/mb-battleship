import React, { useEffect } from 'react';
import './styles/index.css';
import GameBoard from './Components/GameBoard';
import Ships from './Components/Ships';
import { Draggable } from '@shopify/draggable';

function App() {
  useEffect(() => {
    const containers = document.querySelectorAll('.ship');
    console.log(containers);

    const draggable = new Draggable(containers, {
      // containment: "parent",
      // draggable: '.draggable',
      draggable: '.ship',
    });
  }, []);

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
