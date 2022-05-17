
import React from 'react'
import './App.css';
import Card from './components/About/About';
import {Container, Grid}  from '@mui/material/';
import NavBar from './components/AppBar/NavBar';
import ABout from './components/About/About';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Contact from './Contact/Contact';


function App() {
  return (
    <>
     <NavBar/>
    <Intro/>

    <Container> 
    <ABout/>
   </Container>
   <Contact/>

   <Footer/>
    </>
  );
}

export default App;
