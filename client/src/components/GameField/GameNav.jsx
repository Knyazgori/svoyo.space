import React from 'react';
import Left from './Buttons/Left';
import Down from './Buttons/Down'
import Right from './Buttons/Right'
import Refresh from './Buttons/Refresh'

function GameNav({ moveRight, moveLeft, rotateRightHandler, rotateLeftHandler, handlerRefresh }) {
  return (
    <div>
      <Left moveLeft={moveLeft} rotateLeftHandler={rotateLeftHandler} />
      <Down />
      <Right moveRight={moveRight}  rotateRightHandler={rotateRightHandler} />
      <Refresh handlerRefresh={handlerRefresh}/>
    </div>
  );
}

export default GameNav;
