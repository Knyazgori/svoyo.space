// 3D
import ReactThreeFbxViewer from 'react-three-fbx-viewer'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from "@react-three/drei"

import styles from './AR3D.module.css'

function Box() {
  return (
    <mesh>
      <boxBufferGeometry url='./AR/russia.fbx' attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  )
}

function AR3D(props) {
  return (
    <>
      <div className={styles.ar_place}>
        <div className={styles.ar_place_descr}>
          <p>ЗЕМЛЯ КРУГЛАЯ — НА КРАЯХ<br />ВСТРЕТИМСЯ, КРУТИ-ВЕРТИ!</p>
        </div>
        <div className={styles.ar_place_model}> 
          <Canvas>
            <OrbitControls />
            <Stars />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 15, 10]} angle={0.3} />
            <Box />
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default AR3D;
{/* <ReactThreeFbxViewer cameraPosition={{
            x:150,
            y:300,
            z:350,
          }} url='./AR/russia.fbx' backgroundColor='#dcdcdc' near={3} far={1000} />  */}
