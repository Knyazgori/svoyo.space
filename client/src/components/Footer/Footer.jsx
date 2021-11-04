import React from 'react';

import styles from './Footer.module.css'

function Footer(props) {
  return (
    <>
      <div className={styles.footer}>
          <div className={styles.left}>
            <div className={styles.footer_logo}>
              <p className={styles.footer_descr}>своё - это проект про русскую душу</p>
              <p className={styles.mini_logo}>ё</p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.links}>
              <li className={styles.linkss}>tg</li>
              <li className={styles.linkss}>inst</li>
              <li className={styles.linkss}>сайт</li>
              <li className={styles.linkss}>почта</li>
              <li className={styles.linkss}>ютуб</li>
            </div>
            <div className={styles.email}>
              <a target="_blank" rel="noreferrer" className={styles.linkss} href="https://t.me/make_russia_great_again"><li>@make_russia_great_again</li></a>
              <a target="_blank" rel="noreferrer" className={styles.linkss} href="https://www.instagram.com/svoyo.space/"><li>@svoyo.space</li></a>
              <a target="_blank" rel="noreferrer" className={styles.linkss} href="https://svoyo.space/"><li>svoyo.space</li></a>
              <li className={styles.linkss}>svoyo.space@gmail.com</li>
            </div>
            <div className={styles.people}>
              <li className={styles.linkss}>Всему голова: Сергей Клещев</li>
              <li className={styles.linkss}>Зачинатели всея своё: Адель Галимова, Катя Курмышкина и Маша Козловцева</li>
              <li className={styles.linkss}>Художественных дел мастерицы: Адель, Катя и Маша</li>
              <li className={styles.linkss}>Компьютерных дел мaстера: Максим Антонов, Игорь Князев</li>
              <li className={styles.linkss}>Буквы: Arial и Arial Narrow</li>
            </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
