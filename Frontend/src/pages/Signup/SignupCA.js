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
      <>
        <div>
          <Navigation />
          <Animatedbg />
          <div className="containersign">
            <h1>
              Sign Up <span>Campus Ambassador</span>
            </h1>
            <form method="post" action="http://localhost:3100/register/signup/ca">
              <div className="box">
                <label for="name">Enter Your Full Name</label>
                <input type="text" name="name" id="name" />
              </div>

              <div className="box">
                <label for="email">Enter Your Email</label>
                <input type="email" name="email" id="email" />
              </div>

              <div className="box">
                <label for="password">Enter Password</label>
                <input type="password" name="password" id="password" />
              </div>

              <div className="box">
                <label for="password2">Confirm Password</label>
                <input type="password" name="password2" id="password2" />
              </div>

              <div className="box">
                <label for="college_name">Enter Your College Name</label>
                <input type="text" name="college_name" id="college_name" />
              </div>
              <div className="box">
                <label for="college_id">Enter Your College Id</label>
                <input type="text" name="college_id" id="college_id" />
              </div>
              <div className="box">
                <label for="phone">Enter Your Phone/Whatsapp Number</label>
                <input type="tel" name="phone" id="phone" />
              </div>

              <div className="box2">
                <label for="fresher" className="chklabel">
                  First Time participating as Campus Ambassador of NWoC/ Code
                  Peak{" "}
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  aria-label="Checkbox for following text input"
                  style={{ marginLeft: "10px" }}
                />
              </div>

              <div className="box2">
                <p>
                  For communication purposes, it is mandatory to join the
                  codepeak discord server. Join the server{" "}
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
        </div>
        <Footer />
      </>
    );
}

export default Signup
