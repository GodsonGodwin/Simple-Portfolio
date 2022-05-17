import React from 'react'
import { Box } from '@mui/system';
import { styled, alpha } from '@mui/material/styles';
import { Avatar, Container, Typography } from '@mui/material';
import Profile from '../image/Profile2.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const HeroWrapper = styled(Box)(({ theme }) => ({
    height: '20rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign:'center',
    justifyContent: 'center',
    background: 'linear-gradient(to right top, #0b18a7, #dab901)',

    [theme.breakpoints.down('sm')]: {
      height: '18rem',
      width: 'auto',
    },
  }));
  

  const ContentWrapper = styled(Container)(({theme}) =>({
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      marginTop: '1rem',     
  }));

  const TextName = styled(Typography)(({theme}) =>({
    fontWeight: '400', 
    color:'#e2ebf3', 
    letterSpacing:'20px', 
    paddingTop:'5px',

    [theme.breakpoints.down('sm')]: {
    fontWeight: '700', 
    fontSize: '35px',
    letterSpacing:'10px', 
    },

  }))

  const JobName = styled(Typography)(({theme}) =>({
    fontWeight: '100', 
    color:'#e2ebf3', 
    letterSpacing:'10px',

    [theme.breakpoints.down('sm')]: {
    fontWeight: '400', 
    fontSize: '20px',
    letterSpacing:'5px', 
    },

  }))


  const IconWrapper = styled(Box)(({theme}) =>({
      display:'flex',
      gap: '15px',
      paddingTop: theme.spacing(2.5),
      color:'#e2ebf3',
      cursor: 'pointer',
    
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(2),
      },

  }));

  const GitHub = styled(GitHubIcon)(({theme}) =>({
    [theme.breakpoints.down('sm')]: {
      fontSize:'30px',
      },
    
  }))

  
  const Email = styled(EmailIcon)(({theme}) =>({
    [theme.breakpoints.down('sm')]: {
      fontSize:'30px',
      },
  }))

  const WhatsApp = styled(WhatsAppIcon)(({theme}) =>({
    [theme.breakpoints.down('sm')]: {
      fontSize:'30px',
      },
  }))

  const LocationName = styled(Typography)(({theme}) =>({
    fontWeight: '100', 
    color:'#e2ebf3', 
    letterSpacing:'5px', 
    paddingTop:'10px',

    [theme.breakpoints.down('sm')]: {
    fontWeight: '100', 
    fontSize: '18px',
    letterSpacing:'5px', 
    },

  }))
  

const Hero = () => {
  return (
    <HeroWrapper>
        <ContentWrapper maxWidth="sm">
            <Box>
               <Avatar  sx={{ width: '6rem', height: '6rem' }} alt="Remy Sharp" src={Profile} />
         </Box>

        <TextName variant='h2' > Abel Joshua</TextName>
        <JobName variant='h5'> Software Engineer</JobName>
        

            <IconWrapper>
                <GitHub fontSize ='large' />
                <Email fontSize ='large'/>
                <WhatsApp fontSize='large'/>
            </IconWrapper>
        </ContentWrapper>
        <LocationName variant='h6'> Abuja, Nigeria</LocationName>

    </HeroWrapper>
  )
}

export default Hero