import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Lottie from 'lottie-react';
import './sectionTwo.css'
import '../../css/parentClass.css'

// Import JSON animations
import englishAnimation from '../../animations/english.json';
import mathAnimation from '../../animations/maths.json';
import arabicAnimation from '../../animations/arabic.json';
import scienceAnimation from '../../animations/science.json';
import islamicAnimation from '../../animations/islamic.json';
import geoAnimation from '../../animations/geo.json';

const SubjectButton = ({ animation, label }) => {
    return (
        <Button
            size='small'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: { xs: '15px', sm: '20px', md: '25px' },
                '&:hover': {
                    background: 'transparent'
                }
            }}>
            <Box sx={{ 
                width: { xs: '200px', sm: '250px', md: '289px' },
                height: { xs: '200px', sm: '250px', md: '289px' },
                marginBottom: '16px'
            }}>
                <Lottie 
                    animationData={animation}
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%', height: '100%' }}
                />
            </Box>
            <Typography 
                variant="h4" 
                sx={{ 
                    color: 'white', 
                    fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
                }}>
                {label}
            </Typography>
        </Button>
    );
};

const SectionTwo = () => {
    return(
        <Box className="bottom-margin-of-body">
            <Box className="header">
                <Divider className="divider"/>
                <Box className='background-wrapper'>
                    <Typography
                        variant="h2"
                        sx={{
                            background: 'linear-gradient(90deg, #ff5e3a, #ff9900)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 400,
                            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
                            textAlign: 'center',
                            marginBottom: '40px'
                        }}
                        gutterBottom>
                        الدروس
                    </Typography>
                </Box>
            </Box>
            
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    columnGap: { xs: 2, sm: 4, md: 6 },
                    rowGap: { xs: 3, sm: 4, md: 5 },
                    flexWrap: 'wrap',
                    paddingTop: 5,
                    maxWidth: '1400px',
                    margin: '0 auto'
                }}>
                <SubjectButton animation={englishAnimation} label="انجليزي" />
                <SubjectButton animation={mathAnimation} label="رياضيات" />
                <SubjectButton animation={arabicAnimation} label="عربي" />
                <SubjectButton animation={scienceAnimation} label="علوم" />
                <SubjectButton animation={islamicAnimation} label="اسلامية" />
                <SubjectButton animation={geoAnimation} label="معرفة" />
            </Box>
        </Box>
    );
}; 

export default SectionTwo;