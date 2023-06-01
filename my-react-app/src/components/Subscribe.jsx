import React, {useRef, useEffect} from 'react'
import {Grid, Typography, Container} from '@mui/material'
import Divider from './Divider'

function SubForm(){
    return(
        <div className="center column" id="subscribe-form">
            <input type="email" placeholder="Email Address" className="input black text"></input>
            <button type="submit" className="btn">Subscribe!</button>
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