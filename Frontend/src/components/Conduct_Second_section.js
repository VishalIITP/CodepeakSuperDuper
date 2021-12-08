import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Card() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <>
      <section className="second-section">
        <h1 className="heading2">Registration</h1>
        <div className="row">
          <div
            className="card-cover col-lg-4 col-md-6 col-sm-12"
            data-aos="fade-right" data-aos-once="true"
          >
            <div className="h-100 card to-apply-card">
              <div className="card-header">
                <h4>Campus Ambassadors</h4>
              </div>
              <div className="card-body">
               <div className="Inside-card-div"><p className="card-text">
                   Join the CodePeak Family, this is your chance to gain valuable experience, pull off awesome events, and build a strong network with similarly motivated individuals helping you in our future professional endeavours.
                </p></div> 
                <div className="d-grid gap-2 col-6 mx-auto">
                <a href="https://forms.gle/AfMsnBUXheGVuCHt5" target="_blank" rel="noreferrer">
                  <button className="btn btn-primary btn-apply btn-tab" type="button">
                   Register
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" card-cover col-lg-4 col-md-6" data-aos="fade-up" data-aos-once="true">
            <div className="h-100 card to-apply-card">
              <div className="card-header">
                <h4>Participant</h4>
              </div>
              <div className="card-body">
               <div className="Inside-card-div"> <p className="card-text">
                  No matter whether you are a beginner or an expert in open source, we have a space for everyone. Register now to become part of one of the largest open source events.
                </p></div>
                <div className="d-grid gap-2 col-6 mx-auto register-button">
                <a href="https://forms.gle/hrigmCDy6mL62H1q7" target="_blank" rel="noreferrer"> 
                <button className="btn btn-primary btn-apply btn-phone btn-tab" type="button">
                    Register
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="card-cover col-lg-4 col-md-12 col-sm-12"
            data-aos="fade-left" data-aos-once="true"
          >
            <div className="h-100 card to-apply-card">
              <div className="card-header">
                <h4>Mentor</h4>
              </div>
              <div className="card-body">
             <div className="Inside-card-div">  <p className="card-text">
                  Are you a specialist in one or more projects? Then as a mentor, you will have to guide a bunch of students and help them to expertise in the field of open source contributions.
                </p></div> 
                <div className="d-grid gap-2 col-6 mx-auto">
                <a href="https://forms.gle/2vasCSVkH3i2zpQG8" target="_blank" rel="noreferrer">
                  <button className="btn btn-primary btn-apply" type="button">
                    Register
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Card;
