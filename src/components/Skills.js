import React from 'react'

const Skills = () => {
    return (
        <div className="container-fluid" id='skills' style={{ backgroundColor: "#0e1630", height: "70vh", paddingTop: "15vh" }}>
            <div className="container d-flex flex-column align-items-center p-4">
                <h3 className="text-center mb-5">Skills</h3>
                <div className="d-flex w-100">
                    <div className="row skills m-auto">
                        <div className="col-sm ele-1">
                            <ul>
                                <h4>Languages</h4>
                                <li>C</li>
                                <li>C++</li>
                                <li>Java</li>
                                <li>Python</li>
                            </ul>
                        </div>
                        <div className="col-sm ele-2">
                            <ul>
                                <h4>Web Technologies</h4>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Javascript</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                        <div className="col-sm ele-1">
                            <ul>
                                <h4>Tech Stack</h4>
                                <li>React Js</li>
                                <li>Node Js</li>
                                <li>Express Js</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                        <div className="col-sm ele-2">
                            <ul>
                                <h4>Others</h4>
                                <li>Data Structures</li>
                                <li>Algorithms</li>
                                <li>MySQL</li>
                                <li>Git & GitHub</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills
