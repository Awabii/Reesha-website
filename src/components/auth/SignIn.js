import React, { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement sign in logic
        console.log('Sign in:', { email, password });
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#002B34',
            }}
        >
            <Box sx={{ textAlign: 'center', width: '100%', maxWidth: 400 }}>
                <Box 
                    component="img"
                    src={logo} 
                    alt="Reesha Logo"
                    onClick={() => navigate('/')}
                    sx={{ 
                        maxWidth: '180px',
                        marginBottom: '32px',
                        cursor: 'pointer',
                        '&:hover': {
                            opacity: 0.8,
                        },
                    }} 
                />
                <Card
                    sx={{
                        width: '90%',
                        background: '#121F22',
                        borderRadius: 5,
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                        margin: '0 auto',
                    }}
                >
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h4" component="h1" sx={{ color: 'white', textAlign: 'center', mb: 3 }}>
                            تسجيل الدخول
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="البريد الإلكتروني"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{
                                    mb: 2,
                                    '& .MuiOutlinedInput-root': {
                                        color: 'white',
                                        '& fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                                        '&:hover fieldset': { borderColor: 'white' },
                                        '&.Mui-focused fieldset': { borderColor: '#2A3B3F' },
                                    },
                                    '& .MuiInputLabel-root': { 
                                        color: 'rgba(255,255,255,0.7)',
                                        '&.Mui-focused': { color: '#2A3B3F' }
                                    }
                                }}
                            />
                            <TextField
                                fullWidth
                                label="كلمة المرور"
                                type="password"
                                variant="outlined"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                sx={{
                                    mb: 2,
                                    '& .MuiOutlinedInput-root': {
                                        color: 'white',
                                        '& fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                                        '&:hover fieldset': { borderColor: 'white' },
                                        '&.Mui-focused fieldset': { borderColor: '#2A3B3F' },
                                    },
                                    '& .MuiInputLabel-root': { 
                                        color: 'rgba(255,255,255,0.7)',
                                        '&.Mui-focused': { color: '#2A3B3F' }
                                    }
                                }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mb: 2,
                                    background: 'linear-gradient(180deg, #FFB760 0%, #D84C16 100%)',
                                    color: 'white',
                                    '&:hover': {
                                        background: 'linear-gradient(180deg, #FFB760 20%, #D84C16 120%)',
                                    },
                                    '&:focus': {
                                        outline: 'none',
                                        boxShadow: '0 0 0 3px #2A3B3F',
                                    }
                                }}
                            >
                                تسجيل الدخول
                            </Button>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}>
                                <Link
                                    component="button"
                                    variant="body2"
                                    onClick={() => navigate('/signup')}
                                    sx={{ 
                                        color: 'white', 
                                        textDecoration: 'none',
                                        '&:focus': {
                                            outline: 'none',
                                            textDecoration: 'underline',
                                        }
                                    }}
                                >
                                    إنشاء حساب جديد
                                </Link>
                                <Link
                                    component="button"
                                    variant="body2"
                                    onClick={() => navigate('/forgot-password')}
                                    sx={{ 
                                        color: 'white', 
                                        textDecoration: 'none',
                                        '&:focus': {
                                            outline: 'none',
                                            textDecoration: 'underline',
                                        }
                                    }}
                                >
                                    نسيت كلمة المرور؟
                                </Link>
                            </Box>
                        </form>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default SignIn; 