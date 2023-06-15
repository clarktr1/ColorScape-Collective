import React, {useRef, useEffect, useState} from 'react'
import {Grid, Typography, Container, Alert} from '@mui/material'


function SubForm(){

  const [message, isMessage] = useState('')
  const [success, isSuccess] = useState(null)

  const submitHandler = (event) => {
      event.preventDefault()

      if(message.length > 1){
        isSuccess(true)
        isMessage('')
      } else {
        isSuccess(false)
      }
      setTimeout(() => {
        isSuccess(null)
      }, 3000)
  }

    return(
        <div className="center column" id="subscribe-form">
           {success === true?<Alert variant="filled" severity="success" >This is just a test for success!</Alert>:<></>}
           {success === false?<Alert variant="filled" severity="error" >This is just a test for error!</Alert>:<></>}
            <input type="email" placeholder="Email Address" className="input black text" value={message} onChange={(event) => {isMessage(event.target.value)}} required></input>
            <button type="submit" className="btn" onClick={submitHandler}>Subscribe!</button>
        </div>
    )
}

function SubContent(){
    return(
        <Container className="center column" style={{width: '90%'}}>
            <h2 className="black" >Join the ColorScape!</h2>
            <p className="black text" style={{marginBottom:'5vh'}}>Want to see what we are up to and potential opportunities for collaboration? Subscribe to our monthly newsletter to join the fun!</p>
            <SubForm />
            <p className="black" style={{ marginTop:'5vh'}}>By submitting your email, you consent to recieving emails from ColorScape for promotions, volunteer opportunities, and other materials.</p>
        </Container>
    )
}

function Subscribe({animationClass}){ 
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(animationClass);
            } else {
              entry.target.classList.remove('hidden');
            }
          });
        });
    
        observer.observe(elementRef.current);
    
        // Cleanup the observer when the component is unmounted
        return () => {
          observer.disconnect();
        };
      }, [animationClass]);

    return(
        <div ref={elementRef} className='hidden' id='sub' style={{margin: '20vh 0'}}>
            <SubContent />
       
        </div>
    )
}

export default Subscribe