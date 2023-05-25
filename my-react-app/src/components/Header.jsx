import React from "react"
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'



 function Container(){
    return (
        <nav style={{height: '10vh', width: '100%', background:'#111', margin:'0', display: 'flex', alignItems:'center'}}>
            <div className="header-title">
                <h1 className="title">ColorScape Collective</h1>
            </div>
            <div className="header-actions">
                <img alt="@riajulislam" className="header-social" src={facebook}></img>
                <img alt="@Grow studio" className="header-social" src={instagram}></img>
                <button className="btn">Get Started</button>
            </div>
        </nav>
    )
}


function Header() {
    return(
        <>
            <Container />
        </>
    )
};

export default Header