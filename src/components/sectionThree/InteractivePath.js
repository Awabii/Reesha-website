import React from 'react';
import { Box } from '@mui/material';
import pathGif from '../../animations/Path.gif';

const InteractivePath = () => {
    return (
        <Box sx={{ 
            position: 'relative', 
            width: '100%', 
            height: '600px', 
            overflow: 'hidden', 
            my: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box sx={{ 
                width: '100%',
                maxWidth: '1200px',
                height: '100%',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img 
                    src={pathGif}
                    alt="Learning Path"
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: '1000px',
                        objectFit: 'contain'
                    }}
                />
            </Box>
        </Box>
    );
};

export default InteractivePath; 