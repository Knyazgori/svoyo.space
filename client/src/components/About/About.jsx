import React from 'react';

import HeaderAbout from '../HeaderAbout/HeaderAbout'
import Footer from '../Footer/Footer';

import styles from '../About/About.module.css'
import PhotoBlock from '../PhotoBlock/PhotoBlock';


function About(props) {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <HeaderAbout />
          <PhotoBlock />
        </div>
        <Footer />
      </div>
    </div>    
  );
}

export default About;
