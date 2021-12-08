import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../pages/Images/logo_right.png";
import CaGuide from "../Files/CampusAmbassadorInfo.pdf";
import MentorGuide from "../Files/MENTORSGUIDE.pdf";
import STUDENTGUIDE from "../Files/STUDENTGUIDE.pdf"

function Firstsection() {
  return (
    <>
      <section className="first-section">
        <div className="main-div">
          <div className="flex-item">
            <div>
              <h1 className="heading">How it works?</h1>
              <p className="info">
                The program is available to all the participants in whichever
                form they want, both as students or as mentors. To be a mentor,
                participants will go through a selection process. Selected
                mentors propose projects, the best of which will be selected for
                inclusion in the program. Students work on these projects during
                their winter vacations. Points will be allotted if any student
                raises or solves any issue. Mentors review pull requests and
                overall work on your project from various contributors
                throughout the programming phase of the program. At the end of
                the coding period, students will be distinguished on the basis
                of the bestowal they offer.
                <br />
                <div className="btnBox">
                  <div className="d-grid gap-2 col-3 mx-auto">
                   
                    <a href={CaGuide} target="_blank" rel="noreferrer">
                      <button className="btn btn-primary btn-apply" type="button"> 
                     
                        CA Guide
                      </button>
                    </a>
                    
                  </div>
                  <div className="d-grid gap-2 col-3 mx-auto">
                    <a href={MentorGuide} target="_blank" rel="noreferrer">
                      <button className="btn btn-primary btn-apply" type="button" >
                        MentorGuide
                      </button>
                    </a>
                  </div>
                  <div className="d-grid gap-2 col-3 mx-auto">
                   
                      <a href={STUDENTGUIDE} target="_blank" rel="noreferrer">
                       <button className="btn btn-primary btn-apply" type="button">
                      StudentGuide
                      </button>
                      </a>
                    
                  </div>
                </div>
                <br />
                To register scroll down.
              </p>
            </div>
            <img src={Logo} alt="logo_right" className="right-logo" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Firstsection;
