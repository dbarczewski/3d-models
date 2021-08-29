import { Html, OrbitControls, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Suspense, useState } from "react";
import Modal from "./Modal";
import Model from "./Model";
import Upload from "./UploadButton";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function App() {
  const handleUpload = (blob: string) => {
    setFile(() => blob);
    if (control) {
      (control.current as any).reset();
    }
  };

  const control = useRef(null);
  const [file, setFile] = useState<string>("./Fox.glb");
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="w-screen h-screen flex">
      <div className="flex-1">
        <Canvas camera={{ position: [150, 15, 150] }}>
          <ambientLight intensity={1} />
          <Suspense fallback={<Loader />}>
            <Model gltf={file} key={file} />
            <OrbitControls ref={control} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute top-2 left-2">
        <Upload callback={handleUpload} />
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;
