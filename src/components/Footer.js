import React from 'react'
import emailjs from '@emailjs/browser'

import location from '../images/location.svg'
import mail from '../images/mail.svg'
import send from '../images/send.svg'

const Footer = () => {
    const service_key = process.env.REACT_APP_SERVICE_KEY;
    const email_template = process.env.REACT_APP_EMAIL_TEMPLATE;
    const public_key = process.env.REACT_APP_PUBLIC_KEY;

    const sendMessage = (e) => {

        e.preventDefault();
        
        const user_name = document.getElementById("nameInput").value;
        const user_email = document.getElementById("emailInput").value;
        const message = document.getElementById("messageInput").value;

        document.getElementById("contactForm").reset();
        
        const data = {
            user_name,
            user_email,
            message
        }
        
        emailjs
            .send(service_key, email_template, data, {
                publicKey: public_key,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert("Mail sent...!");
                },
                (error) => {
                    console.log('FAILED...', error);
                },
            );

    }
    return (
        <section className="container-fluid" id='footer' style={{ backgroundColor: "#040c27", minHeight: "50vh" }} aria-label='footer-section'>
            <div className="container w-75 p-4">
                <div className="row" style={{ padding: "15px" }}>

                    <div className="info col-5 p-2 m-auto">
                        <div className="location d-flex flex-row">
                            <i><img src={location} alt="location" /></i>
                            <h5>Kolkata, West Bengal</h5>
                        </div>
                        <div className="mail d-flex flex-row">
                            <i><img src={mail} alt="mail" /></i>
                            <h5>imtiaj.kol@gmail.com</h5>
                        </div>
                    </div>

                    <div className="contact col-7 p-2">
                        <form id='contactForm' onSubmit={sendMessage}>
                            <fieldset className="border rounded">
                                <legend className="float-none">Leave a Message</legend>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="nameInput" placeholder="Your Name" required/>
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="emailInput" placeholder="email@example.com" required/>
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control" id="messageInput" rows="3" required></textarea>
                                </div>
                                <div>
                                    <button className="btn text-white" type="submit" style={{ width: "100px" }}>
                                        <i><img src={send} alt='send-button' /></i>
                                        <span className='ms-2'>Send</span>
                                    </button>
                                </div>
                            </fieldset>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer
