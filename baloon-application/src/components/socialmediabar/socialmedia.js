import { Box } from '@mui/material'
import React from 'react'
import "../socialmediabar/socailmedia.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import PinterestIcon from '@mui/icons-material/Pinterest';


const Socialmedia = () => {
  return (
    <Box className="social-main-box">
      <Box className="icon-box">
        <Box className="textandicon-box">
          <span className='icon-span'><InstagramIcon className='social-icon' /></span>
          <span className='social-text'>instagram</span>
        </Box>
        <Box className="textandicon-box">
          <span className='icon-span'><FacebookIcon className='social-icon' /></span>
          <span className='social-text'>facebook</span>
        </Box> <Box className="textandicon-box">
          <span className='icon-span'><SmartphoneIcon className='social-icon' /></span>
          <span className='social-text'>snapchat</span>
        </Box> <Box className="textandicon-box">
          <span className='icon-span'><XIcon className='social-icon' /></span>
          <span className='social-text'>twitter</span>
        </Box> <Box className="textandicon-box">
          <span className='icon-span'><PinterestIcon className='social-icon' /></span>
          <span className='social-text'>Pintrest</span>
        </Box>





      </Box>

    </Box>
  )
}

export default Socialmedia