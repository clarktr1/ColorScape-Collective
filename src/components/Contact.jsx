
import React, {useState} from 'react'
import { Grid } from '@mui/material'
import contactimg from '../assets/images/contact.jpg'
import {DividerTop, DividerBottom} from './Divider'
import {Alert} from '@mui/material/';

function ContactForm(){

    const [loading, isLoading] = useState(false)
    const [name, isName] = useState('')
    const [email, isEmail] = useState('')
    const [message, isMessage] = useState('')

    function submitHandler(event){
        event.preventDefault()
        const contactA = {
            name: name,
            email: email,
            message: message
        }
        console.log(contactA)

        isName('')
        isEmail('')
        isMessage('')

        isLoading(true)

        setTimeout(() => {
            isLoading(false)
        }, 3000)
    }

    return(
        <div className='center contact-left'>
            <h2 className='black title'>Contact</h2>
            <p className='black contact-subtitle'>Want to request a mural, sponsor our mission, or just say hi? Fill out the form below and we will get back to you!</p>
            {loading === true?<Alert variant="filled" severity="success" >This is just a test for success!</Alert>:<></>}
            <form style={{display:'flex'}} id="contact-form">
                <label className='contact-label black'>Name <span style={{color: 'gray'}}>(required)</span></label>
                <input type='name' className="contact-input black" onChange={(event) => isName(event.target.value)} value={name} required></input>
                <label className='contact-label black'>Email <span style={{color: 'gray'}}>(required)</span></label>
                <input type='email' className="contact-input black" onChange={(event) => isEmail(event.target.value)} value={email} required></input>
                <label className='contact-label black'>Message  <span style={{color: 'gray'}}>(required)</span></label>
                <textarea type='text' className="contact-textarea black" onChange={(event) => isMessage(event.target.value)} value={message} required></textarea>
                <button onClick={submitHandler} type='submit' className='btn contact-submit'>Submit</button>
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
        <Grid container id='Contact' className='contact-container center'>
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