import React from 'react'
import { Box, Typography, Grid, Card, Container } from '@mui/material';
import "../Features/feature.css"
import img1 from "../../images/featureimg1.jpeg"
import img2 from "../../images/featureimg2.jpeg"
import img3 from "../../images/featureimg3.jpeg"
import img4 from "../../images/featureimg4.jpeg"
import img5 from "../../images/featureimg5.jpeg"
import img6 from "../../images/featureimg6.jpeg"


const data = [
    {
        image: img1,
        alt: "img1",
        text: "Exclusive Promotion"
    },
    {
        image: img2,
        alt: "img2",
        text: " Billing & Invoicing"
    },
    {
        image: img3,
        alt: "img3",
        text: "Bulk Orders"
    },
    {
        image: img4,
        alt: "img4",
        text: "Tracking & Reporting"
    }, {
        image: img5,
        alt: "img5",
        text: "Scheduling"
    }, {
        image: img6,
        alt: "img6",
        text: "Templates"
    }
]

const Feature = () => {
    return (
        <Container className="padding-container">
            <Box className="feature-main">
                <Box>
                    <Typography
                        variant='h5'
                        className='feature-heading'
                    >
                        BALOON <span className='offer-text'>FEATURES</span>
                    </Typography>
                    <Typography
                        variant='body2'

                        className='feature-paragraph'
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        a type specimen book.
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
                                            <Box className="child-box-basic" paddingLeft="45px">
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

export default Feature;


