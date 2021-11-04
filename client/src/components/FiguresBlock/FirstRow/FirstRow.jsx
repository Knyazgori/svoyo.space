import React from "react";
import { Link } from 'react-router-dom';
import About from "./Blocks/About";
import ThreeWordsAboutRussia from "./Blocks/ThreeWordsAboutRussia";
import YouTube from "./Blocks/YouTube";
import './FirstRow.css'

function FirstRow(props) {

  console.log('Тестовый лог перфект тетрис 1.7');
  return (
    <div
      // className={style.wrapper}
      id='wrapper'
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        bottom: "-400px",
        zIndex: 6,
        clipPath: 'polygon(0px 0px, 1485px 0px, 1486px 177px, 1686px 177px, 1687px 0px, 1857px 0px, 1857px 356px, 0px 356px)'
      }}
    >
      <ThreeWordsAboutRussia />
      <YouTube />
      <About />
    </div>
  );
}

export default FirstRow;
