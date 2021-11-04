
import React from 'react';
import GameField from '../GameField/GameField.jsx';
import LinkLayer from '../LinkLayer/LinkLayer.jsx';


import styles from "./FiguresBlock.module.css";
import FirstRow from "./FirstRow/FirstRow";
import SecondRow from "./SecondRow/SecondRow";
import ThirdRow from "./ThirdRow/ThirdRow";

function FiguresBlock(props) {
  document.addEventListener("click", (event) => {
    console.log(event.target.childNodes);
  });

  return (
    <div className={styles.main_figures_block}>
      {/* <LinkLayer /> */}
      <FirstRow />
      <SecondRow />
      <ThirdRow />
      <GameField />
    </div>
  );
}
export default FiguresBlock;
