import React, { useRef, useEffect } from 'react';
import insta from '../assets/images/instagram.png'
import facebook from '../assets/images/facebook.png'
import { Grid } from "@mui/material"


function Location(){
    return(
        <div className="center column">
            <h3  className='center'x style={{marginBottom:'13%'}}>Location</h3>
            <p className="text">PO Box 123</p>
            <p className="text">Somewhere, TX, United States</p>
        </div>
    )
}

function Contact(){
    return (
        <div className="center column">
            <h3 className='center' style={{marginBottom:'13%'}}>Contact Us</h3>
            <p><a href="mailto:me@example.com" className="text">me@example.com</a></p>
            <p className="text">(555) 555-5555</p>
        </div>
    )
}

function Social(){
    const socials = [
        {
            img: insta,
            link: 'clarktr1.github.io/portfolio'
        },
        {
            img: facebook,
            link: 'clarktr1.github.io/portfolio'
        },
    ]
    return(
            <div className="center footer-social">
                {socials.map((social) =>{
                return  <a href={social.link}>
                            <img src={social.img} alt='Social Link' className="header-social" />
                        </a>
                    })}
            </div>
    )
}






function Footer(){
    return (
        <div className='footer-container'>
            <Grid container spacing={2} style={{padding:'2%'}}>

                <Grid item xs={12} sm={6} className="center">
                    <Location />
                </Grid>

                <Grid item xs={12} sm={6} className="center">
                    <Contact />
                </Grid>
                <Grid item xs={12} className="center" style={{marginTop:'3%'}}>
                    <p className="text">Created by Trey Clark</p>
                </Grid>
            </Grid> 
        </div>
    )
}

export default Footer