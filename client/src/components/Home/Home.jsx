import React, { Suspense } from 'react';
import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Stars } from "@react-three/drei"


// const Scene = () => {
//   const fbx = useLoader(FBXLoader, "./AR/russia.fbx");

//   return <primitive object={fbx} scale={0.005} />;
// };

function Home(props) {

  return (
    <>
      <Canvas>
        {/* <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense> */}
      </Canvas>
    </>

  );
}

export default Home;
