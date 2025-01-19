import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import InteractivePath from './InteractivePath';
import './sectionThree.css';
import '../../css/parentClass.css';

const SectionThree = () => {
    return (
        <Box className="bottom-margin-of-section-three">
            <Box className="header">
                <Divider className="divider"/>
                <Box className='background-wrapper'>
                    <Typography 
                        variant="h2" 
                        sx={{
                            background: 'linear-gradient(90deg, #ff5e3a, #ff9900)', 
                            WebkitBackgroundClip: 'text', 
                            WebkitTextFillColor: 'transparent',
                            fontFamily: 'Aladin',
                            fontWeight: 400,
                            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', 
                            textAlign: 'center',
                        }}
                        gutterBottom
                    >
                        مسار التعليم
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ mt: 4 }}>
                <InteractivePath />
            </Box>
        </Box>
    );
};

export default SectionThree;