import React from 'react';

import styles from './ARHeader.module.css'


function ARHeader(props) {
  return (
    <div>
      <div className={styles.AR_header}>
        <a href="/"><img src='../../../logo/svoyo.svg' className={styles.AR_logo} /></a>
        <img src='../../../AR/block.svg' className={styles.AR_descr} />
      </div>
    </div>
  );
}

export default ARHeader;

