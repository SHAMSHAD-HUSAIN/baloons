import { Box, Typography, Grid, ListItem, ListItemText, List, Container } from '@mui/material';
import React from 'react'
import "../Footer/footer.css"
import PetsIcon from '@mui/icons-material/Pets';
import AppleIcon from '@mui/icons-material/Apple';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const icon1 = <LocalPhoneIcon className='local-phone-icon' />;
const icon2 = <MailOutlineIcon className='mail-icon' />;
const columnsData = [
    {
        heading: 'ABOUT',
        links: ['About us', 'Privacy policy', 'Promotions subcription', "terms and conditions"],
    },
    {
        heading: 'TOP CATEGORIES',
        links: ['Baloons ', 'Catering', 'Photoshoot', 'Perfume', 'Flowers', 'Gifts', 'Cakes & Gourmet', 'Gifts for occation'],
    },

    {
        heading: 'BRANDS',
        links: ['Aroy', "Bloomsbury's", 'Dreamdays', 'Fay Lawson', 'Kate Spade New Yourk', 'Le Chocolatier', 'Light of Sakina', 'Mirzam Chocolate', 'newly Teas'],
    },
    {
        heading: 'CITIES',
        links: ['Dubai', 'Riyadh', 'Abu Dhabi', 'Jeddah', 'Amman', 'Jordan'],
    },
    {
        heading: "WE'RE ALWAYS HERE TO HELP",
        links: [
            <React.Fragment>{icon1}   +91 88995 5645</React.Fragment>,
            <React.Fragment>{icon2}     support@balloons.com</React.Fragment>,
        ],
    },

];
const Footer = () => {
    return (
        <Container className="padding-container">
            <Box>
                <Box>
                    <Grid container spacing={2} pt={2} pb={2} >
                        <Grid item xs={12} md={6} sm={6}>
                            <Box className="footer-description">
                                <Box className="pets-icon-box">
                                    <PetsIcon className='pets-icon' />
                                </Box>

                                <Typography
                                    variant='body2'
                                    className='footer-paragraph'                            >
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sm={6}>


                            <Box className="footer-second-grid">
                                <Typography
                                    variant='body2'
                                    className='down-heading'
                                >
                                    DOWNLOAD OUR APP NOW
                                </Typography>

                                <Box className="download-app-box">

                                    <Box className="download-app">
                                        <Box><AppleIcon className='apple-icon' /></Box>
                                        <Box className="app-store-box">
                                            <Typography className='icon-typo'>DOWNLOAD ON THE</Typography>
                                            <Typography className='app-store-text'>App Store</Typography>
                                        </Box>
                                    </Box>

                                    <Box className="download-app">
                                        <Box><PlayArrowIcon className='apple-icon' /></Box>
                                        <Box className="app-store-box">
                                            <Typography className='icon-typo'>ANDROID APP ON</Typography>
                                            <Typography className='app-store-text'>Goggle Play</Typography>
                                        </Box>
                                    </Box>
                                </Box>

                            </Box>


                        </Grid>
                    </Grid>
                </Box>
                <Box className="footer-colon-section">


                    <Container className='footer-col-conatiner'>
                        <Grid container justifyContent="space-between" >
                            {columnsData.map((column, index) => (
                                <Grid key={index} item xs={12} sm={6} md={2} className='footer-col-grid'>
                                    <Typography
                                        fontSize="15px"
                                        fontWeight="700"
                                        variant="h5" gutterBottom>
                                        {column.heading}
                                    </Typography>
                                    <List>
                                        {column.links.map((link, idx) => (
                                            <ListItem className='footer-link' key={idx} button component="a" href="#">
                                                <ListItemText className='footer-item-text' primary={link} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>


                </Box>
                <Box className="copyright-text">
                    <Box className="lisence-text-box">
                        © Balloons.  All rights reserved 2022
                    </Box>
                    <Box className="footer-arrow-icon-box">
                        <KeyboardArrowUpIcon className='key-arrow-icon' />
                    </Box>

                </Box>
            </Box>
        </Container>

    )
}

export default Footer;
