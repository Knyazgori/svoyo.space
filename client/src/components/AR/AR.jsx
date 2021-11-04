import React from 'react';

import AR3D from '../AR3D/AR3D';
import ARGallery from '../ARGallery/ARGallery';
import ARHeader from '../ARHeader/ARHeader';
import Footer from '../Footer/Footer';

import styles from './AR.module.css'

function AR(props) {
  return (
    <div>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <ARHeader />
            <AR3D /> 
            <ARGallery />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AR;
