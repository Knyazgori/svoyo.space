import React from 'react';

import Footer from '../Footer/Footer';
import PassportForm from '../PassportForm/PassportForm';
import PassportHeader from '../PassportHeader/PassportHeader';

import styles from './Passport.module.css'

function Passport(props) {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <PassportHeader />
          <PassportForm />
        </div>
        <Footer />
      </div>
    </div>    
  );
}

export default Passport;
