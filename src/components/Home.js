import React from 'react'

const Home = () => {
    const resumeLink = process.env.REACT_APP_RESUME_LINK;

    return (
        <section className="container-fluid d-flex mt-5" id='home' style={{ backgroundColor: "#0e1630", minHeight: "100vh" }} aria-label='home-section'>
            <div className="container home-container d-flex" style={{ height: "75vh", width: "75%" }}>

                <div className="row home" style={{ paddingTop: "20vh" }}>

                    <div className="col-7">
                        <h3>Hello</h3>
                        <h3>I'm SK Imtiaj Uddin</h3>
                        <p>MERN Stack Developer & Competitive Coder</p><br />
                        <p>I’m a final-year B.Tech student majoring in Information Technology, graduating in June 2025. I have hands-on industry experience through multiple internships and strong expertise in full-stack web development. I have developed and worked on production-ready, scalable applications, and I love to solve real-world problems with clean-modular code and smart systems. </p><br />

                        <div className="btn btn-secondary" style={{ backgroundColor: "rgb(220, 13, 13)" }}><a href={resumeLink} target="_blank" rel="noreferrer" style={{ color: 'white' }}>View Resume</a></div>

                    </div>

                    <div className="col-5 rounded-circle">
                        <img className="rounded-circle" src="/profile.jpg" alt="profile" style={{ width: "100%", objectFit: "cover" }} />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Home
