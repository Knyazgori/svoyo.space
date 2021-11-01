import { useEffect, useState } from 'react';
import FallindBlock from './FallindBlock';
import style from './GameField.module.css'
import GameNav from './GameNav';

function GameField(props) {

  const [position, setPosition] = useState(940) // горизонтальная позиция
  const [cubeStyle, setCubeStyle] = useState(style.falling_block) // переменная стилей для управления поворотом блока
  const [top, setTop] = useState(-150) // начальное состояние вертикальной позиции
  const [refresh, setRefresh] = useState(0) // переменная обновления игры


  const moveRight = () => { // смещение вправо
    setPosition(position + 176)
  }

  const moveLeft = () => { // смещение влево
    setPosition(position - 176)
  }

  const rotateRightHandler = () => { // функция поворота блока вправо через присвоение дополнительного стиля

    if (cubeStyle === style.falling_block) {
      setCubeStyle(`${style.falling_block} ${style.rotate_90}`)
    } else if (cubeStyle === `${style.falling_block} ${style.rotate_90}`) {
      setCubeStyle(`${style.falling_block} ${style.rotate_180}`)
    } else if (cubeStyle === `${style.falling_block} ${style.rotate_180}`) {
      setCubeStyle(`${style.falling_block} ${style.rotate_270}`)
    } else if (cubeStyle === `${style.falling_block} ${style.rotate_270}`) {
      setCubeStyle(`${style.falling_block}`)
    }
  }

  const rotateLeftHandler = () => { // функция поворота блока влево через дополнительные стили

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

  useEffect(() => {
    if (top < 520) // стартовый запуск блока
      setTimeout(() => {
        setTop(top + 168)
      }, 2000)
  }, [top])

  useEffect(() => {
    setTimeout(() => {
      if (top < 520) // запуск блока вниз
        setTimeout(() => {
          setTop(top + 168)
        }, 2000)
    }, 2000)
  }, [refresh])

  const handlerRefresh = () => { // сигнальная переменная кнопки рефреш
    setRefresh(refresh + 1)
    setCubeStyle(`${style.falling_block}`)
    setTop(-150)
    console.log('refresh');
  }

  return (
    <div className={style.game_field}>
      <GameNav moveRight={moveRight} moveLeft={moveLeft} rotateRightHandler={rotateRightHandler} rotateLeftHandler={rotateLeftHandler} handlerRefresh={handlerRefresh} />
      <FallindBlock style={cubeStyle} top={top} position={position} cubeStyle={cubeStyle} />
    </div>
  );
}

export default GameField;
