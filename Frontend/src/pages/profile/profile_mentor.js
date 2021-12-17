import React from "react";
import Animatedbg from "../../components/Animatedbg";
import Navigation from "../../components/Navigation";
import Footer from "../../components/footer";
import "./profile_mentor.css";
import { Link } from "react-router-dom";

export default function profile_participant() {
  return (
    <div>
      <Navigation />
      <Animatedbg />
      <div className="profile_personal">
        <div className="pro_btn">
          <Link to="/login/profile/profile_mentor">
            <button className="active_pro">Personal Details</button>
          </Link>

          <Link to="/login/profile/edit_mentor">
            <button>Edit profile</button>
          </Link>

          <Link to="/login/profile/dashboard_mentor">
            <button>Dashboard</button>
          </Link>
        </div>
        <div className="pro_details">
          <h2>Personal Details</h2>
          <hr className="conf_hr" />
          <div className="profile_details">
            <strong>
              <p>Name</p>
            </strong>
            <p>Sample name</p>
          </div>
          <div className="profile_details">
            <strong>
              <p>Github Id</p>
            </strong>
            <p>Sample Id</p>
          </div>
          <div className="profile_details">
            <strong>
              <p>Email</p>
            </strong>
            <p>Sample Email</p>
          </div>
          <div className="profile_details">
            <strong>
              <p>Projects</p>
            </strong>
            <ul>
              <li>
                <a href="/">Sample project 1</a>
              </li>
              <li>
                <a href="/">Sample project 2</a>
              </li>
              <li>
                <a href="/">Sample project 3</a>
              </li>
            </ul>
          </div>
          <div className="profile_details">
            <strong>
              <p>Phone Number</p>
            </strong>
            <p>Sample Number</p>
          </div>
          <div className="profile_details">
            <strong>
              <p>College Name</p>
            </strong>
            <p>Sample clg</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
