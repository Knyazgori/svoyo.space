import React from 'react';
import FiguresBlock from '../FiguresBlock/FiguresBlock';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import styles from './Tetris.module.css'




function TetrisNav(props) {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Header />
        </div>
      <FiguresBlock />
      <Footer />
      </div>
    </div>    
  );
}

export default TetrisNav;
