import React from 'react'

import instagram from '../images/instagram.svg';
import github from '../images/github.svg';
import twitter from '../images/twitter.svg';
import linkedin from '../images/linkedin.svg';

const Socials = () => {
    return (
        <div className="row">
            <div className="col-sm"><a className='item-link' target='_blank' rel="noreferrer" href='https://www.instagram.com/soul.survivor_27/'><i><img src={instagram} alt="instagram" /></i></a></div>
            <div className="col-sm"><a className='item-link' target='_blank' rel="noreferrer" href='https://twitter.com/imtiaj_007'><i><img src={twitter} alt="twitter" /></i></a></div>
            <div className="col-sm"><a className='item-link' target='_blank' rel="noreferrer" href='https://github.com/imtiaj-007'><i><img src={github} alt="github" /></i></a></div>
            <div className="col-sm"><a className='item-link' target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/sk-imtiaj-uddin-b26432254/'><i><img src={linkedin} alt="linkedin" /></i></a></div>

        </div>
    )
}

export default Socials
