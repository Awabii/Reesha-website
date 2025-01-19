import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import './sectionFour.css'
import '../../css/parentClass.css'
import Switch from '@mui/material/Switch'
import Grid2 from '@mui/material/Grid2'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import orangeButton from "../../images/orangeButton.png"
import bookmark from "../../images/bookmark.png"
import "@fontsource/aladin/400.css"; // Specify weight
import { useNavigate } from 'react-router-dom';

const SectionFour = () => {

    const [checked, setChecked] = React.useState(true);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setChecked(!checked);
    };    

    const handlePackageClick = () => {
        navigate('/signin');
    };

    const singleMembership = () => {

        return(
            <Box
                sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap', // Ensure cards wrap on smaller screens
            }}>
                {/* Card 1 */}
                <Card 
                    sx={{ 
                        my: 2, 
                        mx: 2,
                        background: 'linear-gradient(0deg, #45C2D1 -0.02%, #0E6E79 95.94%)',
                        borderRadius: 10,
                        height: { xs: 400, md: 500 }, 
                        width: { xs: 300, md: 350 }, 
                        position: 'relative',
                        overflow: 'visible',
                    }}>
                    <CardContent sx={{ marginTop: '20%', paddingBottom: '0%', marginBottom: '0%' }}>
                        <Typography variant="h4" color='white' component="div"> {/* Adjust variant for smaller screens */}
                            شهر ١
                        </Typography>
                        <hr style={{ borderColor: 'rgba(242, 186, 52, 1)' }} />
                        <Typography 
                            variant="h5"
                            color='rgba(247, 213, 74, 1)'
                            sx={{ lineHeight: { xs: 2, md: 4 }, fontWeight: "bold" }}    
                        >
                            تحكم أولياء الأمور
                            <br/>
                            تحليلات يومية
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
                            <Typography 
                                variant="h3" 
                                sx={{ 
                                    color: 'white',
                                    fontWeight: 'bold', 
                                    fontSize: { xs: '24', md: '30' },
                                    mr: 1,
                                }}
                            >
                                18.000
                            </Typography>
                            <Typography 
                                variant="h3" 
                                sx={{ 
                                    color: 'white', 
                                    textDecoration: 'line-through',
                                    textDecorationColor: "red",
                                    fontSize: { xs: '24', md: '30' },
                                }}
                            >
                                25
                            </Typography>
                        </Box>
                    </CardContent>

                    {/* Centered Button */}
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button 
                            onClick={handlePackageClick}
                            style={{
                                position: 'absolute',
                                bottom: '-20px', 
                                left: '50%', 
                                transform: 'translateX(-50%)',
                            }}
                        >
                            <img src={orangeButton} alt="Orange Button" />
                        </Button>
                    </CardActions>
                </Card>
                {/* Card 2 */}
                <Card 
                    sx={{ 
                        my: 2, 
                        mx: 2,
                        background: 'linear-gradient(0deg, #45C2D1 -0.02%, #0E6E79 95.94%)',
                        
                        borderRadius: 10,
                        height: { xs: 400, md: 500 }, 
                        width: { xs: 300, md: 350 }, 
                        position: 'relative',
                        overflow: 'visible',
                    }}>
                    <CardContent sx={{ marginTop: '20%', paddingBottom: '0%', marginBottom: '0%' }}>
                        <Typography variant="h4" color='white' component="div"> {/* Adjust variant for smaller screens */}
                        3 أشهر
                        </Typography>
                        <hr style={{ borderColor: 'rgba(242, 186, 52, 1)' }} />
                        <Typography 
                            variant="h5" 
                            color="white"
                            sx={{ lineHeight: { xs: 2, md: 4 }, fontWeight: "bold"  }}    
                        >
                            تحكم أولياء الأمور
                            <br/>
                            تحليلات يومية
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2}}>
                            <Typography 
                                variant="h3" 
                                sx={{ 
                                    color: 'white', 
                                    fontWeight: 'bold', 
                                    fontSize: { xs: '24', md: '30' },
                                    mr: 1,
                                }}
                            >
                            38.500
                            </Typography>
                            <Typography 
                                variant="h3" 
                                sx={{ 
                                    color: 'white', 
                                    textDecoration: 'line-through',
                                    textDecorationColor: "red",
                                    fontSize: { xs: '24', md: '30' },
                                }}
                            >
                                55
                            </Typography>
                        </Box>
                    </CardContent>

                    {/* Centered Button */}
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button 
                            onClick={handlePackageClick}
                            style={{
                                position: 'absolute',
                                bottom: '-20px', 
                                left: '50%', 
                                transform: 'translateX(-50%)',
                            }}
                        >
                            <img src={orangeButton} alt="Orange Button" />
                        </Button>
                    </CardActions>
                </Card>
                {/* Card 3*/}
                <Card 
                    sx={{ 
                        my: 2, 
                        mx: 2,
                        background: 'linear-gradient(180deg, #FFB760 0%, #D84C16 100%)',
                        borderRadius: 10,
                        height: { xs: 400, md: 500 },
                        width: { xs: 300, md: 350 }, 
                        position: 'relative',
                        overflow: 'visible',
                    }}>
                    <img
                        src={bookmark} 
                        alt="icon"
                        style={{ marginLeft: "60%",marginBottom: '0%', alignItems: 'right', justifyContent: 'right' }} // Space between image and text
                    />
                    <CardContent sx={{ marginTop: '0.5%', paddingBottom: '0%', marginBottom: '0%' }}>  
                        <Typography variant="h4" color='white' component="div"> {/* Adjust variant for smaller screens */}
                        12 شهر
                        </Typography>
                        <hr style={{ borderColor: 'rgba(242, 186, 52, 1)' }} />
                        <Typography 
                            variant="h5" 
                            color='rgba(247, 213, 74, 1)'
                            sx={{ lineHeight: { xs: 2, md: 4 }, fontWeight: "bold" }}    
                        >
                            كل المميزات
                            <br/>

                        </Typography>        
                        <Typography 
                                variant="h5" 
                                color='rgba(247, 213, 74, 1)'
                                sx={{ lineHeight: { xs: 1, md: 2 }, fontWeight: "bold" }}    
                                >
                            تذكرة 
                            <span style={{ color: 'red', marginRight: '2%'}}>مجانا </span>
                            لـ
                            <br/>
                            للبرنامج الصيفي        
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2, }}>
                            <Typography 
                                variant="h3" 
                                sx={{ 
                                    color: 'white', 
                                    fontWeight: 'bold', 
                                    fontSize: { xs: '24', md: '30' },
                                    mr: 1,
                                }}
                            >
                                59.900
                            </Typography>
                            <Typography 
                                variant="h3" 
                                sx={{ 
                                    color: 'white', 
                                    textDecoration: 'line-through',
                                    textDecorationColor: "red",
                                    fontSize: { xs: '24', md: '30' },
                                }}
                            >
                                95
                            </Typography>
                        </Box>
                    </CardContent>

                    {/* Centered Button */}
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button 
                            onClick={handlePackageClick}
                            style={{
                                position: 'absolute',
                                bottom: '-20px', 
                                left: '50%', 
                                transform: 'translateX(-50%)',
                            }}
                        >
                            <img src={orangeButton} alt="Orange Button" />
                        </Button>
                    </CardActions>
                </Card>
            </Box> 
        )
    };

    const threeMembership = () => {

        return(
            <Box
                sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap', // Ensure cards wrap on smaller screens
            }}>
                {/* Card 1 */}
                <Card 
                    sx={{ 
                        my: 2, 
                        mx: 2,
                        background: 'linear-gradient(0deg, #45C2D1 -0.02%, #0E6E79 95.94%)',
                        borderRadius: 10,
                        height: { xs: 400, md: 500 }, 
                        width: { xs: 300, md: 350 }, 
                        position: 'relative',
                        overflow: 'visible',
                    }}>
                    <CardContent sx={{ marginTop: '20%', paddingBottom: '0%', marginBottom: '0%' }}>
                        <Typography variant="h4" color='white' component="div"> {/* Adjust variant for smaller screens */}
                            شهر ١
                        </Typography>
                        <hr style={{ borderColor: 'rgba(242, 186, 52, 1)' }} />
                        <Typography 
                            variant="h5"
                            color='rgba(247, 213, 74, 1)'
                            sx={{ lineHeight: { xs: 2, md: 4 }, fontWeight: "bold" }}    
                        >
                            تحكم أولياء الأمور
                            <br/>
                            تحليلات يومية
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
                            <Typography 
                                variant="h3" 
                                sx={{ 
                                    color: 'white',
                                    fontWeight: 'bold', 
                                    fontSize: { xs: '24', md: '30' },
                                    mr: 1,
                                }}
                            >
                                21.990
                            </Typography>
                            <Typography 
                                variant="h3" 
                                sx={{ 
                                    color: 'white', 
                                    textDecoration: 'line-through',
                                    textDecorationColor: "red",
                                    fontSize: { xs: '24', md: '30' },
                                }}
                            >
                                45
                            </Typography>
                        </Box>
                    </CardContent>

                    {/* Centered Button */}
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button 
                            onClick={handlePackageClick}
                            style={{
                                position: 'absolute',
                                bottom: '-20px', 
                                left: '50%', 
                                transform: 'translateX(-50%)',
                            }}
                        >
                            <img src={orangeButton} alt="Orange Button" />
                        </Button>
                    </CardActions>
                </Card>
                {/* Card 2 */}
                <Card 
                    sx={{ 
                        my: 2, 
                        mx: 2,
                        background: 'linear-gradient(0deg, #45C2D1 -0.02%, #0E6E79 95.94%)',
                        
                        borderRadius: 10,
                        height: { xs: 400, md: 500 }, 
                        width: { xs: 300, md: 350 }, 
                        position: 'relative',
                        overflow: 'visible',
                    }}>
                    <CardContent sx={{ marginTop: '20%', paddingBottom: '0%', marginBottom: '0%' }}>
                        <Typography variant="h4" color='white' component="div"> {/* Adjust variant for smaller screens */}
                        3 أشهر
                        </Typography>
                        <hr style={{ borderColor: 'rgba(242, 186, 52, 1)' }} />
                        <Typography 
                            variant="h5" 
                            color="white"
                            sx={{ lineHeight: { xs: 2, md: 4 }, fontWeight: "bold"  }}    
                        >
                            تحكم أولياء الأمور
                            <br/>
                            تحليلات يومية
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2}}>
                            <Typography 
                                variant="h3" 
                                sx={{ 
                                    color: 'white', 
                                    fontWeight: 'bold', 
                                    fontSize: { xs: '24', md: '30' },
                                    mr: 1,
                                }}
                            >
                            42.990
                            </Typography>
                            <Typography 
                                variant="h3" 
                                sx={{ 
                                    color: 'white', 
                                    textDecoration: 'line-through',
                                    textDecorationColor: "red",
                                    fontSize: { xs: '24', md: '30' },
                                }}
                            >
                                95
                            </Typography>
                        </Box>
                    </CardContent>

                    {/* Centered Button */}
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button 
                            onClick={handlePackageClick}
                            style={{
                                position: 'absolute',
                                bottom: '-20px', 
                                left: '50%', 
                                transform: 'translateX(-50%)',
                            }}
                        >
                            <img src={orangeButton} alt="Orange Button" />
                        </Button>
                    </CardActions>
                </Card>
                {/* Card 3*/}
                <Card 
                    sx={{ 
                        my: 2, 
                        mx: 2,
                        background: 'linear-gradient(180deg, #FFB760 0%, #D84C16 100%)',
                        borderRadius: 10,
                        height: { xs: 400, md: 500 },
                        width: { xs: 300, md: 350 }, 
                        position: 'relative',
                        overflow: 'visible',
                    }}>
                        <img
                            src={bookmark} 
                            alt="icon"
                            style={{ marginLeft: "60%",marginBottom: '0%', alignItems: 'right', justifyContent: 'right' }} // Space between image and text
                        />
                    <CardContent sx={{ marginTop: '0.5%', paddingBottom: '0%', marginBottom: '0%' }}>  
                        <Typography variant="h4" color='white' component="div"> {/* Adjust variant for smaller screens */}
                        12 شهر
                        </Typography>
                        <hr style={{ borderColor: 'rgba(242, 186, 52, 1)' }} />
                        <Typography 
                            variant="h5" 
                            color='rgba(247, 213, 74, 1)'
                            sx={{ lineHeight: { xs: 2, md: 4 }, fontWeight: "bold" }}    
                        >
                            كل المميزات
                            <br/>

                        </Typography>        
                        <Typography 
                                variant="h5" 
                                color='rgba(247, 213, 74, 1)'
                                sx={{ lineHeight: { xs: 1, md: 2 }, fontWeight: "bold" }}    
                                >
                            تذكرة 
                            <span style={{ color: 'red', marginRight: '2%'}}>مجانا </span>
                            لـ
                            <br/>
                            للبرنامج الصيفي        
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2, }}>
                            <Typography 
                                variant="h3" 
                                sx={{ 
                                    color: 'white', 
                                    fontWeight: 'bold', 
                                    fontSize: { xs: '24', md: '30' },
                                    mr: 1,
                                }}
                            >
                                69.990
                            </Typography>
                            <Typography 
                                variant="h3" 
                                sx={{ 
                                    color: 'white', 
                                    textDecoration: 'line-through',
                                    textDecorationColor: "red",
                                    fontSize: { xs: '24', md: '30' },
                                }}
                            >
                                125
                            </Typography>
                        </Box>
                    </CardContent>

                    {/* Centered Button */}
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button 
                            onClick={handlePackageClick}
                            style={{
                                position: 'absolute',
                                bottom: '-20px', 
                                left: '50%', 
                                transform: 'translateX(-50%)',
                            }}
                        >
                            <img src={orangeButton} alt="Orange Button" />
                        </Button>
                    </CardActions>
                </Card>
            </Box> 
        )
    };
    

    return(
        <Box class="bottom-margin-of-section-four">
            <Box class="header">
                <Divider class="divider"/>
                <Box class='background-wrapper'>
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
                        gutterBottom>
                        الاشتراكات   
                    </Typography>
                </Box>

            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 5
                }}
            >
            {/* switch   */}
            <Grid2 component="label" container alignItems="center" spacing={1}>
                <Grid2 item
                    sx={{
                        color:'rgba(20, 115, 122, 1)',
                        fontWeight: 200,
                        fontSize: 25
                    }}
                >
                عضوية واحدة</Grid2>
                <Grid2 item>
                    <Switch
                        checked={checked} 
                        onChange={handleChange}
                    value="checked" 
                    />
                </Grid2>
                <Grid2 item
                    sx={{
                    color:'rgba(247, 213, 74, 1)',
                        fontWeight: 200,
                    fontSize: 25}}
                    >٣ أعضاء</Grid2>
            </Grid2>
            </Box>
            {checked ?
            <div>
                {threeMembership()}
            </div>
            :
            <div>
                 {singleMembership()}
            </div>
           
            }
            
                                   
        </Box>
    )
} 

export default SectionFour