import React from 'react'

import instagram from '../images/instagram.svg';
import github from '../images/github.svg';
import twitter from '../images/twitter.svg';
import linkedin from '../images/linkedin.svg';

const Socials = () => {
    return (
        <div className="row">
            <div className="col-sm"><i><img src={instagram} alt="" /></i></div>
            <div className="col-sm"><i><img src={twitter} alt="" /></i></div>
            <div className="col-sm"><i><img src={github} alt="" /></i></div>
            <div className="col-sm"><i><img src={linkedin} alt="" /></i></div>

        </div>
    )
}

export default Socials
