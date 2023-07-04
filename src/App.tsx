import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

const defaultCameraPosition: [number, number, number] = [0, 0, 10];

function App() {
  return (
    <Canvas shadows camera={{ position: defaultCameraPosition, fov: 30 }}>
      <Experience defaultCameraPosition={defaultCameraPosition} />
    </Canvas>
  );
}

export default App;
