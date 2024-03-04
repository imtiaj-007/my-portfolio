import React from 'react'
import profile from '../images/profile.jpg'
import resume from '../cResume.pdf'


const Home = () => {
    return (
        <div className="container-fluid d-flex mt-5" id='home' style={{ backgroundColor: "#0e1630", height: "100vh" }}>
            <div className="container home-container d-flex" style={{ height: "75vh", width: "75%" }}>
                
                <div className="row home" style={{paddingTop: "20vh"}}>
                    
                    <div className="col-7">
                        <h3>Hello</h3>
                        <h3>I'm SK Imtiaj Uddin</h3>
                        <p>MERN Stack Developer & Competitive Coder</p><br />
                        <p>I'm an Intermediate-Level Developer Specializing in the MERN Stack. I am sharpening my expertise in the MERN stack - MongoDB, Express.js, React.js, and Node.js, to deliver sophisticated, scalable, and dynamic web applications.
                            Good understanding of DSA and OOPs. Proficient in C++, Java and Python. </p><br/>
                        
                        <div className="btn btn-secondary" style={{backgroundColor: "rgb(220, 13, 13)"}}><a href={resume} target="_blank" rel="noreferrer" style={{color: 'white'}}>View Resume</a></div>

                    </div>

                    <div className="col-5 rounded-circle">
                        <img className="rounded-circle" src={profile} alt="profile" style={{ width: "100%", objectFit: "cover" }} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
