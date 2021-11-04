import React from "react";
import { Link } from 'react-router-dom';
import About from "./Blocks/About";
import ThreeWordsAboutRussia from "./Blocks/ThreeWordsAboutRussia";
import YouTube from "./Blocks/YouTube";
import './FirstRow.css'

function FirstRow(props) {
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
      }}
    >
      <ThreeWordsAboutRussia />
      <YouTube />
      <About />
    </div>
  );
}

export default FirstRow;
