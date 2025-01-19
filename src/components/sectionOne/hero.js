import { useGLTF } from "@react-three/drei";

const HeroModel = () => {
  const gltf = useGLTF("/public/models/Reesh-Exit.glb");
  return <primitive object={gltf.scene} scale={0.5} />;
};

export default HeroModel;
