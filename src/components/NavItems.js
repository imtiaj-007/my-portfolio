import React from 'react'
import Socials from './Socials'

const NavItems = () => {
    return (
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className='container nav-div me-4'>
                <div className="row nav-items">

                    <div className="col-sm"><a aria-current="page" href="#home">Home</a></div>
                    <div className="col-sm"><a href="#education">Education</a></div>
                    <div className="col-sm"><a href="#achievements">Achievements</a></div>
                    <div className="col-sm"><a href="#projects">Projects</a></div>
                    <div className="col-sm"><a href="#skills">Skills</a></div>

                    <div className="col-3 socials" style={{ borderLeft: "2px solid rgb(128 141 173)" }}><Socials /></div>

                </div>
            </div>
        </div>
    )
}

export default NavItems
