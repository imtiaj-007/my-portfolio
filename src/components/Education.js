import React from 'react'
import city from '../images/city.svg'
import hat from '../images/hat.svg'

const Education = () => {
    return (
        <section className="container-fluid" id='education' style={{ backgroundColor: "#0e1630", minHeight: "75vh", paddingTop: "15vh" }} aria-label='education-section'>
            <div className="container edu-container p-4">
                <h3 className="text-center mb-5">Education</h3>
                <div className="row flex-column g-4">

                    <div className="col-sm">
                        <div className="container d-flex">
                            <div className="row edu">
                                <div className="col-2 city">
                                    <i><img src={city} alt="city" /></i>
                                    <p>Kolkata</p>
                                </div>
                                <div className="col-8">
                                    <h4>Budge Budge Institute of Technology</h4>
                                    <p>B. Tech in Information Technology</p>
                                    <ul className='CGPA'>
                                        <li>2022 - 2025</li>
                                        <li>Percentage : 71.3%</li>
                                        <li>CGPA : 7.4</li>
                                    </ul>
                                </div>
                                <div className="col-2">
                                    <i><img src={hat} alt="hat" /></i>
                                    <p>Bachelor's</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className="container d-flex">
                            <div className="row edu">
                                <div className="col-2 city">
                                    <i><img src={city} alt="city" /></i>
                                    <p>Kolkata</p>
                                </div>
                                <div className="col-8">
                                    <h4>The Calcutta Technical School</h4>
                                    <p>Diploma in Computer Science & Technology</p>
                                    <ul className='CGPA'>
                                        <li>2019 - 2022</li>
                                        <li>Percentage : 80.8%</li>
                                        <li>CGPA : 8.4</li>
                                    </ul>
                                </div>
                                <div className="col-2">
                                    <i><img src={hat} alt="hat" /></i>
                                    <p>Diploma</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className="container d-flex">
                            <div className="row edu">
                                <div className="col-2 city">
                                    <i><img src={city} alt="city" /></i>
                                    <p>Kolkata</p>
                                </div>
                                <div className="col-8">
                                    <h4>Barisha Sashibhusan Janakalyan Vidyapith</h4>
                                    <p>Higher Secondary Examination</p>
                                    <ul className='CGPA'>
                                        <li>2017 - 2019</li>
                                        <li>Percentage : 65.2%</li>
                                        <li>CGPA : --</li>
                                    </ul>
                                </div>
                                <div className="col-2">
                                    <i><img src={hat} alt="hat" /></i>
                                    <p>High School</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Education
