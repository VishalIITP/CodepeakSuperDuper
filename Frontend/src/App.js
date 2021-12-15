import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Navigation from './components/Navigation';
import Home from './pages/Home'
import ScrollButton from './components/ScrollButton'
import { Route, Switch, BrowserRouter} from 'react-router-dom';
//import Footer from './components/footer'
import Conduct from './pages/Conduct.js';
// import Leaderboard from './pages/leaderboard/Leaderboard';
import Leaderboard from './pages/leaderboard_temp';
import Project from './pages/Project';
import Team from './pages/teamnew'
import Reward from './pages/Reward/reward';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/SignupStud';
import SignupMentor from './pages/Signup/SignupMentor';
import SignupCa from './pages/Signup/SignupCA';
import ScrollToTop from './components/ScrollToTop';
import {
  BrowserRouter as Router,
  Routes,
  Link
} from 'react-router-dom';
//import TeamTemp from './pages/leaderboard_temp'
function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop/>
        <Switch>
          <Route exact path="/" component={Home}/>
          {/* <Route path="/register" component={Conduct}/> */}
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/project" component={Project} />
          <Route path="/team" component={Team} />
          <Route path="/reward" component={Reward} />
          <Route path="/login" component={Login} />
          {/* <Route path="/signup/student" component={Signup} />
          <Route path="/signup/mentor" component={SignupMentor} /> */}
        </Switch>


        <Switch>
        <Route exact path="/register" component={Conduct}/>
        <Route path="/register/signup/student" component={Signup}/>
        <Route path="/register/signup/mentor" component={SignupMentor}/>
        <Route path="/register/signup/ca" component={SignupCa}/>
        </Switch>
        {/* <Footer/> */}
      </BrowserRouter>
      <ScrollButton/>
    </div>
  );
}

export default App;
