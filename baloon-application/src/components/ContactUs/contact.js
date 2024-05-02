import React from 'react'
import { Box, Typography, Grid, Button, TextField } from '@mui/material';


import "../ContactUs/contact.css"

const Contact = () => {
    return (
        <Box className="contact-main">

            <Box className=" contact-paragraph-box">
                <Box >
                    <Typography
                        variant='h5'
                        className='contact-heading'
                    >
                        CONTACT <span className='offer-text'>US!</span>
                    </Typography>
                    <Typography
                        variant='body2'
                        className='conatct-paragraph'

                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        a type specimen book.
                    </Typography>
                </Box>

                <Box className="react-form-wrapper">

                    <Box className="react-form-child-wrap" pt={2}>
                        <strong className='form-detail-txt'>Fill Your Details Here</strong>

                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} width={'100%'}>
                                <Typography className="form-label">
                                    Company Name:
                                </Typography>
                                <TextField placeholder="Company Name" className="form-react-text" />
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <Typography className="form-label">
                                    Contact Name:
                                </Typography>
                                <TextField placeholder="Contact Name" className="form-react-text" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} >
                                <Typography className="form-label">
                                    Email:
                                </Typography>
                                <TextField placeholder="sample@gmail.com" className="form-react-text" />
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <Typography className="form-label">
                                    Mobile:
                                </Typography>
                                <TextField placeholder="+91000000000" className="form-react-text" />
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <Typography className="form-label">
                                    City:
                                </Typography>
                                <TextField placeholder="Noida" className="form-react-text" />
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <Typography className="form-label">
                                    Your Requirements:
                                </Typography>
                                <TextField placeholder="Gifts, Subscriptions, Events" className="form-react-text" />
                            </Grid>


                        </Grid>
                        <Grid container >
                            <Grid item xs={12} mt="15px">
                                <Typography className="text-area-label" mb={1}>
                                    Describe your Requirements:
                                </Typography >
                                <textarea placeholder="Comment" className="meassage-text-area" cols="30" rows="5"></textarea>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className="react-last-submit-btn">
                        <Button className='conatct-submit-btn btn' type="submit">Get Started</Button>
                    </Box>

                </Box>



            </Box >

        </Box>
    )
}

export default Contact;