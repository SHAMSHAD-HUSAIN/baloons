import React from 'react'
import { Box, Typography, Grid, Button } from '@mui/material';
import "../Advantages/advantage.css"
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const Advantage = () => {
    return (
        <Box className="advantage-main">

            <Box pt={5} pb={5}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant='h5'
                            display="flex"
                            className='advantage-heading'
                        >
                            OUR UNIQUE <span className='advantage-text'> ADVANTAGES</span>
                        </Typography>
                        <Typography
                            variant='body2'
                            className='advantage-paragraph'
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Box className="greeting-footer">
                            <Button type="button" className="btn btn-dark">
                                Contact Now
                            </Button>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box display="flex" >
                            <Box className="adv-icon-box" >
                                <AutoFixHighIcon className='adv-icon' />
                            </Box>
                            <Box>
                                <Typography
                                    variant='h5'
                                    className='adv-heading'
                                >
                                    Enterprise focused
                                </Typography>
                                <Typography
                                    variant='body2'
                                    className='adv-para'

                                >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
                                </Typography>
                            </Box>

                        </Box>
                        <Box display="flex" >
                            <Box className="adv-icon-box" >
                                <LocalShippingIcon className='adv-icon' />
                            </Box>
                            <Box>
                                <Typography
                                    variant='h5'
                                    className='adv-heading'
                                >
                                    Free Delivery
                                </Typography>
                                <Typography
                                    variant='body2'
                                    className='adv-para'
                                >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
                                </Typography>
                            </Box>

                        </Box>
                        <Box display="flex" >
                            <Box className="adv-icon-box" >
                                <CardGiftcardIcon className='adv-icon' />
                            </Box>
                            <Box>
                                <Typography
                                    variant='h5'
                                    className='adv-heading'
                                >
                                    Bespoke gifting
                                </Typography>
                                <Typography
                                    variant='body2'
                                    className='adv-para'
                                >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
                                </Typography>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>

            </Box >

        </Box>
    )
}

export default Advantage;