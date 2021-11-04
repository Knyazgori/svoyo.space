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
        zIndex: 6
      }}
    >
      <ThreeWordsAboutRussia />
      <YouTube />
      <About />
    </div>
  );
}

export default FirstRow;
