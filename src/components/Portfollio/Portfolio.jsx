import React from 'react'
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import {Container, Typography } from '@mui/material';

import Vote from '../image/vote.jpg';
import Product from '../image/product.jpg';
import Auto from '../image/auto.jpg';
import FeastBank from '../image/feastbank1.png';
import Vigotag from '../image/vigotag.png';
import Cardium from '../image/cardium.png';
import Card from './Card';

const Wrapper = styled(Container)(({theme}) =>({
    marginTop:'5rem',
    paddingTop:'3rem',
    display: 'flex',
    flexDirection:"column",
    alignItems: 'center',
    textAlign:'center',

    [theme.breakpoints.down('md')]: {
        
        
      },

    [theme.breakpoints.down('sm')]: {
        height: '95rem',
        width: '100%',
        marginTop: '2rem',    
        padding: '2rem 0rem',
      },
}));

const ProjectText = styled(Typography)(({theme}) =>({
    fontSize:'2.5rem',
    fontWeight:'bold',
    color:'var(--darkGold)',

    [theme.breakpoints.down('sm')]: {
        fontSize:'2rem',
      },

}));

const ProjectList = styled(Box)(({theme}) =>({
    display:'flex',
    flexWrap:'wrap',
    gap:'2rem',
    marginTop:'3rem',
    justifyContent:'center',

    [theme.breakpoints.down('sm')]: {
    display:'flex',
    flexDirection:'column',
    marginTop:'2rem',
},

}));


const Portfolio = () => {
  return (
    <Wrapper id='Portfolio'>
        <ProjectText>Some of the Projects I Oversaw</ProjectText>

            <ProjectList>

            <Card image={Vote} />

            <Card image={Product} />

            <Card image={Auto} />

            <Card image={FeastBank} />

            <Card image={Vigotag} />

            <Card image={Cardium} />

        </ProjectList>
    </Wrapper>
  )
}

export default Portfolio