import React, {useState, useEffect, useRef} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Hero from '../Hero/Hero';
import { Container } from '@mui/material';
import {Link} from 'react-scroll';

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

const ToolbarWrap = styled(Toolbar)(({theme})=>({
  display: 'flex', 
  background: 'var(--blue)',
  top:'0',
  width:'100%',

  

}));

const AppBarWrap = styled(AppBar)`
position: ${({sticky}) => (sticky ? 'fixed' : 'static')};

`

export default function NavBar() {
  const [sticky, setSticky] = useState(false);
  const [elementPosition, setElementPosition] = useState();
  const appBarRef = useRef();

  const Scroll = ()=>{    
    const position = elementPosition;
    if (window.scrollY > position) {
     setSticky(true);
    } 
    else {
     setSticky(false);
    }
  }

  useEffect(() => {

  const element =  document.getElementById('appbar');
  const position = element.offsetTop;
  !elementPosition && setElementPosition(position);

  window.addEventListener('scroll', Scroll);

  return () => {
    window.removeEventListener("scroll", Scroll);
  };
}, [elementPosition]);



  return (
    <Box>
      <Hero/>
      
      <AppBarWrap sticky={sticky} ref={appBarRef} id='appbar'>
        <ToolbarWrap>
          <Menu >

          <Link spy={true} to='Intro' smooth={true} activeClass='activeClass' >
          <MenuLink variant="body1" >Profile</MenuLink>
          </Link>

          <Link spy={true} to='About' smooth={true} >
          <MenuLink variant="body1" >About</MenuLink>
          </Link>

          <Link spy={true} to='Portfolio' smooth={true} >
          <MenuLink variant="body1" >Portfolio</MenuLink>
          </Link>

          <Link spy={true} to='Contact' smooth={true} >
          <MenuLink variant="body1" >Contact</MenuLink>
          </Link>

            </Menu>
          
        </ToolbarWrap>
      </AppBarWrap>
    </Box>
  );
}
