import React from 'react';
import styles from './Header.module.css'

function LogoBlock(props) {
  return (
    <div className={styles.header}>
      <img src='../../../logo/svoyo.svg' className={styles.logo}/>
      <p className={styles.logo_descr}>Мы — содружество людей, которые делают хорошие вещи<br /> о России и для России, потому что ее любят</p>
    </div>  
  );
}

export default LogoBlock;
