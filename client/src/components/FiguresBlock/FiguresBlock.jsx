import React from "react";

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
      <FirstRow />
      <SecondRow />
      <ThirdRow />
    </div>
  );
}
export default FiguresBlock;
