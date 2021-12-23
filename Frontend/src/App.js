import React from "react";
//import logo from './logo.svg';
import "./App.css";
//import Navigation from './components/Navigation';
import Home from "./pages/Home";
import ScrollButton from "./components/ScrollButton";
import { Route, Switch, BrowserRouter } from "react-router-dom";
//import Footer from './components/footer'
import Conduct from "./pages/Conduct.js";
// import Leaderboard from './pages/leaderboard/Leaderboard';
import Leaderboard from "./pages/leaderboard_temp";
import Project from "./pages/Project";
import Team from "./pages/teamnew";
import Reward from "./pages/Reward/reward";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/SignupStud";
import SignupMentor from "./pages/Signup/SignupMentor";
import SignupCa from "./pages/Signup/SignupCA";
import ScrollToTop from "./components/ScrollToTop";
import ProfileParticipant from "./pages/profile/profile_participant";
import ProfileMentor from "./pages/profile/profile_mentor";
import EditParticipant from "./pages/profile/edit_participant";
import DashboardMentor from "./pages/profile/dashboard_mentor";
import ProjectMentor from "./pages/profile/project_mentor";
import ProjectDetails from "./pages/profile/project_details";
import EditMentor from "./pages/profile/edit_mentor";

//import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
//import TeamTemp from './pages/leaderboard_temp'
function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/project" component={Project} />
          <Route path="/team" component={Team} />
          <Route path="/reward" component={Reward} />
        </Switch>

        <Switch>
          <Route exact path="/register" component={Conduct} />
          <Route path="/register/signup/student" component={Signup} />
          <Route path="/register/signup/mentor" component={SignupMentor} />
          <Route path="/register/signup/ca" component={SignupCa} />
        </Switch>

        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/login/profile/profile_participant" component={ProfileParticipant} />
          <Route path="/login/profile/profile_mentor"
            component={ProfileMentor}
          />
          <Route
            path="/login/profile/edit_participant"
            component={EditParticipant}
          />
          <Route path="/login/profile/dashboard_mentor" component={DashboardMentor}/>

          <Route
            path="/login/profile/project_mentor"
            component={ProjectMentor}
          />
          <Route
            path="/login/profile/project_details"
            component={ProjectDetails} />
          <Route path="/login/profile/edit_mentor" component={EditMentor} />
          <Route
            path="/login/profile/dashboard_mentor"
            component={DashboardMentor}
          />
        </Switch>
      </BrowserRouter>
      <ScrollButton />
    </div>
  );
}

export default App;
