import React from 'react'
import { Box } from '@mui/system';
import { styled, alpha } from '@mui/material/styles';
import { Avatar, Container, Typography } from '@mui/material';
import Profile from '../image/Profile2.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const FooterWrapper = styled(Box)(({ theme }) => ({
    height: '8rem',
    width: '100%',
    display: 'flex',
    gap: '2rem',
    flexDirection:'column',
    justifyContent: 'center',
    background: 'linear-gradient(to right top, var(--blue), var(--darkGold))',

    [theme.breakpoints.down('sm')]: {
      height: '10rem',
      width: 'auto',
    },
  }));
  

  const ContentWrapper = styled(Container)(({theme}) =>({
      alignItems: 'center',
      display: 'flex',
      gap: '2rem',
      justifyContent:'center',

      [theme.breakpoints.down('sm')]: {
        flexDirection:'column',
        gap: '1rem',
      },
  }));

  const Wrapper = styled(Box)(({theme}) =>({
    display:'flex', 
    gap: '2rem',
    borderRight:'1px solid aliceblue', 
    paddingRight:'2rem',
    
    [theme.breakpoints.down('sm')]: {
      paddingRight:'0rem',
      justifyContent: 'center',
      displayDirection:'column',
      gap: '1rem',
      borderRight:'none', 
    },
}));
 

  const TextName = styled(Typography)(({theme}) =>({
    fontWeight: '400', 
    
    color:'#e2ebf3', 

    [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    alignItems:'center',
    alignContent:'center',
    fontWeight: '700', 
    fontSize: '20px',
    letterSpacing:'5px', 
    },

  }))

  const JobName = styled(Typography)(({theme}) =>({
    fontWeight: '100', 
    color:'#e2ebf3', 
    letterSpacing:'5px',

    [theme.breakpoints.down('sm')]: {
    fontWeight: '400', 
    fontSize: '15px',
    // letterSpacing:'5px', 
    },

  }))
 
  const Gradient = styled(Box)(({theme}) =>({

    background: 'linear-gradient(to left bottom, var(--gold), var(--darkGold))',
    border:'0px solid red',
    height: '3rem',
    textAlign: 'center',
    paddingTop:'3px',

    [theme.breakpoints.down('sm')]: {
    fontWeight: '400', 
    fontSize: '10px',
    },

  }))


  const IconWrapper = styled(Box)(({theme}) =>({
      display:'flex',
      gap: '15px',
      color:'#e2ebf3',
      cursor: 'pointer',
    
    [theme.breakpoints.down('sm')]: {
      
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


const Footer = () => {
  return (
    <>
    <FooterWrapper>
        <ContentWrapper maxWidth="sm">
          
        <Wrapper>
        <Avatar  sx={{ width: '4rem', height: '4rem' }} alt="Remy Sharp" src={Profile} />
          
        <Box>
        <TextName variant='h5'> Abel Joshua</TextName>
        <JobName variant='h6'> Software Engineer</JobName>
        </Box>
        </Wrapper>
        
            <IconWrapper>
                <GitHub fontSize ='medium' />
                <Email fontSize ='medium'/>
                <WhatsApp fontSize='medium'/>
            </IconWrapper>
        </ContentWrapper>
    </FooterWrapper>

    <Gradient>
    <JobName variant='h6'> © 2020</JobName>
    </Gradient>

    </>
  )
}

export default Footer