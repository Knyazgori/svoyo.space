import React, { useState, useEffect } from "react"

import "./Slider.css"

const img = [
  <img src="../../../AR/letter.png" alt="svg" />,
  <img src="../../../AR/letter.png" alt="svg" />,
]

function Slider() {
  // Индекс текущего слайда
  const [activeIndex, setActiveIndex] = useState(0);

  // Хук Effect
  // useEffect(() => {
  //   // Запускаем интервал
  //   const interval = setInterval(() => {
  //     // Меняем состояние
  //     setActiveIndex((current) => {
  //       // Вычисляем индекс следующего слайда, который должен вывестись
  //       const res = current === img.length - 1 ? 0 : current + 1
  //       // Возвращаем индекс
  //       return res
  //     })
  //   }, 3000)
  //   // Выключаем интервал
  //   return () => clearInterval()
  // }, [])

  // Вычисляем индекс предыдущего слайда
  const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
  // Вычисляем индекс следующего слайда
  const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

  return (
    <>
      <div className="slider">
        <div className="slider_img slider_img_prev"
          key={prevImgIndex}>
          {img[prevImgIndex]}
        </div>
        <div className="slider_img"
          key={activeIndex}>
          {img[activeIndex]}
        </div>
        <div className="slider_img slider_img_next"
          key={nextImgIndex}>
          {img[nextImgIndex]}
        </div>
      </div>

      <button onClick={() => setActiveIndex(prevIndex => (prevIndex + 1) % img.length)}>click</button>
    </>
  )
}

export default Slider;
