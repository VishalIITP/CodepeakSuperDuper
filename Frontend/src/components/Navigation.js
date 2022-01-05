import React, { useRef, useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import style_nav from './Navigation.css'
import { NavLink } from 'react-router-dom';
import { NavbarBrand } from 'react-bootstrap';
import profilePic from "../pages/profile/pic.png";

document.addEventListener('click',(e)=>{
    if (!document.getElementById('navbar').contains(e.target)){
        document.getElementsByClassName("navbar-toggler")[0].classList.add("collapsed");
        document.getElementsByClassName("navbar-collapse")[0].classList.remove("show");
    }
},false)
export default function Navigation(props) {
    return (
        <div style={style_nav}>
            <Navbar id="navbar" bg="light" expand="lg" className={props.hasShadow? 'shadow' : ''}>
            <Container>
                <NavbarBrand><NavLink className="brand" exact={true} to="/">CODEPEAK</NavLink></NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink exact={true} to="/" activeStyle={{color: 'rgb(103 212 223)', borderBottom:'2px solid #589ba2', fontWeight: 500}}>Home</NavLink>
                    <NavLink to="/leaderboard"  activeStyle={{color: 'rgb(103 212 223)', borderBottom:'2px solid #589ba2', fontWeight: 500}}>Leaderboard</NavLink>
                    <NavLink to="/register" activeStyle={{color: 'rgb(103 212 223)', borderBottom:'2px solid #589ba2', fontWeight: 500}}>Register</NavLink>
                    <NavLink to="/project" activeStyle={{color: 'rgb(103 212 223)', borderBottom:'2px solid #589ba2', fontWeight: 500}} >Projects</NavLink>
                    <NavLink to="/reward" activeStyle={{color: 'rgb(103 212 223)', borderBottom:'2px solid #589ba2', fontWeight: 500}} >Rewards</NavLink>
                    <NavLink to="/team" activeStyle={{color: 'rgb(103 212 223)', borderBottom:'2px solid #589ba2', fontWeight: 500}}>Team</NavLink>
                    <NavLink to="/login" activeStyle={{color: 'rgb(103 212 223)', borderBottom:'2px solid #589ba2', fontWeight: 500}}>Login</NavLink>
                    <div style={{textAlign: 'left', marginLeft: "20px" }}>    
                        <img src={profilePic} height="40px" width="40px" style={{ borderRadius: "50%", display: "inline", margin: "13px auto" }}></img>
                        <span id="username" style={{fontFamily: "inherit", color:"white", marginLeft: "10px"}}>Jhon Smith</span>
                    </div>
                    {/* <NavLink to="/" >Contact</NavLink> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}
