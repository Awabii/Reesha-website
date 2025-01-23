import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './sectionOne.css';
import ipad from '../../images/ipad.png';

const SectionOne = () => {
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
                        marginRight: { xs: 0, md: '20%' },
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
                        paddingRight: { xs: 0, md: '20%' },
                        fontSize: { xs: '1rem', md: '1.5rem' },                
                    }}>
                    تعلم بمرح ومتعة مع تطبيق ريشة الالكتروني للمراحل الدراسية من 
                    <br />
                    الصف الأول الى الصف الخامس الابتدائي
                </Typography>
            </Box>

            <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: { xs: 4, md: 8 }
                }}
            >
                <img
                    src={ipad}
                    alt="Avatar"
                    style={{
                        maxWidth: '80%',
                        maxHeight: '600px',
                        objectFit: 'contain'
                    }}
                />
            </Box>
        </Box>
    );
};

export default SectionOne;