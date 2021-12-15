import React, {useEffect} from 'react'
import Animatedbg from '../../components/Animatedbg'
import Navigation from '../../components/Navigation'
import Footer from '../../components/footer'
import "./style2.css"

// signup component for CODEPEAK webisite made by aritroCoder

const Signup = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return ( <>
        <div>
            <Navigation />
            <Animatedbg />
            <div className="containersign">
                <h1>Sign Up <span>Campus Ambassador</span></h1>
                
                <div className="box">
                    <label for="fname">Enter Your Full Name</label>
                    <input
                        type="text"
                        name="fname"
                        id="fname"

                    />
                </div>

                <div className="box">
                    <label for="email">Enter Your Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"

                    />
                </div>


                <div className="box">
                    <label for="institute">Enter Your College Name</label>
                    <input
                        type="text"
                        name="institute"
                        id="institute"

                    />
                </div>
                <div className="box">
                    <label for="institute">Enter Your College Id</label>
                    <input
                        type="text"
                        name="institute"
                        id="institute"

                    />
                </div>
                <div className="box">
                    <label for="phone">Enter Your Phone/Whatsapp Number</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"

                    />
                </div>


                <div className="box2">

                    <label for="fresher" className="chklabel">First Time participating as Campus Ambassador of NWoC/ Code Peak </label>
                    <input className="form-check-input" type="checkbox" value="" aria-label="Checkbox for following text input" style={{marginLeft: "10px"}}/>

                </div>


                <div className="box2">
                    <p>For communication purposes, it is mandatory to join the codepeak discord server.
                        Join the server <a href="https://discord.gg/xhQ9N9Z3jc" target="_blank">here </a></p>
                    <p>For Student guide, refer <a href="https://www.google.com/url?q=https://bit.ly/3c9UkPA&sa=D&source=editors&ust=1639069733320000&usg=AOvVaw2AI_gSUwoDqMEXkUkGRhM3" target="_blank">here </a></p>
                </div>
                <button className="btnsign">Register</button>
            </div>
            <div className="mt"></div>
            
        </div>
        <Footer/>
       </>
    )
}

export default Signup
