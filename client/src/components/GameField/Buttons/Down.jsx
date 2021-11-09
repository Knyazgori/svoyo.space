import React from 'react';

function Down({ rotateRightHandler }) {
  return (
    <svg onClick={rotateRightHandler} width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.44732" y="1.44732" width="79.1054" height="79.1054" fill="#D2D2D2" stroke="white" stroke-width="2.89465" />
      <path d="M65.3997 19.94L64.2417 34.5939L51.1604 27.8888" stroke="white" stroke-width="2.67" stroke-linecap="square" />
      <path d="M30.3363 54.7051L16.8431 48.8732L16.6494 63.5715" stroke="white" stroke-width="2.67" stroke-linecap="square" />
      <path d="M17.8398 32.68C19.5233 28.0845 22.5893 24.1148 26.6216 21.3097C30.6539 18.5046 35.4573 17 40.3799 17C45.3024 17 50.1058 18.5046 54.1381 21.3097C58.1704 24.1148 61.2364 28.0845 62.9199 32.68" stroke="white" stroke-width="2.67" stroke-miterlimit="10" />
      <path d="M62.9199 50.3199C61.2364 54.9155 58.1704 58.8852 54.1381 61.6902C50.1058 64.4953 45.3024 66 40.3799 66C35.4573 66 30.6539 64.4953 26.6216 61.6902C22.5893 58.8852 19.5233 54.9155 17.8398 50.3199" stroke="white" stroke-width="2.67" stroke-miterlimit="10" />
    </svg>

  );
}

export default Down;
