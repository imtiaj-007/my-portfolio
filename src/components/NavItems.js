import React from 'react'
import Socials from './Socials'

const NavItems = () => {
    return (
        <div className="container d-flex">
            <div className='container me-4' style={{ width: "60%" }}>
                <div class="row nav-items">

                    <div className="col-2"><a aria-current="page" href="/home">Home</a></div>
                    <div className="col-2"><a href="/education">Education</a></div>
                    <div className="col-2"><a href="/achievements">Achievements</a></div>
                    <div className="col-2"><a href="/projects">Projects</a></div>

                    <div className="col-4" style={{ borderLeft: "2px solid rgb(128 141 173)" }}><Socials /></div>

                </div>
            </div>
        </div>
    )
}

export default NavItems
