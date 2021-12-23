import React, { useEffect } from "react";
import Animatedbg from "../../components/Animatedbg";
import Navigation from "../../components/Navigation";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import "../Login/style.css";
import "./profile_mentor.css";


const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navigation />
      <Animatedbg />
      <div className="pro_btn">
          <Link to="/login/profile/profile_mentor">
            <button>Personal Details</button>
          </Link>

          <Link to="/login/profile/edit_mentor">
            <button>Edit profile</button>
          </Link>

          <Link to="/login/profile/dashboard_mentor">
            <button  className="active_pro">Dashboard</button>
          </Link>

          <Link to="/login/profile/project_details">
            <button>Project details</button>
          </Link>
        </div>
      <div className="containerLogin dashboard">
        <h1>Dashboard</h1>
        <div className="box">
          <i className="fab fa-github"></i>
          <input
            type="text"
            name="githubId"
            id="githubId"
            placeholder="GitHub Id"
          />
        </div>
        <div className="box">
          <i className="fas fa-star"></i>
          <input
            type="number"
            name="score"
            id="score"
            placeholder="Enter the score"
          />
        </div>
        
        <Link to="/">
          {" "}
          <button className="btnlog">Update</button>
        </Link>
      </div>
      {/* <div className="mt"></div> */}
      <div className="lowerpage">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
