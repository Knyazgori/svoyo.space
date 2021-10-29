import React from 'react';
import styles from './Footer.module.css'

function Footer(props) {
  return (
    <>
      <div className="container">
        <div className={styles.footer}>
            <div className={styles.left}>
              <div className={styles.footer_logo}>
                <p className={styles.footer_descr}>своё — это проект про русскую душу</p>
                <p className={styles.mini_logo}>ё</p>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.links}>
                <li>inst</li>
                <li>tg</li>
                <li>сайт</li>
                <li>почта</li>
                <li>ютуб</li>
              </div>
              <div className={styles.email}>
                <li>@make_russia_great_again</li>
                <li>@svoyo.space</li>
                <li>svoyo.space</li>
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
      </div>
    </>
  );
}

export default Footer;