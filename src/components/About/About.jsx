import React, { useState } from 'react'
import { styled} from '@mui/material/styles';
import { Container, Typography } from '@mui/material';


const AboutWrapper = styled(Container)(({ theme, showMoreText }) => ({
  padding: '2rem 0 5rem 0',
  textAlign:'center',
  
  


  [theme.breakpoints.down('md')]: {
    marginTop: '12rem',
    
  },

  [theme.breakpoints.down('sm')]: {
    width: '90%',
    marginTop: '-5rem',
    
  },
}));

const AboutTitle = styled(Typography)(({ theme }) => ({
 fontSize: '3rem',
 fontWeight: 'bold',
 color:'var(--darkGold)',
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
 color:'var(--blue)',
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
      Creative UI Developer with over 4 years facilitating and supporting human interactions with complex systems and software. 
      Maintains user-centric designs while adhering to prescribed interface principals and related development goals. 
      Dedicated to creating inviting and unintimidating interfaces for everything from simple open-source applications to complex 
      proprietary systems.

    <ButtonMore variant="text" onClick={()=>setShowMoreText(!showMoreText)}><i>Read more</i></ButtonMore>
    </AboutText> ) 
    
    :(<AboutText>
     Creative UI Developer with over 4 years facilitating and supporting human interactions with complex systems and software. 
      Maintains user-centric designs while adhering to prescribed interface principals and related development goals. 
      Dedicated to creating inviting and unintimidating interfaces for everything from simple open-source applications to complex 
      proprietary systems. <br/><br/>
    
      Talented at planning and creating graphics for websites and mobile app interfaces using <strong>Figma, Adobe UX and Adobe Illustrator. </strong>
      Consistently employed understanding of user psychology throughout design process. <br/><br/>
    
      Accomplished designer with outstanding interface performance analysis, project modeling and mapping skills. Analyzed, 
      documented and reported challenges affecting interface output. Critical thinker with great analytical background. <br/><br/>
    <em style={{color:'var(--blue)'}}>Feel free to send me an email, I promise I would responds to your mails in due time...</em>
    </AboutText>
   
    )}
     </AboutWrapper>
      
  )
}

export default ABout