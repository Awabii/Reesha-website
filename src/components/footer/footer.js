import * as React from 'react'
import { Box, Typography, Button } from '@mui/material';
import FooterImage from "../../images/footer-element.png"
import logo from '../../images/logo.png'
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = ({ scrollToSection, sectionRefs }) => {

    const pages = ['للتواصل','الاشتراكات', ' مسار التعليم', 'عن المواد', 'الرئيسية'];

    const [selectedPage, setSelectedPage] = React.useState(pages[0]);

    const handlePageClick = (page, index) => {
      setSelectedPage(page);
      scrollToSection(sectionRefs[index]);
    };

    return (
        <Box
            sx={{
                backgroundColor: '#073c4f',
                color: 'white',
                background: 'linear-gradient(180deg, rgba(23, 208, 220, 0.17) 0%, rgba(0, 0, 0, 0) 100%)',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                marginTop: '5%',
                paddingTop: '2%',
            }}
        >
            <img src={logo} alt="Logo" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <GoogleIcon sx={{ mx: 1 }} />
                <TwitterIcon sx={{ mx: 1 }} />
                <InstagramIcon sx={{ mx: 1 }} />
                <LinkedInIcon sx={{ mx: 1 }} />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'center',
                    gap: { xs: '10px', sm: '2%' },
                    paddingTop: '2%',
                }}
            >

                {pages.map((page,index) => (
                    <Button
                        key={page}
                        onClick={() => handlePageClick(page,index)}
                        sx={{ 
                            my: 2,
                            color: 'white',
                            display: 'block',
                            fontFamily: 'Andada Pro',
                            fontSize: 20, 
                            opacity: selectedPage === page ? 1 : 0.5, // Full opacity for selected, duller for others
                            transition: 'opacity 0.3s ease', // Smooth transition effect
                            mx: 3 }}
                    >
                        {page}
                    </Button>

                ))}
            </Box>
            <Box
                sx={{
                    paddingTop: '2%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                <Typography variant="body2" sx={{ paddingBottom: '0%' }}>
                كل الحقوق محفوظة © 2024 - لتطبيق ريشة للتعليم الممتع.
                </Typography>
                <br></br>
                <img style={{ display: { xs: 'none', md: 'block' }, maxWidth: '100%', height: 'auto' }} src={FooterImage} alt="Footer Decoration" />
            </Box>
        </Box>

    );
};

export default Footer;
