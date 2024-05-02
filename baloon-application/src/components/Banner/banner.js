import React from 'react'
import { Box, Typography, Button, Container } from '@mui/material';
import "../Banner/banner.css"
const HomeBanner = () => {
  return (
    <Container className="padding-container">
      <Box className="banner-main">
        <Box className="banner-position" alignItems="center "
        >
          <Typography className='heading' variant='h5' >
            Balloons Business
          </Typography >
          <Typography className='subtitle'
          >
            With BALLOONS B2B...Flexible Enterprise Oriented Fitting Solution for Companies & Employees
          </Typography>
          <Box className="greeting-footer1">
            <Button type="button" className="btn btn-dark">
              Contact Now
            </Button>
          </Box>
        </Box>

      </Box>
    </Container>
  )
}

export default HomeBanner


