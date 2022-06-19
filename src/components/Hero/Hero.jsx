import React from 'react'
import { Box } from '@mui/system';
import { styled} from '@mui/material/styles';
import { Avatar, Container, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

const HeroWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    background: "url('/image/ui.png')",
    backgroundSize:'cover',


    [theme.breakpoints.down('sm')]: {
      width: 'aut0',
    },
  }));
  

  const ContentWrapper = styled(Box)(({theme}) =>({
      alignItems: 'center',
      textAlign:'center',
      display: 'flex',
      padding:'1rem 0',
      flexDirection: 'column',  
      background: 'rgba(0, 0, 0, 0.6)',
      width: '100%',
  }));

  const TextName = styled(Typography)(({theme}) =>({
    fontWeight: '400', 
    fontSize:'3rem',
    color:'#e2ebf3', 
    letterSpacing:'15px', 
    paddingTop:'10px',

    [theme.breakpoints.down('sm')]: {
    fontWeight: '700', 
    fontSize: '25px',
    letterSpacing:'10px', 
    },

  }))

  const JobName = styled(Typography)(({theme}) =>({
    fontWeight: '100', 
    color:'#e2ebf3', 
    paddingTop:'10px',
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
    
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(2),
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
  
  const Links = styled('a')(({theme}) =>({
   color:'aliceblue'

  }))
  

const Hero = () => {
  return (
    <HeroWrapper>
        <ContentWrapper>
            <Box>
               <Avatar  sx={{ width: '7rem', height: '7rem' }} alt="Remy Sharp" src='/image/profile.png' />
         </Box>

        <TextName variant='h2' > Michael Joshua</TextName>
        <JobName variant='h5'> UI/UX Designer</JobName>
        

            <IconWrapper>
               
               <Links href='https://twitter.com/michael28992177' target='_blank'><Twitter fontSize ='large'/></Links> 
               <Links href='https://api.whatsapp.com/send?phone=2347065514055' target='_blank'><WhatsApp fontSize='large'/></Links>
               <Links href='https://www.linkedin.com/in/michael-63128a238/' target='_blank'> <Linked fontSize ='large' /></Links>
            </IconWrapper>

            <LocationName variant='h6'> Abuja, Nigeria</LocationName>     
        </ContentWrapper>
       

    </HeroWrapper>
  )
}

export default Hero