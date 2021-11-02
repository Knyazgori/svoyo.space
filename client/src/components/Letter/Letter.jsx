import React from 'react';

import Footer from '../Footer/Footer';
import LetterForm from '../LetterForm/LetterForm';
import LetterHeader from '../LetterHeader/LetterHeader';

import styles from './Letter.module.css'

function Letter(props) {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <LetterHeader />
          <LetterForm />
        </div>
        <Footer />
      </div>
    </div>    
  );
}

export default Letter;
