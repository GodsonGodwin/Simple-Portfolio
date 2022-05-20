
import React from 'react'
import './App.css';
import {Container}  from '@mui/material/';
import { styled} from '@mui/material/styles';
import NavBar from './components/AppBar/NavBar';
import ABout from './components/About/About';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfollio/Portfolio';

const Wrapper = styled(Container)(({theme, image}) =>({
  
  [theme.breakpoints.up('md')]: {
    padding:'0',
  },
  
  [theme.breakpoints.down('md')]: {
    padding:'0',
  },
      [theme.breakpoints.down('sm')]: {
        padding:'0',
      },
      
}));

function App() {
  return (
    <>
     <NavBar/>
   
    <Wrapper> 
    <Intro/>
    <ABout/>
    <Portfolio />
    <Contact/>
   </Wrapper>

   <Footer/>
    </>
  );
}

export default App;
