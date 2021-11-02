import React from 'react';

import AboutHeader from '../AboutHeader/AboutHeader'
import Footer from '../Footer/Footer';

import styles from '../About/About.module.css'
import PhotoBlock from '../PhotoBlock/PhotoBlock';


function About(props) {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <AboutHeader />
          <PhotoBlock />
        </div>
        <Footer />
      </div>
    </div>    
  );
}

export default About;
