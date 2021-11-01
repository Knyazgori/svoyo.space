import { useState } from 'react';
import FallindBlock from './FallindBlock';
import style from './GameField.module.css'
import GameNav from './GameNav';

function GameField(props) {

  const [position, setPosition] = useState(940)
  const [cubeStyle, setCubeStyle] = useState(style.falling_block)

  console.log(cubeStyle);

  const moveRight = () => {
    setPosition(position + 176)
  }

  const moveLeft = () => {
    setPosition(position - 176)
  }

  const rotateRightHandler = () => {

    if (cubeStyle === style.falling_block) {
      setCubeStyle(`${style.falling_block} ${style.rotate_90}`)
      console.log(cubeStyle);
    } else if (cubeStyle === `${style.falling_block} ${style.rotate_90}`) {
      setCubeStyle(`${style.falling_block} ${style.rotate_180}`)
    } else if (cubeStyle === `${style.falling_block} ${style.rotate_180}`) {
      setCubeStyle(`${style.falling_block} ${style.rotate_270}`)
    } else if (cubeStyle === `${style.falling_block} ${style.rotate_270}`) {
      setCubeStyle(`${style.falling_block}`)
    }
  }

  const rotateLeftHandler = () => {

    if (cubeStyle === style.falling_block) {
      setCubeStyle(`${style.falling_block} ${style.rotate_270}`)
    } else if (cubeStyle === `${style.falling_block} ${style.rotate_270}`) {
      setCubeStyle(`${style.falling_block} ${style.rotate_180}`)
    } else if (cubeStyle === `${style.falling_block} ${style.rotate_180}`) {
      setCubeStyle(`${style.falling_block} ${style.rotate_90}`)
    } else if (cubeStyle === `${style.falling_block} ${style.rotate_90}`) {
      setCubeStyle(`${style.falling_block}`)
    }
  }

  return (
    <div className={style.game_field}>
      <GameNav moveRight={moveRight} moveLeft={moveLeft} rotateRightHandler={rotateRightHandler} rotateLeftHandler={rotateLeftHandler}/>
      <FallindBlock style={cubeStyle} position={position} cubeStyle={cubeStyle}/>
    </div>
  );
}

export default GameField;
