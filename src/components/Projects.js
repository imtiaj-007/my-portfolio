import React from 'react'
import music from '../personal/music-player.png'
import newsdesk from '../personal/newsdesk.png'
import portfolio from '../personal/portfolio.png'
import prev from '../images/prev-button.svg'
import next from '../images/next-button.svg'


const Projects = () => {
    return (
        <div className="container-fluid" id='projects' style={{ backgroundColor: "#0e1630", height: "100vh", paddingTop: "12vh" }}>
            <div className="container d-flex flex-column align-items-center p-4">
                <h3 className="text-center mb-4">Projects</h3>
                <div className="d-flex w-75 carousel-container">
                    <div id="carousel" className="carousel slide m-auto" data-bs-ride="carousel">
                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <div className="card d-block w-100">
                                    <div className="card-body">
                                        <img src={music} className="card-img-top" alt="music-player" />
                                    </div>
                                    <div className="card-footer">
                                        <h4 className="card-title">Music Player Clone [ Using HTML, CSS, JS ]</h4>
                                        <a href="https://music-player-clone.infinityfreeapp.com/?i=1" target="_blank" rel="noreferrer" className="btn btn-primary">Visit Site</a>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="card d-block w-100">
                                    <div className="card-body">
                                        <img src={newsdesk} className="card-img-top" alt="newsdesk" />
                                    </div>
                                    <div className="card-footer">
                                        <h4 className="card-title">NewsDesk [ Using React Js, GNews API, Bootstrap ]</h4>
                                        <a href="https://news-desk.netlify.app/" target="_blank" rel="noreferrer" className="btn btn-primary">Visit Site</a>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="card d-block w-100">
                                    <div className="card-body">
                                        <img src={portfolio} className="card-img-top" alt="portfolio" />
                                    </div>
                                    <div className="card-footer">
                                        <h4 className="card-title">My Portfolio Site [ Using React Js, Bootstrap ]</h4>
                                        <a href="#todo" target="_blank" rel="noreferrer" className="btn btn-primary">Visit Site</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                            <span className="prev-icon" aria-hidden="true"><div className="prev-button"><img src={prev} alt="prev-button"/></div></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                            <span className="next-icon" aria-hidden="true"><div className="next-button"><img src={next} alt="next-button"/></div></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Projects
