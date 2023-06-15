import React from "react";
import { Container, Typography } from "@mui/material";



function HeroContainer(){
    const tagline = 'Our mission is to spread positivity and inspiration in urban communities through vibrant and uplifting graffiti murals.'
    return(
        <>
            <div className="hero-container center">
            <div className="overlay"></div>
                <div className="hero-content center column">
                    <Typography className="hero-text">{tagline}</Typography>
                    <a href='#Contact' id="request-btn" className="btn">Request a Mural</a>
                </div>
            </div>
        </>
       ) 
}


function Hero(){
   return(
    <>
        <HeroContainer />
    </>
   ) 
}

export default Hero