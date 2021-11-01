import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import styles from './Footer.module.css'

function Footer(props) {
  return (
    <>
      <div className={styles.footer}>
          <div className={styles.left}>
            <div className={styles.footer_logo}>
              <p className={styles.footer_descr}>своё — это проект про русскую душу</p>
              <Link to="#" className={styles.links}><p className={styles.mini_logo}>ё</p></Link>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.links}>
              <li>tg</li>
              <li>inst</li>
              <li>сайт</li>
              <li>почта</li>
              <li>ютуб</li>
            </div>
            <div className={styles.email}>
              <a target="_blank" rel="noreferrer" className={styles.links} href="https://t.me/make_russia_great_again"><li>@make_russia_great_again</li></a>
              <a target="_blank" rel="noreferrer" className={styles.links} href="https://www.instagram.com/svoyo.space/"><li>@svoyo.space</li></a>
              <a target="_blank" rel="noreferrer" className={styles.links} href="https://svoyo.space/"><li>svoyo.space</li></a>
              <li>svoyo.space@gmail.com</li>
            </div>
            <div className={styles.people}>
              <li>Всему голова: Сергей Клещев</li>
              <li>Зачинатели всея своё: Адель Галимова, Катя Курмышкина и Маша Козловцева</li>
              <li>Художественных дел мастерицы: Адель, Катя и Маша</li>
              <li>Компьютерных дел мaстера: Максим Антонов, Игорь Князев</li>
              <li>Буквы: Arial и Arial Narrow</li>
            </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
