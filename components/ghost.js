import { Stats, OrbitControls, Circle } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function App() {
  const gltf = useLoader(GLTFLoader, "./models/boo_glb.glb");

  return (
    <Canvas camera={{ position: [-0.5, 1, 5] }}>
      <directionalLight position={[3.3, 1.0, 4.4]} />
      <primitive
        object={gltf.scene}
        position={[0, 2.5, 0]}
        children-0-castShadow
      />

      <Stats />
    </Canvas>
  );
}
