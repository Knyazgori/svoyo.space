// 3D
import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from "@react-three/drei"
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import styles from './Example.module.css'

// function Box() {
//   return (
//     <mesh>
//       <boxBufferGeometry url='./AR/russia.fbx' attach="geometry" />
//       <meshLambertMaterial attach="material" color="hotpink" />
//     </mesh>
//   )
// }

function Scene() {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  const gltf = useLoader(GLTFLoader, '/new.gltf')


  return (
    
      <primitive fallback={null} ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)} object={gltf.scene} />
  )
}

function Example(props) {
  return (
    <>
      <div className={styles.ar_place}>
        <div className={styles.ar_place_descr}>
          <p>ЗЕМЛЯ КРУГЛАЯ — НА КРАЯХ<br />ВСТРЕТИМСЯ, КРУТИ-ВЕРТИ!</p>
        </div>
        <div className={styles.ar_place_model}>
          <Canvas>
            <Suspense fallback={null}>
            <ambientLight />
              <Scene />
              <OrbitControls />
              {/* <cameraPosition /> */}
              {/* <Environment preset="sunset" background /> */}
              <spotLight position={[10, 15, 10]} angle={0.3} />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Scene position={[-1, 0, 0]} />
              <Scene position={[1, 0, 0]} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default Example;
