import React from 'react'
import NavItems from './NavItems'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top p-4" style={{backgroundColor: "#0e1630"}} data-bs-theme="dark">
            <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="/">SK Imtiaj Uddin</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavItems />
            </div>
        </nav>
    )
}

export default Navbar
