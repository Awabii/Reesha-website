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

    const entryGltf = useGLTF("/models/Reesha Entry Play All.glb", undefined, (error) => {
        console.error('Error loading entry model:', error);
        setModelError(true);
    });
    
    const exitGltf = useGLTF("/models/Reesha Exit Play All.glb", undefined, (error) => {
        console.error('Error loading exit model:', error);
        setModelError(true);
    });

    const { actions: entryActions, names: entryNames } = useAnimations(entryGltf.animations, entryGltf.scene);
    const { actions: exitActions, names: exitNames } = useAnimations(exitGltf.animations, exitGltf.scene);
  
    useEffect(() => {
        if (modelError) return;

        if (loopState === 'entry' && entryActions && entryNames.length > 0) {
            setAnimationDuration(entryGltf.animations[0].duration);
            entryActions[entryNames[0]].reset().play();
        } else if (loopState === 'exit' && exitActions && exitNames.length > 0) {
            setAnimationDuration(exitGltf.animations[0].duration);
            exitActions[exitNames[0]].reset().play();
        }
    }, [loopState, entryActions, entryNames, exitActions, exitNames, setAnimationDuration, modelError, entryGltf.animations, exitGltf.animations]);

    if (modelError) {
        return null;
    }
  
    return (
        <primitive
            object={loopState === 'entry' ? entryGltf.scene : exitGltf.scene}
            scale={[25, 25, 25]}
            position={[0, 0, 0]}
        />
    );
}

const SectionOne = () => {
    const [loopState, setLoopState] = useState('entry');
    const [animationDuration, setAnimationDuration] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoopState((prev) => (prev === 'entry' ? 'exit' : 'entry'));
        }, animationDuration * 1000);
        return () => clearInterval(interval);
    }, [animationDuration]);

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
                        top: '30%',
                        left: "50%",
                        zIndex: 2,
                        maxWidth: '50%'
                    }}
                    camera={{ position: [0, 2, 5], fov: 50 }}>
                    <Suspense fallback={<LoadingFallback />}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[0, 5, 5]} intensity={1} />
                        <HeroModel loopState={loopState} setAnimationDuration={setAnimationDuration} />
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
                        maxWidth: '50%'
                    }}
                    camera={{ position: [0, 2, 5], fov: 50 }}>
                    <Suspense fallback={<LoadingFallback />}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[0, 5, 5]} intensity={1} />
                        <HeroModel loopState={loopState} setAnimationDuration={setAnimationDuration} />
                        <OrbitControls enableZoom={false} enableRotate={true} />
                    </Suspense>
                </Canvas>
            </Box>
        </Box>
    );
}; 

export default SectionOne;