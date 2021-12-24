import React from 'react';
import Animatedbg from "../../components/Animatedbg";
import Navigation from "../../components/Navigation";
import Footer from "../../components/footer";
import { Link } from 'react-router-dom';
import classes from './profile_mentor_2.module.css';
import { FaGithub, FaShare } from 'react-icons/fa';
import { AiFillLinkedin, AiFillMail } from 'react-icons/ai'

const profile_mentor_2 = () => {
    return (
        <div>
            <Navigation />
            <Animatedbg />
            <div className={classes["profile-mentor"]}>
                <div className={classes["profile-btn"]}>
                    <Link to="/login/profile/profile_mentor">
                        <button className={classes["profile-active"]}>Personal Details</button>
                    </Link>
                    <Link to="/login/profile/edit_mentor">
                        <button>Edit profile</button>
                    </Link>
                    <Link to="/login/profile/dashboard_mentor">
                        <button>Dashboard</button>
                    </Link>
                </div>
                <div className={classes["profile-wrapper"]}>
                    <div className={classes["left"]}>
                        <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="user" />
                        <div className={classes["left-info"]}>
                            <h4>Shubham Mondal</h4>
                            <p>B.Tech IIT Guwahati</p>
                        </div>
                    </div>
                    <div className={classes["right"]}>
                        <div className={classes["info"]}>
                            <h3>Information</h3>
                            <div className={classes["info_data"]}>
                                <div className={classes["info-data-sub"]}>
                                    <h4>Email</h4>
                                    <p>shm@iitg.ac.in</p>
                                </div>
                                <div className={classes["info-data-sub"]}>
                                    <h4>Phone</h4>
                                    <p>+91-9876543210</p>
                                </div>
                            </div>
                        </div>

                        <div className={classes["projects"]}>
                            <h3>Projects</h3>
                            <div className={classes["projects-data"]}>
                                <div className={classes["projects-data-sub"]}>
                                    <p><FaShare />Assesment App</p>
                                </div>
                                <div className={classes["projects-data-sub"]}>
                                    <p><FaShare />Interview Tracker</p>
                                </div>
                            </div>
                        </div>

                        <div className={classes["social_media"]}>
                            <ul className={classes["social-links"]}>
                                <li><Link to="/"><FaGithub /></Link></li>
                                <li><Link to="/"><AiFillLinkedin /></Link></li>
                                <li><Link to="/"><AiFillMail /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default profile_mentor_2