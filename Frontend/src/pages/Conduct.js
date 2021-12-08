import React from "react";
import NavBar from "../components/Navigation";
import Firstsection from "../components/Conduct_First_section";
import Card from "../components/Conduct_Second_section";
// import Collab from "../components/Conduct_Third_Section";
import conduct_styles from "./Conduct.css";
import Animatedbg from "../components/Animatedbg";
import Footer from "../components/footer";
//import ScrollButton from "../components/ScrollButton";
function Conduct() {
  return (
    <>
      <div styles={conduct_styles} className="conduct-class">
        <NavBar />
        <Animatedbg />
        <Firstsection />
        <Card />
        {/* <Collab /> */}
        <Footer />
      </div>
      {/* <ScrollButton /> */}
    </>
  );
}
export default Conduct;
