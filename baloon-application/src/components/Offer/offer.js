import React from 'react'
import { Box, Typography, Grid, Card, Container } from '@mui/material';
import "../Offer/offer.css"
import img1 from "../../images/offerimg1.jpeg"
import img2 from "../../images/offerimg2.jpeg"
import img3 from "../../images/offerimg3.jpeg"

const data = [
    {
        image: img1,
        alt: "img1",
        text: "Custom Made Gifts"
    },
    {
        image: img2,
        alt: "img2",
        text: " Flowers Supply subscriptions"
    },
    {
        image: img3,
        alt: "img3",
        text: "Plan & Manage Corporate Events"
    }
]

const Offer = () => {
    return (
        <Container className="padding-container">
            <Box className="offer-main">
                <Box>
                    <Typography
                        variant='h5'
                        className='heading-offer'

                    >
                        WHAT WE <span className='offer-text'>OFFER</span>
                    </Typography>
                    <Typography
                        variant='body2'
                        className='offer-paragraph'


                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </Box>
                <Box pt={5} pb={5}>
                    <Grid container spacing={2}>
                        {data.map((item, ind) => (
                            <Grid item xs={12} sm={6} md={4} lg={4} key={ind}>
                                <Box>

                                    <Card>
                                        <Box className="basic-card-box" >
                                            <img src={item.image} className="img-fluid" alt={item.alt} />
                                            <Box className="child-box-basic">
                                                <Typography className="basiccard-typo">{item.text}</Typography>
                                            </Box>
                                        </Box>
                                    </Card>
                                </Box>
                            </Grid>
                        )
                        )
                        }

                    </Grid>

                </Box >

            </Box>
        </Container>

    )
}

export default Offer;


