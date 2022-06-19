import React from 'react'
import { Box } from '@mui/system';
import { styled} from '@mui/material/styles';
import { Avatar, Container, Typography } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterWrapper = styled(Box)(({ theme }) => ({
    height: '8rem',
    width: '100%',
    display: 'flex',
    gap: '2rem',
    flexDirection:'column',
    justifyContent: 'center',
    background: 'linear-gradient(to left top, var(--blue), var(--darkGold))',

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

    background: 'linear-gradient(to left bottom, var(--blue), var(--darkGold))',
    borderTop:'1px solid aliceblue',
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

  const Linked = styled(LinkedInIcon)(({theme}) =>({
    cursor: 'pointer',

    '&:hover':{
      transform:'scale(1.2)',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize:'30px',
      },
    
  }))

  
  const Twitter = styled(TwitterIcon)(({theme}) =>({
    cursor: 'pointer', 

    '&:hover':{
      transform:'scale(1.2)',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize:'30px',
      },
  }))

  const WhatsApp = styled(WhatsAppIcon)(({theme}) =>({
    cursor: 'pointer',

    '&:hover':{
      transform:'scale(1.2)',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize:'30px',
      },
  }))

  const Links = styled('a')(({theme}) =>({
    color:'aliceblue'
 
   }))


const Footer = () => {
  return (
    <>
    <FooterWrapper>
        <ContentWrapper maxWidth="sm">
          
        <Wrapper>
        <Avatar  sx={{ width: '4rem', height: '4rem' }} alt="Remy Sharp" src="/image/profile.png" />
          
        <Box>
        <TextName variant='h5'> Michael Joshua</TextName>
        <JobName variant='h6'> UI/UX Designer</JobName>
        </Box>
        </Wrapper>
        
        <IconWrapper>
        <Links href='https://twitter.com/michael28992177' target='_blank'><Twitter fontSize ='large'/></Links> 
               <Links href='https://api.whatsapp.com/send?phone=2347065514055' target='_blank'><WhatsApp fontSize='large'/></Links>
               <Links href='https://www.linkedin.com/in/michael-63128a238/' target='_blank'> <Linked fontSize ='large' /></Links>
            </IconWrapper>
        </ContentWrapper>
    </FooterWrapper>

    <Gradient>
    <JobName variant='h6'> © Moonsat Technology 2020</JobName>
    </Gradient>

    </>
  )
}

export default Footer