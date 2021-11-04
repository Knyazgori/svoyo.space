import React from 'react';
import Event from './Blocks/Event';
import Samisdat from './Blocks/Samisdat';

function ThirdRow(props) {
  return (
    <div
      style={{
        display: "flex",
        fleDirection: "row",
        justifyContent: "space-between",
        width: "731px",
        position: "absolute",
        bottom: "-27px",
        zIndex: 20,
        clipPath: 'polygon(-3px 172px, 0px 0px, 372px -8px, 372px -191px, 735px -193px, 731px 356px, 372px 356px, 373px 172px)'
      }}
    >
      <Samisdat />
      <Event />
      
    </div>
  );
}

export default ThirdRow;
