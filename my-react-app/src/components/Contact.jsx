
import React from 'react'
import { Grid } from '@mui/material'
import contactimg from '../assets/images/contact.jpg'
import {DividerTop, DividerBottom} from './Divider'

function ContactForm(){
    return(
        <div className='center contact-left'>
            <h2 className='black title'>Contact</h2>
            <p className='black contact-subtitle'>Want to request a mural, sponsor our mission, or just say hi? Fill out the form below and we will get back to you!</p>
            <form style={{display:'flex'}} id="contact-form">
                <label className='contact-label black'>Name <span style={{color: 'gray'}}>(required)</span></label>
                <input className="contact-input black"></input>
                <label className='contact-label black'>Email <span style={{color: 'gray'}}>(required)</span></label>
                <input className="contact-input black"></input>
                <label className='contact-label black'>Message  <span style={{color: 'gray'}}>(required)</span></label>
                <textarea className="contact-textarea black"></textarea>
                <button type='submit' className='btn contact-submit'>Submit</button>
            </form>
        </div>
    )
}

function ContactImage(){
    return(
        <div className='center contact-image'>
            <img className='center img' src={contactimg} alt="contact image" />
        </div>
    )
}

function Contact(){
    return(
        <Grid container id='contact' className='contact-container center'>
            <DividerTop />
            <Grid item xs={12} md={6} className='center'>
                <ContactForm />
            </Grid>
            <Grid item xs={12} md={6} className='center'>
                <ContactImage />
            </Grid>
            <DividerBottom />
        </Grid>
    )
}

export default Contact