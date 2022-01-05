import React, { useEffect } from "react";
import Animatedbg from "../../components/Animatedbg";
import Navigation from "../../components/Navigation";
import Footer from "../../components/footer";
import "./style2.css";

// signup component for CODEPEAK webisite made by aritroCoder

const Signup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navigation />
      <Animatedbg />
      <div className="containersign">
        <h1>
          Sign Up <span>Mentor</span>
        </h1>
        <form method="post" action="http://localhost:3100/register/signup/mentor">
          <div className="box">
            <label for="email">Enter Your email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="box">
            <label for="password">Enter Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="box">
            <label for="password2">Confirm password</label>
            <input type="password" name="password2" id="password2" />
          </div>
          <div className="box">
            <label for="firstName">Enter Your First Name</label>
            <input type="text" name="firstName" id="firstName" />
          </div>
          <div className="box">
            <label for="secondName">Enter Your Last Name</label>
            <input type="text" name="secondName" id="secondName" />
          </div>
          <div className="box">
            <label for="phone">Enter Your Phone/Whatsapp Number</label>
            <input type="tel" name="phone" id="phone" />
          </div>
          <div className="box">
            <label for="college_name">
              Enter Your Institute/ University/Organization/Company name
            </label>
            <input type="text" name="college_name" id="college_name" />
          </div>
          <div className="box">
            <label for="github_url">
              Enter Your GitHub profile URL (eg: https://github.com/madris112)
            </label>
            <input type="url" name="github_url" id="github_url" />
          </div>
          <div className="box">
            <label for="gitlab_url">Enter Your GitLab profile URL</label>
            <input type="url" name="gitlab_url" id="gitlab_url" />
          </div>
          <div className="box">
            <label for="other_profile_url">
              Enter Your other profile URL (Bitbucket/LinkedIn/personal website)
            </label>
            <input type="url" name="other_profile_url" id="other_profile_url" />
          </div>
          <div className="box">
            <label for="projects_url">
              List links to projects that you wish to be a part of CodePeak
            </label>
            <input type="url" name="projects_url" id="projects_url" />
          </div>
          <div className="box2">
            <label for="pr" className="chklabel">
              Will you be reviewing PRs to these projects?{" "}
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
            <label for="newMentor" className="chklabel">
              First Time participating as a mentor of NWoC/ Code Peak?{" "}
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
            <label for="refferal_code">Refferal Code (if any)</label>
            <input type="text" name="refferal_code" id="refferal_code" />
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
              For Mentor guide, refer{" "}
              <a href="https://bit.ly/3Cjayk3" target="_blank">
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
};

export default Signup;
