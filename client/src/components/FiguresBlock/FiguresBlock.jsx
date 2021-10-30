import React from 'react';

import styles from './FiguresBlock.module.css'

function FiguresBlock(props) {
  return (
    <div className={styles.main_figures_block}>
      <div style={{display: 'flex', fleDirection: 'row', justifyContent: 'space-between', width: '731px', position: 'absolute', bottom: '0'}}>
        <img style={{alignSelf: 'flex-end', zIndex: '3' }} src="../../../fig/3.svg" alt="image format png" />
        <img style={{zIndex: '2', position: 'absolute', right: '-1px', top: '-189px'}} src="../../../fig/2.svg" alt="image format png" />
      </div>
      <div style={{display: 'flex', fleDirection: 'row', justifyContent: 'space-between', width: '1476px', position: 'absolute', bottom: '-200px'}}>
        <img style={{zIndex: '4'}} src="../../../fig/4.svg" alt="image format png" />
        <img style={{zIndex: '1'}} src="../../../fig/1.1.svg" alt="image format png" />
        <img style={{zIndex: '1'}} src="../../../fig/1.2.2.2.svg" alt="image format png" />
      </div>
      <div style={{display: 'flex', fleDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: '-400px'}}>
        <img style={{ alignSelf: 'flex-end', zIndex: '-1', marginRight: '20px'}} src="../../../fig/1-1.svg" alt="image format png" />
        <img style={{zIndex: '-1', marginRight: '20px'}} src="../../../fig/1-2.svg" alt="image format png" />
        <img  style={{zIndex: '-3'}} src="../../../fig/-3.svg" alt="image format png" />
      </div>
    </div>
  );
}
export default FiguresBlock;
