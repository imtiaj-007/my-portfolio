import React from 'react'

const Skills = () => {
    return (
        <div className="container-fluid" id='skills' style={{ backgroundColor: "#0e1630", height: "50vh", paddingTop: "15vh" }}>
            <div className="container d-flex flex-column align-items-center p-4">
                <h3 className="text-center mb-5">Skills</h3>
                <div className="d-flex w-100">
                    <table className="table table-borderless w-75 m-auto">
                        <thead>
                            <tr>
                                <td>Languages</td>
                                <td>Web Technologies</td>
                                <td>Tech Stack</td>
                                <td>Others</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>C</td>
                                <td>HTML5</td>
                                <td>React JS</td>
                                <td>Data Structures</td>
                            </tr>
                            <tr>
                                <td>C ++</td>
                                <td>CSS3</td>
                                <td>Node JS</td>
                                <td>Algorithms</td>
                            </tr>
                            <tr>
                                <td>Java</td>
                                <td>Javascript</td>
                                <td>Express JS</td>
                                <td>Bootstrap</td>
                            </tr>
                            <tr>
                                <td>Python</td>
                                <td></td>
                                <td>MongoDB</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Skills
