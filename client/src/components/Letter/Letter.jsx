import React from 'react';

import Footer from '../Footer/Footer';
import HeaderLetter from '../HeaderLetter/HeaderLetter';
import LetterInput from '../LetterInput/LetterInput';

import styles from './Letter.module.css'

function Letter(props) {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <HeaderLetter />
          <LetterInput />
        </div>
        <Footer />
      </div>
    </div>    
  );
}

export default Letter;
