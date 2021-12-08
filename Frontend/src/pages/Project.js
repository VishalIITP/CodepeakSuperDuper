import React from "react";
import NavBar from "../components/Navigation";
import project_style from './Project.css';
import Projectsection from "../components/Project/Project_Section";
import Footer from '../components/footer';
import Animatedbg from "../components/Animatedbg";
//import ScrollButton from "../components/ScrollButton";
function Project(){
    return<div styles={project_style} className="project-class">
        <Animatedbg />
        <NavBar/>
        <Projectsection/>
        <Footer/>
        {/* <ScrollButton /> */}
    </div>
}
export default Project;