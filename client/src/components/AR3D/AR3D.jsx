import React from 'react';

import styles from './AR3D.module.css'

function AR3D(props) {
  return (
    <>
      <div className={styles.ar_place}>
        <div className={styles.ar_place_descr}>
          <p>ЗЕМЛЯ КРУГЛАЯ — НА КРАЯХ<br />ВСТРЕТИМСЯ, КРУТИ-ВЕРТИ!</p>
        </div>
        <div className={styles.ar_place_model}></div>
      </div>
    </>
  );
}

export default AR3D;
