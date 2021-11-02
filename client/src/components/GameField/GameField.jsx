import { useEffect, useState } from 'react';
import FallindBlock from './FallindBlock';
import style from './GameField.module.css'
import GameNav from './GameNav';

function GameField(props) {

  const [position, setPosition] = useState(920) // стартовая горизонтальная позиция
  const [cubeStyle, setCubeStyle] = useState(style.falling_block) // переменная стилей для управления поворотом блока 
  const [top, setTop] = useState(-637) // начальное состояние вертикальной позиции
  const [refresh, setRefresh] = useState(0) // переменная обновления игры


  const moveRight = (positionX, positionY) => { // смещение вправо
    if (position < 920) {
      setPosition(position + 190)
    }
  }

  const moveLeft = () => { // смещение влево
    if (position != 160) {
      if (position === 920 && top < 313) {
        setPosition(position - 190)
      } else if (position === 730 && top < 123) {
        setPosition(position - 190)
      } else if (position === 540 && top < -67) {
        setPosition(position - 190)
      } else if (position === 350 && top < -67) {
        setPosition(position - 190)
      }
    }
  }

  const rotateRightHandler = () => { // функция поворота блока вправо через присвоение дополнительного стиля
    if (top < 503) { // проверка - находится ли блок внизу
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
  }

  const rotateLeftHandler = () => { // функция поворота блока влево через дополнительные стили. Она не пригодилась
    if (top < 503) { // проверка не находится ли блок в нижней позиции
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

  }

  useEffect(() => { // стартовый запуск блока
    console.log(position);
    if (position === 730) { // движение и остановка блока во второй справа позиции
      if (top < 313) // проверка финишной позиции. Ограничение финишной позиции 
        setTimeout(() => {
          setTop(top + 190) // шаг блока вниз за 2 секунды
        }, 2000)
    } else if (position === 540 && cubeStyle != `${style.falling_block} ${style.rotate_180}`) { // движение и остановка блока в третьей слева позиции без перевернутого на 180 градусов блока
      if (top < 123) // проверка финишной позиции. Ограничение финишной позиции 
        setTimeout(() => {
          setTop(top + 190) // шаг блока вниз
        }, 2000)
    } else if (position === 540 && cubeStyle === `${style.falling_block} ${style.rotate_180}`) { // движение и остановка блока в третьей слева позиции без перевернутого на 180 градусов блока
      if (top < 313) // проверка финишной позиции. Ограничение финишной позиции 
        setTimeout(() => {
          setTop(top + 190) // шаг блока вниз
        }, 2000)
    } else if (position === 350 && cubeStyle != `${style.falling_block} ${style.rotate_180}`) { // движение и остановка блока в третьей слева позиции без перевернутого на 180 градусов блока
      if (top < 123) // проверка финишной позиции. Ограничение финишной позиции 
        setTimeout(() => {
          setTop(top + 190) // шаг блока вниз
        }, 2000)
    } else if (position === 350 && cubeStyle === `${style.falling_block} ${style.rotate_180}`) { // движение и остановка блока в третьей слева позиции без перевернутого на 180 градусов блока
      if (top < 313) // проверка финишной позиции. Ограничение финишной позиции 
        setTimeout(() => {
          setTop(top + 190) // шаг блока вниз
        }, 2000)
    } else if (position === 160) { // движение и остановка блока в третьей слева позиции без перевернутого на 180 градусов блока
      if (top < -67) // проверка финишной позиции. Ограничение финишной позиции 
        setTimeout(() => {
          setTop(top + 190) // шаг блока вниз
        }, 2000)
    } else if (position === 160 && cubeStyle === `${style.falling_block} ${style.rotate_270}`) { // движение и остановка блока в третьей слева позиции без перевернутого на 180 градусов блока
      if (top < 123) // проверка финишной позиции. Ограничение финишной позиции 
        setTimeout(() => {
          setTop(top + 190) // шаг блока вниз
        }, 2000)
    } else {
      if (top < 503) // проверка финишной позиции. Ограничение финишной позиции 
        setTimeout(() => {
          setTop(top + 190) // шаг блока вниз
        }, 2000)
    }
  }, [top, position])


  useEffect(() => { // перезапуск блока
    setTimeout(() => {
      if (top < 503) // запуск блока вниз, если он не находиться в финишной позиции. Ограничение финишной позиции
        setTimeout(() => {
          setTop(top + 190) // шаг блока вниз
        }, 2000)
    }, 2000)
  }, [refresh])

  const handlerRefresh = () => { // сигнальная переменная кнопки рефреш
    if (position === 920 && top === 503) {
      if (top < 503) { // блокировка кнопки обновления до достижения финальной позиции
        console.log(null);
      }
      setRefresh(refresh + 1)
      setCubeStyle(`${style.falling_block}`)
      setTop(-637)
      setPosition(920)

    } else if (position === 730 && top === 313) {
      if (top < 313) { // блокировка кнопки обновления до достижения финальной позиции
        console.log(null);
      }
      setRefresh(refresh + 1)
      setCubeStyle(`${style.falling_block}`)
      setTop(-637)
      setPosition(920)
    }
    else if (position === 540 && top === 123) {
      if (top < 123) {
        console.log(null);
      }
      setRefresh(refresh + 1)
      setCubeStyle(`${style.falling_block}`)
      setTop(-637)
      setPosition(920)
    } else if (position === 540 && cubeStyle === `${style.falling_block} ${style.rotate_180}` && top === 313) {
      if (top < 313) {
        console.log(null);
      }
      setRefresh(refresh + 1)
      setCubeStyle(`${style.falling_block}`)
      setTop(-637)
      setPosition(920)
    } else if (position === 350 && top === 123) {
      if (top < 123) {
        console.log(null);
      }
      setRefresh(refresh + 1)
      setCubeStyle(`${style.falling_block}`)
      setTop(-637)
      setPosition(920)
    } else if (position === 350 && cubeStyle === `${style.falling_block} ${style.rotate_180}` && top === 313) {
      if (top < 313) {
        console.log(null);
      }
      setRefresh(refresh + 1)
      setCubeStyle(`${style.falling_block}`)
      setTop(-637)
      setPosition(920)
    } else if (position === 160 && top === -67) {
      if (top < 313) {
        console.log(null);
      }
      setRefresh(refresh + 1)
      setCubeStyle(`${style.falling_block}`)
      setTop(-637)
      setPosition(920)
    }
  }

  return (
    <div className={style.game_field}>
      <GameNav moveRight={moveRight} moveLeft={moveLeft} rotateRightHandler={rotateRightHandler} rotateLeftHandler={rotateLeftHandler} handlerRefresh={handlerRefresh} />
      <FallindBlock style={cubeStyle} top={top} position={position} cubeStyle={cubeStyle} />
    </div>
  );
}

export default GameField;
