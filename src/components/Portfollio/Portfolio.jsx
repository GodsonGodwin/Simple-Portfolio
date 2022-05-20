import React from 'react'
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import {Container, Typography } from '@mui/material';

import Clique from '../image/clique.png';
import Angel from '../image/angels.png';
import VigoVote from '../image/vigovote.png';
import FeastBank from '../image/feastbank1.png';
import Vigotag from '../image/vigotag.png';
import Cardium from '../image/cardium.png';
import Card from './Card';

const Wrapper = styled(Container)(({theme}) =>({
    height:'65rem',
    marginTop:'10rem',
    paddingTop:'7rem',
    display: 'flex',
    flexDirection:"column",
    alignItems: 'center',
    textAlign:'center',

    [theme.breakpoints.down('md')]: {
        height: '117rem',
        
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

            <Card image={Clique} text1='Cardium' text2='Design / Development'/>

            <Card image={Angel} text1='Angel Home Care' text2='Design / Development'/>

            <Card image={VigoVote} text1='Vigo Vote' text2='Design / Development'/>

            <Card image={FeastBank} text1='FeastBank' text2='Design / Development / Technology'/>

            <Card image={Vigotag} text1='Vigotag' text2='Design / Development'/>

            <Card image={Cardium} text1='Cardium' text2='Design / Development'/>

        </ProjectList>
    </Wrapper>
  )
}

export default Portfolio