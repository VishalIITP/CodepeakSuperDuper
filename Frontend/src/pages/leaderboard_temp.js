import React from "react";
import Animatedbg from "../components/Animatedbg";
import Navigation from "../components/Navigation";
import Footer from '../components/footer';
import Leaderboard from './leaderboard/Leaderboard.jsx';
import "bootstrap/dist/css/bootstrap.min.css";

const getcsv = async () =>{

    console.log("clicked");

    
}


function Leaderboardtemp(){
    return<> 
     <Animatedbg />
     <Navigation />
     
    {/* <div style={{display:"flex",alignItems:'center', justifyContent:'center', width:"100vw",height:"100vh"}}><h2 style={{color:"white",fontSize:"50px"}}>Coming Soon</h2>   
    </div> */}
    <Leaderboard />
    <Footer/>
     </>;
  
}
export default Leaderboardtemp;