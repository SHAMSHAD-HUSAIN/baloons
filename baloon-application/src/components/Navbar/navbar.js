import React from 'react';
import '../Navbar/Navbar.css'; // Import CSS file for styling
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SelectMenu from '../SelectMenu/selectmenu';



const Navbar = () => {




  return (
    <Container className="padding-container">
      <AppBar position="static" sx={{ background: "white", boxShadow: "none" }}>
        <Toolbar className='navbar-toolbar'>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding="0px 0px"
          >
            <Box>
              <Typography
                color="red"
                fontSize="32px"
                fontWeight="bolder"
              >
                Ballons
              </Typography>
            </Box>
          </Box>

          <Box
            ml="auto"
            sx={{ display: 'flex' }}>
            <Typography fontWeight="bolder" color="black" mt={1}>
              عربي
            </Typography>
            <Typography variant='span' color="black" mt={1} mx="5px">
              |
            </Typography>

            <SelectMenu />


            <IconButton>
              <ShoppingBagOutlinedIcon sx={{ color: "black" }} />
            </IconButton>
            <IconButton>
              <AccountBoxOutlinedIcon sx={{ color: "black" }} />
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;
