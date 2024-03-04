import React from 'react'
import location from '../images/location.svg'
import mail from '../images/mail.svg'

const Footer = () => {
    return (
        <div className="container-fluid" id='footer' style={{ backgroundColor: "#040c27", minHeight: "50vh" }}>
            <div className="container w-75 p-4">
                <div className="row" style={{ padding: "15px" }}>
                    
                    <div className="info col-5 p-2 m-auto">
                        <div className="location d-flex flex-row">
                            <i><img src={location} alt="location"/></i>
                            <h5>Kolkata, West Bengal</h5>
                        </div>
                        <div className="mail d-flex flex-row">
                            <i><img src={mail} alt="mail"/></i>
                            <h5>imtiaj.kol@gmail.com</h5>
                        </div>
                    </div>

                    <div className="contact col-7 p-2">
                        <form>
                            <fieldset className="border rounded">
                                <legend className="float-none">Leave a Message</legend>
                                <div class="mb-3">
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                                </div>
                                <div class="mb-3">
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email@example.com" />
                                </div>
                                <div>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </fieldset>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
