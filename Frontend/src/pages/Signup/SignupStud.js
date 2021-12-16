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
    return (
      <div>
        <Navigation />
        <Animatedbg />
        <div className="containersign">
          <h1>
            Sign Up <span>Participant</span>
          </h1>
          <form method="post" action="">
            <div className="box">
              <label for="email">Enter Your email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="box">
              <label for="fname">Enter Your First Name</label>
              <input type="text" name="fname" id="fname" />
            </div>
            <div className="box">
              <label for="lname">Enter Your Last Name</label>
              <input type="text" name="lname" id="lname" />
            </div>
            <div className="box">
              <label for="phone">Enter Your Phone/Whatsapp Number</label>
              <input type="tel" name="phone" id="phone" />
            </div>
            <div className="box">
              <label for="webemail">Enter Your Institute email</label>
              <input type="email" name="webemail" id="webemail" />
            </div>
            <div className="box">
              <label for="institute">
                Enter Your Institute/ University name
              </label>
              <input type="text" name="institute" id="institute" />
            </div>
            <div className="box">
              <label for="github">
                Enter Your GitHub profile URL (eg: https://github.com/madris112)
              </label>
              <input type="url" name="github" id="github" />
            </div>
            <div className="box">
              <label for="gitlab">Enter Your GitLab profile URL</label>
              <input type="url" name="gitlab" id="gitlab" />
            </div>
            <div className="box">
              <label for="pUrl">
                Enter Your other profile URL (Bitbucket/LinkedIn/personal
                website)
              </label>
              <input type="url" name="pUrl" id="pUrl" />
            </div>
            <div className="box2">
              <label for="fresher" className="chklabel">
                First Time participant of NWoC/ Code Peak{" "}
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
                style={{ marginLeft: "10px" }}
              />
            </div>

            <div className="box">
              <label for="refcode">Refferal Code (if any)</label>
              <input type="text" name="refcode" id="refcode" />
            </div>
            <div className="box2">
              <p>
                For communication purposes, it is mandatory to join the codepeak
                discord server. Join the server{" "}
                <a href="https://discord.gg/xhQ9N9Z3jc" target="_blank">
                  here{" "}
                </a>
              </p>
              <p>
                For Student guide, refer{" "}
                <a
                  href="https://www.google.com/url?q=https://bit.ly/3c9UkPA&sa=D&source=editors&ust=1639069733320000&usg=AOvVaw2AI_gSUwoDqMEXkUkGRhM3"
                  target="_blank"
                >
                  here{" "}
                </a>
              </p>
            </div>
            <button className="btnsign" type="submit">Register</button>
          </form>
        </div>
        <div className="mt"></div>
        <div class="footpage">
          <Footer />
        </div>
      </div>
    );
}

export default Signup
