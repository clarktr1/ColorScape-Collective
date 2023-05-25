
import React from 'react'
import contactimg from '../assets/images/contact.jpg'

function ContactForm(){
    return(
        <div className='center contact-left'>
            <h2 className='black title'>Contact</h2>
            <h3 className='black contact-subtitle'>Want to request a mural, sponsor our mission, or just say hi? Fill out the form below and we will get back to you!</h3>
            <form className='center' id="contact-form">
                <label className='contact-label black'>Name <span style={{color: 'gray'}}>(required)</span></label>
                <input className="contact-input"></input>
                <label className='contact-label black'>Email <span style={{color: 'gray'}}>(required)</span></label>
                <input className="contact-input"></input>
                <label className='contact-label black'>Message  <span style={{color: 'gray'}}>(required)</span></label>
                <textarea className="contact-textarea"></textarea>
                <button type='submit' className='btn contact-submit'>Submit</button>
            </form>
        </div>
    )
}

function ContactImage(){
    return(
        <div className='center contact-image'>
            <img className='center' src={contactimg} alt="contact image" />
        </div>
    )
}

function Contact(){
    return(
        <div className='contact-container center'>
           <ContactForm />
           <ContactImage />
        </div>
    )
}

export default Contact