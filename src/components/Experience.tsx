import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Car } from "./Car";

export const Experience = () => {
  const map = useTexture("textures/realistic_urban_city.jpg");

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <OrbitControls />
      <Car />
      <mesh>
        <sphereGeometry args={[10, 64, 64]} />
        <meshStandardMaterial map={map} side={THREE.BackSide} />
      </mesh>
    </>
  );
};
