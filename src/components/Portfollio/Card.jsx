import React from 'react';
import { Box} from '@mui/system';
import { styled} from '@mui/material/styles';
import { Typography } from '@mui/material';

const Project = styled(Box)(({theme, image}) =>({
    background: `url(${image})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    height:'15rem',
    width:"26rem",
    color: '#00000000',

        "&:hover":{
                display:'flex',
                backgroundColor: '#00000089',
                color: 'white', 
                transform: 'scale(1.05)',   
                transition:'0.8s ease-in',   
                opacity:'0.85',        
        },

        [theme.breakpoints.down('sm')]: {
            backgroundSize:'contain',
            height:'12rem',
            width:"20rem",
            justifyCotent:'center',
            alignItems:'center',
        },
        
}));


const Overlay = styled(Box)(({theme}) =>({
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'left',
    paddingLeft: '4rem',
    paddingTop: '5rem',
}));

const Text1 = styled(Typography)(({theme}) =>({
    fontSize:'2rem',
    fontWeight:'bold',
}));

const Text2 = styled(Typography)(({theme}) =>({
    fontSize:'1rem',
    fontWeight:'bold',

}));


const Card = ({image, text1, text2}) => {
  return (
    <Project image={image}>  
    <Overlay>
        <Text1>{text1}</Text1>
        <Text2>{text2}</Text2>
    </Overlay>
</Project>
  )
}

export default Card