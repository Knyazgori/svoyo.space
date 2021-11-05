// 3D
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from "@react-three/drei"
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import styles from './AR3D.module.css'

// function Box() {
//   return (
//     <mesh>
//       <boxBufferGeometry url='./AR/russia.fbx' attach="geometry" />
//       <meshLambertMaterial attach="material" color="hotpink" />
//     </mesh>
//   )
// }

function Scene() {
  const gltf = useLoader(GLTFLoader, '/russiaa.gltf')
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
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
            <Suspense fallback={null}>
              <Scene />
              <OrbitControls />
              {/* <cameraPosition /> */}
              {/* <Environment preset="sunset" background /> */}
              <spotLight position={[10, 15, 10]} angle={0.3} />
              <ambientLight intensity={0.5} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default AR3D;
