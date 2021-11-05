import React from 'react';

import styles from './PhotoBlock.module.css'

function PhotoBlock(props) {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <>
    <div className={styles.peopleBlock}>
      <div className={styles.card}>
        <div className={styles.card_img}><img style={{  width: '353px', height: '351px' }} src="../../../crew/s.jpg" alt="" /></div>
        <p className={styles.card_text}>Сережа Клещев<br />Всему голова</p>
      </div>
      <div className={styles.card}>
        <div className={styles.card_img}><img style={{  width: '353px', height: '351px' }} src="../../../crew/a.jpg" alt="" /></div>
        <p className={styles.card_text}>Адель Галимова<br />зачинатель всея своё</p>
      </div>
      <div className={styles.card}>
        <div className={styles.card_img}><img style={{  width: '353px', height: '351px' }} src="../../../crew/k.jpg" alt="" /></div>
        <p className={styles.card_text}>Катя Курмышкина<br />зачинатель всея своё</p>
      </div>
      <div className={styles.card}>
        <div className={styles.card_img}><img style={{  width: '353px', height: '351px' }} src="../../../crew/m.jpg" alt="" /></div>
        <p className={styles.card_text}>Маша Козловцева<br />зачинатель всея своё</p>
      </div>
    </div>
    <div className={styles.big_card}>
      <div className={styles.big_card_img}><img style={{  width: '1855px', height: '918px' }} src="../../../crew/56_crew.jpg" alt="" /></div>
      <div className={styles.block_text}>
        <p className={styles.big_card_text}>Содружество своё!</p>
      </div>
    </div>
    </>
  );
}

export default PhotoBlock;
