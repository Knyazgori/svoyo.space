import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import LogoBlock from '../Header/Header';
import FallindBlock from './FallindBlock';
import style from './GameField.module.css'
import GameNav from './GameNav';
import TextBlock from './TextBlock';

function GameField(props) {

  const [position, setPosition] = useState(920) // стартовая горизонтальная позиция
  const [cubeStyle, setCubeStyle] = useState(style.falling_block) // переменная стилей для управления поворотом блока 
  const [top, setTop] = useState(-625) // начальное состояние вертикальной позиции -625
  const [refresh, setRefresh] = useState(0) // переменная обновления игры


  const moveRight = () => { // смещение вправо
    if (position < 920) {
      if (position === 920 && top < 503) {
        setPosition(position + 188)
      } else if (position === 732 && top < 315) {
        setPosition(position + 188)
      } else if (position === 544 && top < 127) {
        setPosition(position + 188)
      } else if (position === 356 && top < 127) {
        setPosition(position + 188)
      } else if (position === 168 && top < -61) {
        setPosition(position + 188)
      }
    }
  }

  const moveLeft = () => { // смещение влево
    if (position != 168) {
      if (position === 920 && top < 315) {
        setPosition(position - 188)
      } else if (position === 732 && top < 127) {
        setPosition(position - 188)
      } else if (position === 544 && top < 127) {
        setPosition(position - 188)
      } else if (position === 356 && top < -61) {
        setPosition(position - 188)
      } else if (position === 168 && top < -61) {
        setPosition(position - 188)
      }
    }
  }

  // const moveLeft = () => { // смещение влево, тестовая функция без условий позиционирования
  //   if (position != 168) {
  //       setPosition(position - 188)
  //   }
  // }

  const rotateRightHandler = () => { // функция поворота блока вправо через присвоение дополнительного стиля
    if (position === 920 && top < 503) { // проверка - находится ли блок внизу
      if (cubeStyle === style.falling_block) {
        setCubeStyle(`${style.falling_block} ${style.rotate_90}`)
      } else if (cubeStyle === `${style.falling_block} ${style.rotate_90}`) {
        setCubeStyle(`${style.falling_block} ${style.rotate_180}`)
      } else if (cubeStyle === `${style.falling_block} ${style.rotate_180}`) {
        setCubeStyle(`${style.falling_block} ${style.rotate_270}`)
      } else if (cubeStyle === `${style.falling_block} ${style.rotate_270}`) {
        setCubeStyle(`${style.falling_block}`)
      }
    } else if (position === 732 && top < 127) { // проверка - находится ли блок внизу
      if (cubeStyle === style.falling_block) {
        setCubeStyle(`${style.falling_block} ${style.rotate_90}`)
      } else if (cubeStyle === `${style.falling_block} ${style.rotate_90}`) {
        setCubeStyle(`${style.falling_block} ${style.rotate_180}`)
      } else if (cubeStyle === `${style.falling_block} ${style.rotate_180}`) {
        setCubeStyle(`${style.falling_block} ${style.rotate_270}`)
      } else if (cubeStyle === `${style.falling_block} ${style.rotate_270}`) {
        setCubeStyle(`${style.falling_block}`)
      }
    } else if (position === 544 && top < 127) { // проверка - находится ли блок внизу
      if (cubeStyle === style.falling_block) {
        setCubeStyle(`${style.falling_block} ${style.rotate_90}`)
      } else if (cubeStyle === `${style.falling_block} ${style.rotate_90}`) {
        setCubeStyle(`${style.falling_block} ${style.rotate_180}`)
      } else if (cubeStyle === `${style.falling_block} ${style.rotate_180}`) {
        setCubeStyle(`${style.falling_block} ${style.rotate_270}`)
      } else if (cubeStyle === `${style.falling_block} ${style.rotate_270}`) {
        setCubeStyle(`${style.falling_block}`)
      }
    } else if (position === 544 && cubeStyle === `${style.falling_block} ${style.rotate_180}` && top < 127) { // проверка - находится ли блок внизу
      if (cubeStyle === style.falling_block) {
        setCubeStyle(`${style.falling_block} ${style.rotate_90}`)
      } else if (cubeStyle === `${style.falling_block} ${style.rotate_90}`) {
        setCubeStyle(`${style.falling_block} ${style.rotate_180}`)
      } else if (cubeStyle === `${style.falling_block} ${style.rotate_180}`) {
        setCubeStyle(`${style.falling_block} ${style.rotate_270}`)
      } else if (cubeStyle === `${style.falling_block} ${style.rotate_270}`) {
        setCubeStyle(`${style.falling_block}`)
      }
    } else if (position === 356 && top < 127) { // проверка - находится ли блок внизу
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
    if (position === 732) { // движение и остановка блока во второй справа позиции
      if (top < 315) // проверка финишной позиции. Ограничение финишной позиции 
        setTimeout(() => {
          setTop(top + 188) // шаг блока вниз за 2 секунды
        }, 2000)
    } else if (position === 544 && cubeStyle != `${style.falling_block} ${style.rotate_180}`) { // движение и остановка блока в третьей слева позиции без перевернутого на 180 градусов блока
      if (top < 127) // проверка финишной позиции. Ограничение финишной позиции 
        setTimeout(() => {
          setTop(top + 188) // шаг блока вниз
        }, 2000)
    } else if (position === 544 && cubeStyle === `${style.falling_block} ${style.rotate_180}`) { // движение и остановка блока в третьей слева позиции без перевернутого на 180 градусов блока
      if (top < 315) // проверка финишной позиции. Ограничение финишной позиции 
        setTimeout(() => {
          setTop(top + 188) // шаг блока вниз
        }, 2000)
    } else if (position === 356 && cubeStyle != `${style.falling_block} ${style.rotate_180}`) { // движение и остановка блока в третьей слева позиции без перевернутого на 180 градусов блока
      if (top < 127) // проверка финишной позиции. Ограничение финишной позиции 
        setTimeout(() => {
          setTop(top + 188) // шаг блока вниз
        }, 2000)
    } else if (position === 356 && cubeStyle === `${style.falling_block} ${style.rotate_180}`) { // движение и остановка блока в третьей слева позиции без перевернутого на 180 градусов блока
      if (top < 315) // проверка финишной позиции. Ограничение финишной позиции 
        setTimeout(() => {
          setTop(top + 188) // шаг блока вниз
        }, 2000)
    } else if (position === 168) { // движение и остановка блока в третьей слева позиции без перевернутого на 180 градусов блока
      if (top < -61) // проверка финишной позиции. Ограничение финишной позиции 
        setTimeout(() => {
          setTop(top + 188) // шаг блока вниз
        }, 2000)
    } else if (position === 168 && cubeStyle === `${style.falling_block} ${style.rotate_270}`) { // движение и остановка блока в третьей слева позиции без перевернутого на 180 градусов блока
      if (top < 127) // проверка финишной позиции. Ограничение финишной позиции 
        setTimeout(() => {
          setTop(top + 188) // шаг блока вниз
        }, 2000)
    } else {
      if (top < 503) // проверка финишной позиции. Ограничение финишной позиции 
        setTimeout(() => {
          setTop(top + 188) // шаг блока вниз
        }, 2000)
    }
  }, [top, position])


  useEffect(() => { // перезапуск блока
    setTimeout(() => {
      if (top < 503) // запуск блока вниз, если он не находиться в финишной позиции. Ограничение финишной позиции
        setTimeout(() => {
          setTop(top + 188) // шаг блока вниз
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
      setTop(-625)
      setPosition(920)

    } else if (position === 732 && top === 315) {
      if (top < 315) { // блокировка кнопки обновления до достижения финальной позиции
        console.log(null);
      }
      setRefresh(refresh + 1)
      setCubeStyle(`${style.falling_block}`)
      setTop(-625)
      setPosition(920)
    }
    else if (position === 544 && top === 127) {
      if (top < 127) {
        console.log(null);
      }
      setRefresh(refresh + 1)
      setCubeStyle(`${style.falling_block}`)
      setTop(-625)
      setPosition(920)
    } else if (position === 544 && cubeStyle === `${style.falling_block} ${style.rotate_180}` && top === 315) {
      if (top < 315) {
        console.log(null);
      }
      setRefresh(refresh + 1)
      setCubeStyle(`${style.falling_block}`)
      setTop(-625)
      setPosition(920)
    } else if (position === 356 && top === 127) {
      if (top < 127) {
        console.log(null);
      }
      setRefresh(refresh + 1)
      setCubeStyle(`${style.falling_block}`)
      setTop(-625)
      setPosition(920)
    } else if (position === 356 && cubeStyle === `${style.falling_block} ${style.rotate_180}` && top === 315) {
      if (top < 315) {
        console.log(null);
      }
      setRefresh(refresh + 1)
      setCubeStyle(`${style.falling_block}`)
      setTop(-625)
      setPosition(920)
    } else if (position === 168 && top === -61) {
      if (top < 127) {
        console.log(null);
      }
      setRefresh(refresh + 1)
      setCubeStyle(`${style.falling_block}`)
      setTop(-625)
      setPosition(920)
    }
  }

  return (
    <div className={style.game_field}>
      <div className={style.overflow}>
        <GameNav style={{ marginTop: '10px' }} moveRight={moveRight} moveLeft={moveLeft} rotateRightHandler={rotateRightHandler} rotateLeftHandler={rotateLeftHandler} handlerRefresh={handlerRefresh} />
        <TextBlock />
        <div className={style.costyl}></div>
        <FallindBlock style={cubeStyle} top={top} position={position} cubeStyle={cubeStyle} />
      </div>
    </div>

  );
}

export default GameField;
