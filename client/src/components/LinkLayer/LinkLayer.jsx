import style from './LinkLayer.module.css'

import { Link } from 'react-router-dom'

function LinkLayer(props) {
  return (
    <div className={style.link_layer}>
      <Link to="/about">
        <div className={style.link_about}></div>
      </Link>
    </div>
  );
}

export default LinkLayer;
