import React from 'react'
import profile from '../images/batman.jpg';

const Home = () => {
    return (
        <div className="container-fluid d-flex mt-5" style={{ backgroundColor: "#0e1630", height: "100vh" }}>
            <div className="container d-flex home justify-content-center align-items-center w-75" style={{ height: "75vh" }}>

                <div className="row align-items-center justify-content-center" style={{paddingTop: "20vh"}}>
                    {/* <div className="col-1"></div> */}
                    <div className="col-7">
                        <h3>Hello</h3>
                        <h3>I'm SK Imtiaj Uddin</h3>
                        <p>MERN Stack Developer & Competitive Coder</p><br />
                        <p>I'm an Intermediate-Level Developer Specializing in the MERN Stack. I am sharpening my expertise in the MERN stack - MongoDB, Express.js, React.js, and Node.js, to deliver sophisticated, scalable, and dynamic web applications.
                            Good understanding of DSA and OOPs. Proficient in C++, Java and Python. </p>

                    </div>
                    {/* <div className="col-1"></div> */}
                    <img src={profile} alt="profile" className="col-5 rounded-circle" style={{ height: "430px", objectFit: "cover" }} />
                </div>

            </div>
        </div>
    )
}

export default Home
