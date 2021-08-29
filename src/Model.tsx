import { useGLTF } from "@react-three/drei";

function Model({ gltf }: { gltf: string }) {
  const { scene } = useGLTF(gltf, true);
  return <primitive object={scene} />;
}

export default Model;
