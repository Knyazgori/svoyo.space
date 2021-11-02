import React from 'react';

function Right({ moveRight }) {
  return (
    <svg onClick={ moveRight } width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="80.7949" y="80.7949" width="79.4599" height="79.4599" transform="rotate(-180 80.7949 80.7949)" fill="#D2D2D2" stroke="white" stroke-width="2.67" />
      <path d="M29.8651 60.975L59.7305 41.0648L29.8651 21.1545" stroke="white" stroke-width="2.67" stroke-linecap="square" />
    </svg>
  );
}

export default Right;
