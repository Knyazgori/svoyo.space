import React from 'react';
import styles from './HeaderAbout.module.css'

function LogoBlock(props) {
  return (
    <div className={styles.header_about}>
      <a href="/"><img src='../../../logo/svoyo.svg' className={styles.logo_about} /></a>
      <div>
        <div className={styles.title}>
          <p className={styles.logo_about_title}>о нас</p>
          <p className={styles.logo_about_descr}>«своё» — это проект о русском дизайн–мышлении,<br />художественном языке, культурном коде или, обобщая,<br />о русской душе. Мы делимся работами отечественных<br />дизайнеров и художников, а ещё показываем<br />собственные проекты, в которых исследуем своё<br />наследие, свою современность, свою данность и просто<br />всё своё.</p>
        </div>
      </div>
    </div>
  );
}

export default LogoBlock;
