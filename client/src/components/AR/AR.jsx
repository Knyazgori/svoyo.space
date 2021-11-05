import React from 'react';

import AR3D2 from '../AR3D2/AR3D2.jsx';
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
            <AR3D2 /> 
            <ARGallery />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AR;
