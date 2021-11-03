import React, { useRef, useState } from 'react';

import Fade from 'react-reveal/Fade';
import LetterFormAnimation from '../LetterFormAnimation/LetterFormAnimation';

import styles from './LetterForm.module.css'



function LetterForm(props) {

  const [state, setState] = useState({ show: true })


  return (
    <>
      <LetterFormAnimation />
    </>
  );
}

export default LetterForm;
