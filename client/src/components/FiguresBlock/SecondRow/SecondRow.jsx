import React from 'react';
import { Link } from 'react-router-dom';
import Archive from './Blocks/Archive';
import Instagram from './Blocks/Instagram';
import Telegram from './Blocks/Telegram';

function SecondRow(props) {
  return (
    <div
      style={{
        display: "flex",
        fleDirection: "row",
        justifyContent: "space-between",
        width: "1479px",
        position: "absolute",
        bottom: "-212px",
        zIndex: 7,
        clipPath: "polygon(0px 0px, 1303px 0px, 1303px 182px, 1479px 182px, 1479px 356px, 1125px 357px, 1123px 173px, 927px 171px, 925px 356px, 0px 356px)"
      }}
    >
      <Archive />
      <Instagram />
      <Telegram />
    </div>
  );
}

export default SecondRow;
