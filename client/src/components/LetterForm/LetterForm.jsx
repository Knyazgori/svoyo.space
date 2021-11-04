import React, { useRef, useState, useEffect } from 'react';

import Fade from 'react-reveal/Fade';
import LetterFormAnimation from '../LetterFormAnimation/LetterFormAnimation';

import styles from './LetterForm.module.css'



function LetterForm(props) {
  useEffect(() => {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }, []);

  const user = useRef()
  const nickname = useRef()
  const city = useRef()
  const country = useRef()

  const first = useRef()
  const second = useRef()
  const third = useRef()

  const [state, setState] = useState({ show: true })
  const [stateSecond, setStateSecond] = useState({ showSecond: false })


  const handleClick = () => {
    setState({ show: !state.show });
    setStateSecond({ showSecond: !stateSecond.showSecond });
  }

  const handlerSubmit = async (event) => {
    document.body.scrollTop = document.documentElement.scrollTop  = document.documentElement.scrollHeight
    event.preventDefault();

    const response = fetch('http://localhost:5000/words', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ first: first.current.value, second: second.current.value, third: third.current.value, user: user.current.value, nickname: nickname.current.value, city: city.current.value, country: country.current.value }),
    })
    const data = await response
    console.log(data.ok);

    setTimeout(() => window.location.href = '/', 1500);

  }

  return (
    <>
      <Fade left>
        <Fade left opposite when={state.show}>
          <div className={styles.letter_place}>
            <LetterFormAnimation />
            <form className={styles.save} onSubmit={handlerSubmit}>
              <input name='user' ref={user} className={styles.name} placeholder='имя' autofocus="off" type="string" />
              <input name='nickname' ref={nickname} className={styles.nickname} placeholder='ник в инсте' autofocus="off" type="string" />
              <input name='country' ref={country} className={styles.country} placeholder='страна' autofocus="off" type="string" />
              <input name='city' ref={city} className={styles.city} placeholder='город' autofocus="off" type="string" />
              <input name='first' ref={first} className={styles.first} autofocus="off" type="text" />
              <input name='second' ref={second} className={styles.second} autofocus="off" type="text" />
              <input name='third' ref={third} className={styles.third} autofocus="off" type="text" />
              <button className={styles.form_button} onClick={handleClick}>
                <svg width="238" height="59" viewBox="0 0 238 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.24121 22.5615C1.24121 18.2669 2.13917 15.0265 3.93508 12.8401C5.7466 10.6538 8.03444 9.56065 10.7986 9.56065C13.5159 9.56065 15.7881 10.6538 17.6152 12.8401C19.4424 15.0265 20.3559 18.181 20.3559 22.3038C20.3559 26.7702 19.458 30.0965 17.6621 32.2828C15.8662 34.4692 13.5783 35.5623 10.7986 35.5623C8.06567 35.5623 5.78565 34.4692 3.9585 32.2828C2.14697 30.0809 1.24121 26.8404 1.24121 22.5615ZM4.77837 22.5615C4.77837 25.7785 5.364 28.1757 6.53524 29.7529C7.70649 31.3146 9.15884 32.0954 10.8923 32.0954C12.5164 32.0954 13.9063 31.3068 15.0619 29.7295C16.2332 28.1366 16.8188 25.7473 16.8188 22.5615C16.8188 19.3601 16.2332 16.9785 15.0619 15.4169C13.8907 13.8396 12.4383 13.051 10.7049 13.051C9.06514 13.051 7.66745 13.8396 6.51182 15.4169C5.35619 16.9942 4.77837 19.3757 4.77837 22.5615Z" fill="#FF0000" />
                  <path d="M22.6047 10.1229H39.1896V13.6132H32.6306V35.0001H29.1637V13.6132H22.6047V10.1229Z" fill="#FF0000" />
                  <path d="M42.5394 10.1229H58.6323V35.0001H55.1888V13.6132H45.9828V35.0001H42.5394V10.1229Z" fill="#FF0000" />
                  <path d="M63.7623 44.5341V10.1229H66.9247V13.3555C67.7055 12.0125 68.5723 11.0442 69.5249 10.4508C70.4775 9.85737 71.5706 9.56065 72.8044 9.56065C74.4129 9.56065 75.8652 10.037 77.1614 10.9896C78.4576 11.9422 79.4961 13.3945 80.2769 15.3466C81.0734 17.2831 81.4716 19.6178 81.4716 22.3507C81.4716 26.5828 80.5814 29.8466 78.8011 32.1423C77.0365 34.4223 74.9594 35.5623 72.5701 35.5623C71.5082 35.5623 70.5165 35.289 69.5951 34.7424C68.6738 34.1959 67.8773 33.4228 67.2058 32.4234V44.5341H63.7623ZM66.8779 22.702C66.8779 25.9191 67.4166 28.2928 68.4942 29.8232C69.5717 31.338 70.8757 32.0954 72.4061 32.0954C73.8741 32.0954 75.1625 31.3068 76.2712 29.7295C77.38 28.1522 77.9344 25.716 77.9344 22.4209C77.9344 19.1727 77.3956 16.7677 76.3181 15.2061C75.2406 13.6444 73.9288 12.8636 72.3827 12.8636C70.9928 12.8636 69.7279 13.7069 68.5879 15.3935C67.4479 17.0644 66.8779 19.5006 66.8779 22.702Z" fill="#FF0000" />
                  <path d="M98.9466 31.9315C97.7909 33.1339 96.5885 34.0397 95.3391 34.6487C94.0898 35.2578 92.7936 35.5623 91.4506 35.5623C89.3267 35.5623 87.6323 34.922 86.3674 33.6415C85.1024 32.3609 84.47 30.6353 84.47 28.4646C84.47 27.0278 84.7667 25.7551 85.3601 24.6463C85.9535 23.5375 86.7656 22.6708 87.7963 22.0461C88.827 21.4215 90.3887 20.9608 92.4813 20.6641C95.2923 20.258 97.3537 19.7739 98.6655 19.2117L98.6889 18.1342C98.6889 16.432 98.3844 15.2373 97.7753 14.5502C96.9164 13.5507 95.5968 13.051 93.8165 13.051C92.208 13.051 91.0055 13.3867 90.2091 14.0582C89.4126 14.7141 88.827 15.9557 88.4522 17.7828L85.0556 17.2206C85.5397 14.5502 86.5157 12.6059 87.9837 11.3878C89.4673 10.1697 91.5833 9.56065 94.3319 9.56065C96.4713 9.56065 98.1501 9.96668 99.3682 10.7787C100.586 11.5752 101.352 12.5669 101.664 13.7537C101.992 14.9406 102.156 16.674 102.156 18.954V24.576C102.156 28.5114 102.226 30.9945 102.367 32.0252C102.523 33.0402 102.819 34.0319 103.257 35.0001H99.6493C99.2901 34.1412 99.0559 33.1183 98.9466 31.9315ZM98.6655 22.5146C97.4005 23.1393 95.5187 23.6703 93.0201 24.1075C91.5677 24.3574 90.5526 24.6463 89.9748 24.9743C89.397 25.2866 88.9441 25.7395 88.6162 26.3329C88.3038 26.9107 88.1477 27.5822 88.1477 28.3474C88.1477 29.5343 88.5147 30.4869 89.2486 31.2053C89.9826 31.908 90.9977 32.2594 92.2939 32.2594C93.5276 32.2594 94.6442 31.9393 95.6437 31.299C96.6587 30.6587 97.4161 29.8076 97.9159 28.7457C98.4156 27.6681 98.6655 26.1065 98.6655 24.0607V22.5146Z" fill="#FF0000" />
                  <path d="M107.59 10.1229H115.555C117.366 10.1229 118.748 10.2946 119.701 10.6382C120.669 10.9818 121.528 11.6923 122.278 12.7699C123.043 13.8318 123.426 15.1514 123.426 16.7287C123.426 19.1024 122.614 20.8749 120.989 22.0461C123.223 23.0456 124.339 25.0445 124.339 28.0429C124.339 29.9638 123.769 31.6035 122.629 32.9622C121.489 34.3208 119.545 35.0001 116.796 35.0001H107.59V10.1229ZM111.034 20.5938H114.735C116.203 20.5938 117.21 20.5001 117.757 20.3127C118.319 20.1253 118.819 19.7505 119.256 19.1883C119.693 18.6105 119.912 17.9077 119.912 17.0801C119.912 15.7683 119.521 14.8625 118.741 14.3628C117.975 13.863 116.679 13.6132 114.852 13.6132H111.034V20.5938ZM111.034 31.5332H115.602C117.554 31.5332 118.905 31.2365 119.654 30.6431C120.404 30.034 120.779 29.097 120.779 27.8321C120.779 26.4891 120.38 25.5286 119.584 24.9508C118.803 24.3574 117.359 24.0607 115.25 24.0607H111.034V31.5332Z" fill="#FF0000" />
                  <path d="M128.485 10.1229H131.929V29.097L141.533 10.1229H145.258V35.0001H141.814V16.1431L132.21 35.0001H128.485V10.1229Z" fill="#FF0000" />
                  <path d="M148.631 10.1229H165.216V13.6132H158.657V35.0001H155.19V13.6132H148.631V10.1229Z" fill="#FF0000" />
                  <path d="M168.472 10.1229H171.915V19.8442H176.319C179.474 19.8442 181.746 20.586 183.136 22.0696C184.526 23.5531 185.221 25.349 185.221 27.4573C185.221 29.4562 184.588 31.2131 183.323 32.7279C182.074 34.2427 180.005 35.0001 177.116 35.0001H168.472V10.1229ZM171.915 31.5332H175.546C178.185 31.5332 179.864 31.1116 180.582 30.2683C181.301 29.425 181.66 28.4958 181.66 27.4807C181.66 26.1533 181.246 25.1304 180.418 24.4121C179.591 23.6937 178.123 23.3345 176.015 23.3345H171.915V31.5332Z" fill="#FF0000" />
                  <path d="M190.983 26.4734L189.929 8.27228V0.65918H194.216V8.27228L193.232 26.4734H190.983ZM190.093 35.0001V30.198H194.052V35.0001H190.093Z" fill="#FF0000" />
                  <path d="M237.241 51L223.915 43.3061V58.6939L237.241 51ZM0 52.3326H225.248V49.6674H0V52.3326Z" fill="#FF0000" />
                </svg>
              </button>
            </form>
          </div>
        </Fade>

      </Fade>
    </>
  );
}

export default LetterForm;
