import React, {useState, useRef} from 'react'
import { Box, flexbox } from '@mui/system';
import { styled, alpha } from '@mui/material/styles';
import { Avatar, Button, Container, Grid, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';

const ContactWrapper = styled(Container)(({ theme }) => ({
    height: '30rem',
    marginTop: '10rem',
    marginBottom: '7rem',
    padding: '4rem 2rem',
    textAlign:'center',
    justifyContent:'center',
    display: 'flex',
    gap:'2rem',
    flexDirection: 'column',
    background: 'linear-gradient(to right top, var(--blue), var(--gold))',
  
    [theme.breakpoints.down('sm')]: {
      height: '30rem',
      marginTop: '2rem',    
      padding: '4rem 0rem',
      gap:'0.8rem',
    },
  }));

  const TextWrapper = styled(Container)(({theme}) =>({
    display: 'flex',
    flexDirection: 'column',
    gap:'0.5rem',
    justifyContent:'center',
    alignItems:'center',

    [theme.breakpoints.down('sm')]: {
      
      },

  }))

  const Typography1 = styled(Typography)(({theme}) =>({
     fontSize:'4rem',
     fontWeight:'bold',
     color:'aliceblue',

    [theme.breakpoints.down('sm')]: {
    fontSize:'3rem',
      },

  }))

  const Typography2 = styled(Typography)(({theme}) =>({
    fontSize:'2rem',
    fontWeight:'400',
    color:'#1625BB',
    


    [theme.breakpoints.down('sm')]: {
        fontSize:'1.6rem',
        
      },

  }))

  const Typography3 = styled(Typography)(({theme}) =>({
    fontSize: '1.3rem',
    fontWeight:'400',
    marginTop:'1rem',
    color:'aliceblue',

    [theme.breakpoints.down('sm')]: {
        fontSize: '1.2rem',
      },

  }))

  const Button1 = styled(Button)(({theme}) =>({
    fontSize: '1rem',
    background: 'linear-gradient(to right top, var(--darkGold), var(--gold))',
    fontWeight:'700',
    marginTop:'1rem',
    width: '8rem',
    alignItems:'center',
    textAlign:'center',
  }))




  const FormWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection:'column',
    gap:'1rem',
    textAlign:'center',
    justifyContent:'center',
  
    [theme.breakpoints.down('sm')]: {
        
    },
  }));

  const Form = styled('form')(({ theme }) => ({
      display:'flex',
      flexDirection:'column',
      gap: '2rem', 
      alignItems: 'center',

      '& input' :{
        width: '20rem',
        height: '3rem',
        padding: '0.3rem',
        outline: 'none',
        border: '2px solid var(--gold)',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: '500',
    },

    '& textarea':{
        width: '20rem',
        height: '6rem!important',
        padding: '0.3rem',
        outline: 'none',
        border: '2px solid var(--gold)',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: '500',
    },
  
    [theme.breakpoints.down('sm')]: {
       
    },
  }));




const Contact = () => {
  const [sent, setSent] =useState(false);
const [showForm, setShowForm] =useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6pd6wfb', 'template_t5i6ruc', form.current, '4HvEhEr4mwOcsYEPP')
      .then((result) => {
          console.log(result.text);
          setSent(true);
          setTimeout(()=>{setShowForm(false)}, 1500);
          
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <ContactWrapper id='Contact'>
        {!showForm ? (<TextWrapper>
            <Typography1 variant='h3'> Get in touch</Typography1>
            <Typography2 variant='h4'> <i>Send me an Email</i></Typography2>
            <Typography3 variant='h5'>
            Although I’m not currently looking for any new opportunities, <br/>
            my inbox is always open. Whether you have a question or just <br/>
            want to say hi, I’ll try my best to get back to you! 
            </Typography3>

            <Button1 variant='contained' onClick={()=>setShowForm(!showForm)}> Say Hello </Button1>
        </TextWrapper>) 

        :(<FormWrapper>
             <Typography2 variant='h4' sx={{color:'aliceblue', fontSize:'1.5rem'}}><i>My Inbox is alway open</i></Typography2>
            <Form ref={form}  onSubmit={sendEmail}>
                <input type='text' name= 'user_name' className='userInput' placeholder='Name' required/>
                <input type='email' name= 'user_email' className='userInput' placeholder='Your Email' required/>
                <textarea name='message' className='userInput' placeholder='Message' required/>
                {sent && <Typography2  sx={{color:'aliceblue', fontSize:'1rem'}}><i>Thanks for reaching out!</i></Typography2>}

                <Button1 type='submit' variant='contained'> Send </Button1>
            </Form>
        </FormWrapper>
        )}

    </ContactWrapper>
  )
}

export default Contact