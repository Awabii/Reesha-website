import * as React from 'react';
import { Canvas } from "@react-three/fiber";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './sectionOne.css'
import ipad from '../../images/ipad.png'
import { useGLTF, OrbitControls, Stats, useAnimations } from "@react-three/drei";
import { Suspense } from 'react'
import { useEffect, useState } from 'react';

function LoadingFallback() {
    return null; // Or you could return a loading spinner/placeholder
}

function HeroModel({ loopState, setAnimationDuration }) {
    const [modelError, setModelError] = useState(false);

    const gltf = useGLTF(`${process.env.PUBLIC_URL}/models/Reesha-Exit.glb`, undefined, (error) => {
        console.error('Error loading model:', error);
        setModelError(true);
    });

    const { actions, names } = useAnimations(gltf.animations, gltf.scene);
  
    useEffect(() => {
        if (modelError || !actions || names.length === 0) return;

        // Get the first animation
        const animation = actions[names[0]];
        if (animation) {
            setAnimationDuration(gltf.animations[0].duration);
            animation.reset().play();
            animation.setLoop(true);
        }
    }, [actions, names, setAnimationDuration, modelError, gltf.animations]);

    if (modelError) {
        return null;
    }
  
    return (
        <primitive
            object={gltf.scene}
            scale={[35, 35, 35]}
            position={[0, -1, 0]}
        />
    );
}

const SectionOne = () => {
    const [animationDuration, setAnimationDuration] = useState(5);

    return(
        <Box className="background">
            <Box>
                <Typography 
                    variant="h2" 
                    sx={{
                        background: 'linear-gradient(90deg, #ff5e3a, #ff9900)', 
                        WebkitBackgroundClip: 'text', 
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 400,
                        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', 
                        textAlign: { xs: 'center', md: 'right' },
                        marginRight: { xs: 0, md: '50%' },
                        paddingTop: 10,
                    }}
                    gutterBottom>
                    متعة ومرح          
                    <br />
                    مع التعليم الالكترني         
                </Typography>

                <Typography
                    variant="h5"
                    sx={{
                        color: '#fff',
                        fontWeight: 400,
                        textAlign: { xs: 'center', md: 'right' },
                        paddingRight: { xs: 0, md: '50%' },
                        fontSize: { xs: '1rem', md: '1.5rem' },                
                    }}>
                    تعلم بمرح ومتعة مع تطبيق ريشة الالكتروني للمراحل الدراسية من 
                    <br />
                    الصف الأول الى الصف الخامس الابتدائي
                </Typography>
            </Box>

            <Box sx={{display: { xs: 'none', md: 'flex' }}}>
                <img
                    src={ipad}
                    alt="Avatar"
                    style={{
                        marginLeft: '10%',
                        marginRight: '20%',
                        marginTop: '2%',
                        zIndex: 1
                    }}
                />
                <Canvas 
                    style={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        zIndex: 2,
                        width: '800px',
                        height: '800px'
                    }}
                    camera={{ position: [0, 2, 5], fov: 50 }}>
                    <Suspense fallback={<LoadingFallback />}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[0, 5, 5]} intensity={1} />
                        <HeroModel setAnimationDuration={setAnimationDuration} />
                        <OrbitControls enableZoom={false} enableRotate={true} />
                    </Suspense>
                </Canvas>
            </Box>

            <Box sx={{display: { xs: 'flex', md: 'none' }, flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <img
                    src={ipad}
                    alt="Avatar"
                    style={{
                        marginTop: "2%",
                        maxWidth: '80%'
                    }}
                />
                <Canvas 
                    style={{
                        width: '300px',
                        height: '300px',
                        marginTop: '-20%'
                    }}
                    camera={{ position: [0, 2, 5], fov: 50 }}>
                    <Suspense fallback={<LoadingFallback />}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[0, 5, 5]} intensity={1} />
                        <HeroModel setAnimationDuration={setAnimationDuration} />
                        <OrbitControls enableZoom={false} enableRotate={true} />
                    </Suspense>
                </Canvas>
            </Box>
        </Box>
    );
};

export default SectionOne;