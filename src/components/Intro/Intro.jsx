import React from 'react'
import { Box } from '@mui/system';
import { styled} from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';
import Profile from '../image/Profile2.jpg'

const IntroWrapper = styled(Container)(({ theme }) => ({
  height: '35rem',
  marginTop: '5rem',
  padding: '4rem 2rem',
  textAlign:'center',
//   background: 'linear-gradient(to right top, #1625BB, #FFD700)',

  [theme.breakpoints.down('sm')]: {
    height: '45rem',
    marginTop: '2rem',    
  },
}));


const TextWrapper = styled(Typography)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    borderRight: '3px solid #998304 ',
   
     [theme.breakpoints.down('sm')]: {
        borderRight: 'none',
        borderBottom: '1px solid #998304 ',
     },
   }));

const Text1 = styled(Typography)(({ theme }) => ({
 fontSize: '1.2rem',
 fontWeight: 'bold',
 color:'#09116e',
  textAlign:'center',

  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const Text2 = styled(Typography)(({ theme }) => ({
    fontSize: '4rem',
    fontWeight: 'bold',
    color:'#998304',
     textAlign:'center',
   
     [theme.breakpoints.down('sm')]: {
       fontSize: '3rem',
     },
   }));

   const Text3 = styled(Typography)(({ theme }) => ({
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color:'#09116e',
     textAlign:'center',
   
     [theme.breakpoints.down('sm')]: {
       fontSize: '1.5rem',
     },
   }));

const AboutText = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
 fontWeight: '400',
 letterSpacing: '2px',
 lineHeight: '50px',
 color:'#998304',
  textAlign:'center',

  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    letterSpacing: '1.5px',
    lineHeight: '30px',
    
  },
}));

const Image = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm', 'md')]: {
        marginTop: '-5rem',

    },
  }));


const Intro = () => {
  return (
    <IntroWrapper id='Intro' >  
    <Grid container spacing={2}>
    <Grid item xs={12} md={6} >
    <TextWrapper>
    <Text1>Hi, My Name is </Text1>
    <Text2> Abel Joshua </Text2>
    <Text3>I am a full stack Developer </Text3>
    <AboutText>Highly skilled and technically smart </AboutText>
    </TextWrapper>
    
    </Grid>

    <Grid item xs={12} md={6}>
        <Image>
        <img src={Profile} className='ProfileImage' alt='Profile'/>
            </Image>
        </Grid>

</Grid>
</IntroWrapper>
 
  )
}

export default Intro
