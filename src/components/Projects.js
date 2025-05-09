import React from 'react'
import music from '../personal/music-player.png'
import newsdesk from '../personal/newsdesk.png'
import cleanEnergy from '../personal/clean-energy.png'
import objectVision from '../personal/object-vision.png'
import prev from '../images/prev-button.svg'
import next from '../images/next-button.svg'


const Projects = () => {

    return ( 
        <section className="container-fluid" id='projects' style={{ backgroundColor: "#0e1630", minHeight: "75vh", paddingTop: "12vh" }} aria-label='project-section'>
            <div className="container d-flex flex-column align-items-center p-4">
                <h3 className="text-center mb-4">Projects</h3>
                <div className="d-flex w-75 carousel-container">
                    <div id="carousel" className="carousel slide m-auto" data-bs-ride="carousel">
                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <div className="card d-block w-100">
                                    <div className="card-body">
                                        <img src={objectVision} className="card-img-top" alt="portfolio" />
                                    </div>
                                    <div className="card-footer">
                                        <h4 className="card-title">Object Vision [ Using MERN, Next.js, FastAPI ]</h4>
                                        <a href="https://object-vision-frontend.vercel.app" target="_blank" rel="noreferrer" className="btn btn-primary">Visit Site</a>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="card d-block w-100">
                                    <div className="card-body">
                                        <img src={cleanEnergy} className="card-img-top" alt="portfolio" />
                                    </div>
                                    <div className="card-footer">
                                        <h4 className="card-title">Clean Energy [ Using MERN Stack, Bootstrap ]</h4>
                                        <a href="https://clean-energy-frontend.netlify.app" target="_blank" rel="noreferrer" className="btn btn-primary">Visit Site</a>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="card d-block w-100">
                                    <div className="card-body">
                                        <img src={music} className="card-img-top" alt="music-player" />
                                    </div>
                                    <div className="card-footer">
                                        <h4 className="card-title">Music Player Clone [ Using HTML, CSS, JS ]</h4>
                                        <a href="https://music-player-clone.infinityfreeapp.com" target="_blank" rel="noreferrer" className="btn btn-primary">Visit Site</a>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="card d-block w-100">
                                    <div className="card-body">
                                        <img src={newsdesk} className="card-img-top" alt="newsdesk" />
                                    </div>
                                    <div className="card-footer">
                                        <h4 className="card-title">NewsDesk [ Using React Js, GNews API ]</h4>
                                        <a href="https://news-desk.netlify.app" target="_blank" rel="noreferrer" className="btn btn-primary">Visit Site</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                            <span className="prev-icon" aria-hidden="true"><div className="prev-button"><img src={prev} alt="prev-button" /></div></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                            <span className="next-icon" aria-hidden="true"><div className="next-button"><img src={next} alt="next-button" /></div></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Projects
