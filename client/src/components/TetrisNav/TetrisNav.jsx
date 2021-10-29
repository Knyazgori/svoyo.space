import React from 'react';
import styles from './TetrisNav.module.css'

import '../../index.css';


function TetrisNav(props) {
  return (
    <>
      <div className="container">
        <div className={styles.headerBlock}>
          <h1 className={styles.logo}>своё</h1>
          <p className={styles.logo_descr}>Мы — содружество людей, которые делают хорошие<br/>вещи о России и для России, потому что ее любят</p>
        </div>
      </div>
    </> 
    
  );
}

export default TetrisNav;
