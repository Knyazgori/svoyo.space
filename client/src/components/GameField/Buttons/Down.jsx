import React from 'react';

function Down({ rotateRightHandler }) {
  return (
    <svg onClick={rotateRightHandler} width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.335" y="80.7949" width="79.4599" height="79.4599" transform="rotate(-90 1.335 80.7949)" fill="#D2D2D2" stroke="white" stroke-width="2.67" />
      <path d="M21.1543 29.8656L41.0646 59.731L60.9748 29.8656" stroke="white" stroke-width="2.67" stroke-linecap="square" />
    </svg>
  );
}

export default Down;
