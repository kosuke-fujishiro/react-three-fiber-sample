import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Car } from "./Car";
import { useThree } from "@react-three/fiber";

export const Experience = ({
  defaultCameraPosition,
}: {
  defaultCameraPosition: [number, number, number];
}) => {
  const map = useTexture("textures/realistic_urban_city.jpg");
  const { camera } = useThree();

  const resetCameraPosition = () => {
    camera.position.set(...defaultCameraPosition);
    camera.lookAt(0, 0, 0);
  };

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <OrbitControls />
      <Car />
      <mesh onDoubleClick={resetCameraPosition} position={[0, 0, 0]}>
        <sphereGeometry args={[10, 64, 64]} />
        <meshStandardMaterial map={map} side={THREE.BackSide} />
      </mesh>
    </>
  );
};
