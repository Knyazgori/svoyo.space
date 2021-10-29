import React from 'react';

import { Provider } from 'react-redux';
import { store } from './redux/store'

import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import Footer from './components/Footer/Footer';
import styles from './components/TetrisNav/TetrisNav.module.css'

ReactDOM.render(
  <Provider store={ store }>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <App />
      </div>
      <Footer />
    </div>
  </Provider>,
  document.getElementById('root')
);

