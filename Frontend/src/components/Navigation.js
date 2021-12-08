import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import style_nav from './Navigation.css'
import { NavLink } from 'react-router-dom';
import { NavbarBrand } from 'react-bootstrap';
export default function Navigation(props) {
    return (
        <div style={style_nav}>
            <Navbar bg="light" expand="lg" className={props.hasShadow? 'shadow' : ''}>
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
                    {/* <NavLink to="/" >Contact</NavLink> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}
