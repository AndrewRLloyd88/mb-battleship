import React, { useState } from 'react';
import '../styles/gameboard.css';
import '../styles/playerships.css';
import { Draggable } from '@shopify/draggable';

export default function Ships() {
  const [p1Ships, setp1Ships] = useState({
    Carrier: {
      size: 5,
      position: [0, 0, 0, 0, 0],
      appearance: ['Car', 'Car', 'Car', 'Car', 'Car'],
    },
    Battleship: {
      size: 4,
      position: [0, 0, 0, 0],
      appearance: ['Bat', 'Bat', 'Bat', 'Bat'],
    },
    Cruiser: {
      size: 3,
      position: [0, 0, 0],
      appearance: ['Cru', 'Cru', 'Cru'],
    },
    Submarine: {
      size: 3,
      position: [0, 0, 0],
      appearance: ['Sub', 'Sub', 'Sub'],
    },
    Destroyer: { size: 2, position: [0, 0], appearance: ['Des', 'Des'] },
  });

  const renderShipsToPlace = (ship) => {
    let shipObj = ship.map((appearance, idx) => {
      return (
        <div className="square">
          <div id={`${idx}${appearance}`} className="square">
            {appearance}
          </div>
        </div>
      );
    });
    return shipObj;
  };

  const renderShips = Object.keys(p1Ships).map((ship, idx) => {
    console.log(p1Ships[ship].appearance);
    return (
      <div>
        {ship}
        <div>Ship Size {p1Ships[ship].size}</div>
        {/* <div>{p1Ships[ship].appearance}</div> */}
        <div
          id={ship}
          className="ship BlockWrapper BlockWrapper--isDropzone draggable-dropzone--occupied Block--isDraggable"
          data-dropzone="1"
        >
          {renderShipsToPlace(p1Ships[ship].appearance)}
        </div>
      </div>
    );
  });

  return <div className="ships">{renderShips}</div>;
}
