import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Hero from '../Hero/Hero';
import { Container } from '@mui/material';

const Menu = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem',
  textAlign:'center',
  justifyContent: 'center',
 
  [theme.breakpoints.down('sm')]: {
    gap: '1rem',
    width: 'auto',
  },
}));

const MenuLink = styled(Typography)(({theme})=>({
  '&:hover': {
    padding: theme.spacing(1),
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },

}));

export default function NavBar() {
  return (
    <Box>
      <Hero/>
      
      <AppBar position="static">
        <Toolbar sx={{display: 'flex', background: 'linear-gradient(to left bottom, #1625BB, #FFD700)',}}>
          <Menu >
          <MenuLink variant="body1" >About</MenuLink>

          <MenuLink variant="body1" >Portfolio</MenuLink>

          <MenuLink variant="body1" >Contact</MenuLink>
            </Menu>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
