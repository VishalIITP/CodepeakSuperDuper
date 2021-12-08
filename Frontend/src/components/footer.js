import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineMail, AiFillTwitterCircle} from 'react-icons/ai'
// import {GoLocation} from 'react-icons/go'
import {BsFacebook, BsInstagram} from 'react-icons/bs'
// import { VscGithubInverted } from "react-icons/vsc";
import footer_style from './footer.css'
import nwocLogo from '../pages/Images/nwoc logo.svg'
import guwLogo from '../pages/Images/iitglogo.svg'
export default function footer(props) {
    return (
        <div className="footer" style={footer_style} >
            <div className="foot" style={{ backgroundColor: props.bg ?? ""}}>

                {/* -------- 2 LOGOS------------- */}
                <div className="together">
                    <h1>This time we are together...</h1>
                    <div className="togetherLogo">
                        <img src={nwocLogo} alt="" srcset="" />
                        <p>+</p>
                        <img src={guwLogo} alt="" srcset="" />
                    </div>
                </div>

                {/* ----------QUICK LINKS-------------- */}
                <div className="ql">
                    <h1>Quick Links</h1>
                    <hr className="hiddenHr" />
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/leaderboard">Leaderboard</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/project">Projects</Link></li>
                        <li><Link to="/reward">Rewards</Link></li>
                        <li><Link to="/team">Team</Link></li>            
                    </ul>
                </div>

                {/* ---------------CONTACT-------------- */}
                <div className="contact">
                    <h1>Contact Us</h1>
                    <hr className="hiddenHr" />
                   
                    <div className="ico">    
                        <AiOutlineMail/>
                        <p><a href="mailto:njack@iitp.ac.in" target="_blank"  rel="noreferrer">njack@iitp.ac.in</a></p>
                    </div>
                    <div className="ico">
                        <AiOutlineMail/>
                        <p><a href="mailto:codingclubiitg@gmail.com" target="_blank"  rel="noreferrer">codingclubiitg@gmail.com</a></p>
                    </div>
                    <div className="ico">
                    <BsFacebook/>
                        <p><a href="https://www.facebook.com/codingclubiitg/" target="_blank"  rel="noreferrer">IITG CodingClub</a></p>
                    </div>
                    <div className="ico">
                    <BsFacebook/>
                        <p><a href="https://www.facebook.com/njack.iitp/" target="_blank"  rel="noreferrer">NWOC IITP</a></p>
                    </div>
                    <div className="ico">
                    <AiFillTwitterCircle/>
                        <p><a href="https://twitter.com/njackiitp" target="_blank"  rel="noreferrer">NWOC IITP</a></p>
                    </div>
                    <div className="ico">
                    <BsInstagram/>
                        <p><a href="https://www.instagram.com/codingclubiitg/" target="_blank"  rel="noreferrer">IITG CodingClub</a></p>
                    </div>
                </div>
            </div> 
        </div>
    )
}
