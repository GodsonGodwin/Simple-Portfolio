import React, { useState } from 'react'
import { styled} from '@mui/material/styles';
import { Container, Typography } from '@mui/material';


const AboutWrapper = styled(Container)(({ theme, showMoreText }) => ({
  height: `${({showMoreText}) => (showMoreText? '50rem' : '30rem')}`,
  marginTop: '5rem',
  padding: '2rem',
  textAlign:'center',
  marginBottom:'5rem',


  [theme.breakpoints.down('md')]: {
    marginTop: '12rem',
    
  },

  [theme.breakpoints.down('sm')]: {
    height: `${({showMoreText}) => (showMoreText? '50rem' : '35rem')}`,
    width: '100%',
    marginTop: '-5rem',
    
  },
}));

const AboutTitle = styled(Typography)(({ theme }) => ({
 fontSize: '3rem',
 fontWeight: 'bold',
 color:'#998304',
  textAlign:'center',

  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));

const AboutText = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
 fontWeight: '400',
 letterSpacing: '2px',
 lineHeight: '50px',
 color:'#09116e',
  textAlign:'left',

  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
    letterSpacing: '1.5px',
    lineHeight: '30px',
    
  },
}));

const ButtonMore = styled('span')(({ theme }) => ({
  fontSize: '1.3rem',
  padding: '5px',
 fontWeight: '700',
 color:'var(--darkGold)',
 

  '&:hover':{
   cursor:'pointer',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    padding: '0px',
    display:'block',

  },
}));


const ABout = () => {

  const [showMoreText, setShowMoreText] = useState(false);
  return (  
    <AboutWrapper id="About" >   
    <AboutTitle>About Me </AboutTitle>
    {!showMoreText ? (<AboutText>
    Hello! My name is Abel Fergurson and I enjoy creating things that live on the internet. 
    My interest in  programming started back in 2009 when I was a kid in elementary class; I initially took interest 
    in gaming, artificial intelligence and slowly migrate to web development though I still have high interest in AI 
    technology and particularly more on space technology. 
    <ButtonMore variant="text" onClick={()=>setShowMoreText(!showMoreText)}><i>Read more</i></ButtonMore>
    </AboutText> ) 
    
    :(<AboutText>
    Hello! My name is Abel Fergurson and I enjoy creating things that live on the internet. 
    My interest in  programming started back in 2009 when I was a kid in elementary class; I initially took interest 
    in gaming, artificial intelligence and slowly migrate to web development though I still have high interest in AI 
    technology and particularly more on space technology these days. <br/><br/>
    
    I have learn a lot of languages and I am dynamically versatile in all aspect of programming languages. 
    I have strong knowledge and experience in <strong>HTML, CSS, REACT.JS, ANGULAR.JS, PYTHON, JAVASCRIPT, TYPESCRIPT, PHP, 
    MYSQL, GRAPHQL, NODE.JS.</strong> <br/><br/>
    
    Fast-forward to today, I am proud of my progress but not yet at the peak of where 
    I project my career to be. I’ve have supervised and managed different projects and have the priviledge of working at 
    different companies and have a start-up of my own with a huge corporation. <br/><br/>

    I am the current Chief Technology Officer(CTO) and co-founder at Moonsat Technology(<a href='moonsat.org'>moonsat.org</a>) and also the 
    founder of Clique NG (<a href='moonsat.org'>clique.ng</a>); a start up that fucused on delievering  and contributing 
    high quality services to the educational challenges we face in the society. <br/> 

    <em>Feel free to send me an email, I promise I would responds to your mails in due time...</em>
    </AboutText>
   
    )}
     </AboutWrapper>
      
  )
}

export default ABout