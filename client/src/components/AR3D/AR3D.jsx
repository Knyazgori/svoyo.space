import ReactThreeFbxViewer from 'react-three-fbx-viewer'

import styles from './AR3D.module.css'

function AR3D(props) {
  return (
    <>
      <div className={styles.ar_place}>
        <div className={styles.ar_place_descr}>
          <p>ЗЕМЛЯ КРУГЛАЯ — НА КРАЯХ<br />ВСТРЕТИМСЯ, КРУТИ-ВЕРТИ!</p>
        </div>
        <ReactThreeFbxViewer cameraPosition={{
          x: 20,
          y: 100, // дальность
          z: 20
        }} url='./AR/russia.fbx' backgroundColor='#dcdcdc' near={3} far={1000} />
      </div>
    </>
  );
}

export default AR3D;
