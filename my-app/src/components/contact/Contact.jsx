import React, { useRef, useState, useContext } from 'react'
import './contact.css'
import Phone from '../../img/phone.svg'
import Email from '../../img/gmail.svg'
import Address from '../../img/location.svg'
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_8m4ntfd', 'template_ssqoj5b', formRef.current, 'user_N8pQPERZmbJGYFunFaCMR')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                          <img src={Phone} alt="phone" className="c-icon" />
                        +95 9780069778
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="email" className="c-icon" />
                        poephayound18@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={Address} alt="address" className="c-icon" />
                        Banmaw, Kachin State, Myanmar
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story?</b>Get in touch.Always available for freelancing if
                    the right project comes along me
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                    <input style={{backgroundColor: darkMode && "#333"}}  type="text" placeholder="Email" name="user-email" />
                    <input style={{backgroundColor: darkMode && "#333"}}  type="text" placeholder="Subject" name="user-subject" />
                    <textarea style={{backgroundColor: darkMode && "#333"}}  rows="5" placeholder="Message" name="message"/>
                    <button>Submit</button>
                </form>
                {done && "Thank you..."}
            </div>
        </div>
    </div>
  )
}

export default Contact