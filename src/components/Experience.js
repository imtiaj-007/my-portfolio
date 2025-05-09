import React from 'react'
import clock from '../images/clock.svg'
import location from '../images/location.svg'

const Experience = () => {
    return (
        <div className="container-fluid" id='experience' style={{ backgroundColor: "#0e1630", minHeight: "75vh", paddingTop: "12vh" }}>
            <div className="container exp-container p-4">
                <h3 className="text-center mb-5">Experience</h3>
                <div className="row flex-column g-4">

                    <div className="col-sm">
                        <div className="container d-flex">
                            <div className="row exp">
                                <div className="col-md-6 text-start">
                                    <h4>Workwise</h4>
                                    <p>Software Developer Intern</p>
                                </div>
                                <div className="col-md-6 d-md-flex justify-content-between">
                                    <div className="d-flex align-items-center gap-1">
                                        <i><img src={location} alt="location" width={20} height={20} /></i>
                                        <p>Bangalore</p>
                                    </div>

                                    <div className="d-flex align-items-center gap-1">
                                        <i><img src={clock} alt="clock" width={24} height={24} /></i>
                                        <p>August 2024 - January 2025</p>
                                    </div>
                                </div>
                                <hr
                                    className="my-2 opacity-100"
                                    style={{
                                        height: "1px",
                                        backgroundColor: "#FFF",
                                        border: "none",
                                    }}
                                />
                                <div className="col-md-12 text-start">
                                    <ul>
                                        <li>Developed and enhanced features for the user dashboard, technical evaluation, query management, and RFQ
                                            management modules using Next.js, Node.js, and PostgreSQL, improving user workflow efficiency.</li>
                                        <li>Collaborated on performance optimizations, reducing page load times by 25%, enhancing API response efficiency
                                            and implemented robust error handling, reducing system downtime by 40%.</li>
                                        <li>Actively participated in sprint planning, reviews, and daily stand-ups to deliver project on time.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className="container d-flex">
                            <div className="row exp">
                                <div className="col-md-6 text-start">
                                    <h4>NIT Durgapur</h4>
                                    <p>Project Developer Intern</p>
                                </div>
                                <div className="col-md-6 d-md-flex justify-content-between">
                                    <div className="d-flex align-items-center gap-1">
                                        <i><img src={location} alt="location" width={20} height={20} /></i>
                                        <p>Remote</p>
                                    </div>

                                    <div className="d-flex align-items-center gap-1">
                                        <i><img src={clock} alt="clock" width={24} height={24} /></i>
                                        <p>May 2024 - July 2024</p>
                                    </div>
                                </div>
                                <hr
                                    className="my-2 opacity-100"
                                    style={{
                                        height: "1px",
                                        backgroundColor: "#FFF",
                                        border: "none",
                                    }}
                                />
                                <div className="col-md-12 text-start">
                                    <ul>
                                        <li>Contributed to a MERN stack telemedicine platform to facilitate doctor consultations for remote healthcare access.</li>
                                        <li>Built a system to manage medicine inventory, ensuring efficient tracking and availability of supplies.</li>
                                        <li>Automated the prescription generation process, reducing manual effort and improving accuracy.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
