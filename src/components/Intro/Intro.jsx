import React from 'react'
import { Box } from '@mui/system';
import { styled} from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';
import Profile from '../image/profile.jpg'

const IntroWrapper = styled(Container)(({ theme }) => ({
  marginTop: '5rem',
  padding: '4rem 0 7rem 0rem',
  textAlign:'center',


  [theme.breakpoints.down('sm')]: {
    
    marginTop: '2rem',    
  },
}));


const TextWrapper = styled(Typography)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    borderRight: '3px solid var(--darkGold) ',
   
     [theme.breakpoints.down('sm')]: {
        borderRight: 'none',
        
        borderBottom: '1px solid var(--darkGold) ',
     },
   }));

const Text1 = styled(Typography)(({ theme }) => ({
 fontSize: '1.2rem',
 fontWeight: 'bold',
 color:'var(--blue)',
  textAlign:'center',


}));

const Text2 = styled(Typography)(({ theme }) => ({
    fontSize: '4rem',
    fontWeight: 'bold',
    color:'var(--darkGold)',
     textAlign:'center',
   
     [theme.breakpoints.down('sm')]: {
       fontSize: '2.5rem',
     },
   }));

   const Text3 = styled(Typography)(({ theme }) => ({
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color:'var(--blue)',
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
 color:'var(--darkGold)',
  textAlign:'center',

  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    letterSpacing: '1.5px',
    paddingBottom: '1rem',
    lineHeight: '30px',
    
  },
}));

const Image = styled(Box)(({ theme }) => ({
  marginRight:'4rem',
    [theme.breakpoints.down('sm', 'md')]: {
        margin: '0',

    },
  }));


const Intro = () => {
  return (
    <IntroWrapper id='Intro' >  
    <Grid container >
    <Grid item xs={12} md={6} >
    <TextWrapper>
    <Text1>Hi, My Name is </Text1>
    <Text2> Michael Joshua </Text2>
    <Text3>I am a UI/UX Designer </Text3>
    <AboutText>Highly skilled and technically creative </AboutText>
    </TextWrapper>
    
    </Grid>

    <Grid item xs={12} md={6}>
        <Image>
        <img src='/image/profile.png' className='ProfileImage' alt='Profile'/>
            </Image>
        </Grid>

</Grid>
</IntroWrapper>
 
  )
}

export default Intro
