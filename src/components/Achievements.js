import React from 'react'
import arrow from '../images/right-arrow.svg'


const Achievements = () => {
    return (

        <div className="container-fluid" id='achievements' style={{ backgroundColor: "#0e1630", minHeight: "75vh", paddingTop: "15vh" }}>
            <div className="container p-4">
                <h3 className="text-center mb-5">Achievements</h3>
                <div className="row g-2 p-3 align-items-center achievements">
                    <div className="col-1"></div>
                    <div className="col-6">
                        <ul>
                            <li>750+ problems solved in Leetcode</li>
                            <li>700+ problems solved in Geeksforgeeks</li>
                            <li>350+ problems solved in Codechef</li><br />
                            <li>Secured 3rd place in Inter-College Coding Competition ‘League of Errors’ is association with Coding Ninjas</li>
                            <li>Secured 57th rank in CodingNinjasStudio Weekend Contest 88</li>
                            <li>Secured 121 rank in GFG Weekly Coding Contest 129</li>
                            <li>Secured 335 Global rank in Codechef Starters 99 Contest</li><br />
                            <li>Among Top 5 coders in Geeksforgeeks from my Institute.</li>
                            <li>Highest Leetcode Contest Rating 1695 ( Top 13.16 % )</li>
                            <li>CodingNinjasStudio Weekend Contest rating 3775 ( Better than 99% )</li>
                        </ul>
                    </div>

                    <div className="col-1"></div>
                    <div className="col-4 flex-end">
                        <div className="row flex-column c-profiles" style={{ gap: "1.5rem"}}>
                            <div className="col-sm">
                                <div className="btn btn-secondary">
                                    <a target='_blank' rel="noreferrer" href='https://leetcode.com/imtiaj007/'>
                                        LeetCode profile
                                        <i className='mx-2'><img src={arrow} alt="arrow" /></i></a>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="btn btn-secondary">
                                    <a target='_blank' rel="noreferrer" href='https://auth.geeksforgeeks.org/user/imtiaj007/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user'>
                                        GeeksForGeeks profile
                                        <i className='mx-2'><img src={arrow} alt="arrow" /></i></a>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="btn btn-secondary">
                                    <a target='_blank' rel="noreferrer" href='https://www.codechef.com/users/imtiaj007'>
                                        CodeChef profile
                                        <i className='mx-2'><img src={arrow} alt="arrow" /></i></a>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="btn btn-secondary">
                                    <a target='_blank' rel="noreferrer" href='https://www.codingninjas.com/studio/profile/imtiaj007'>
                                        CodingNinjas profile
                                        <i className='mx-2'><img src={arrow} alt="arrow" /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Achievements
