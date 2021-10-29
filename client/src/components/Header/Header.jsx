import React from 'react';
import styles from './Header.module.css'

function LogoBlock(props) {
  return (
    <div>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.logo}>своё</h1>
          <p className={styles.logo_descr}>Мы — содружество людей, которые делают хорошие<br />вещи о России и для России, потому что ее любят</p>
        </div>
      </div>
    </div>
  );
}

export default LogoBlock;
