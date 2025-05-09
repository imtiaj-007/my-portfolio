import React from 'react'
import Socials from './Socials'
import { useSectionObserver } from '../hooks/observer';

const NavItems = () => {
    const sectionIds = ["home", "education", "experience", "achievements", "projects", "skills"];
    const activeId = useSectionObserver(sectionIds);

    return (
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className='container nav-div me-4'>
                <ul className="row nav-items mb-0">
                    {
                        sectionIds.map(secID => {
                            const itemActive = activeId === secID;
                            return (
                                <li key={secID} className="col-sm nav-item text-capitalize" >
                                    <a
                                        aria-current="page"
                                        href={`#${secID}`}
                                        className={`position-relative ${itemActive ? 'active' : ''}`}
                                        style={{ color: itemActive ? "#01d293" : "" }}
                                    >
                                        {secID}
                                        <span className="underline"></span>
                                    </a>
                                </li>
                            );
                        })
                    }
                    <div className="col-3 socials" style={{ borderLeft: "2px solid rgb(128 141 173)" }}><Socials /></div>
                </ul>
            </div>
        </div>
    )
}

export default NavItems
