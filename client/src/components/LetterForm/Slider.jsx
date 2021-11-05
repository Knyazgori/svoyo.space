// import React, { useState, useEffect } from "react"

// import "./Slider.css"

// const img = [
//   <img src="../../../AR/letter.png" alt="svg" />,
//   <img src="../../../AR/letter.png" alt="svg" />,
// ]

// function Slider() {
  
//   const [activeIndex, setActiveIndex] = useState(0);


//   const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
//   const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

//   return (
//     <>
//       <div className="slider">
//         <div className="slider_img slider_img_prev"
//           key={prevImgIndex}>
//           {img[prevImgIndex]}
//         </div>
//         <div className="slider_img"
//           key={activeIndex}>
//           {img[activeIndex]}
//         </div>
//         <div className="slider_img slider_img_next"
//           key={nextImgIndex}>
//           {img[nextImgIndex]}
//         </div>
//       </div>

//       <button onClick={() => setActiveIndex(prevIndex => (prevIndex + 1) % img.length)}>click</button>
//     </>
//   )
// }

// export default Slider;
