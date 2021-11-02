import React from 'react';

import styles from './PassportHeader.module.css'

function PassportHeader(props) {
  return (
    <div className={styles.passport_header}>
      <a href="/"><img src='../../../logo/svoyo.svg' className={styles.passport_logo} /></a>
      <div className={styles.passport_header_block}>
        <h2 className={styles.passport_header_block_title}>Название мероприятия</h2>
        <p className={styles.passport_header_block_descr_p1}>Описание мероприятия, вот такого вот крутого мероприятия там очень круто будет, прям классно, будете в шоке все, просто жесть, невероятно, это так круто, умереть можно, невероятно, невероятно, обворажительно, просто жесть полная.</p>
      </div>
    </div>
  );
}

export default PassportHeader;
