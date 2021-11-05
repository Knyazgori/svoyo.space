import React from 'react';

import Left from './Buttons/Left';
import Down from './Buttons/Down'
import Right from './Buttons/Right'
import Refresh from './Buttons/Refresh'

import styles from './GameField.module.css'


function GameNav({ moveRight, moveLeft, rotateRightHandler, rotateLeftHandler, handlerRefresh }) {
  return (
    <div className={styles.controller_block}> 
      <Refresh handlerRefresh={handlerRefresh}/>
      <Left moveLeft={moveLeft} rotateLeftHandler={rotateLeftHandler} />
      <Down rotateRightHandler={rotateRightHandler}/>
      <Right moveRight={moveRight} />
      
    </div>
  );
}

export default GameNav;
