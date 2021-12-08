import React from 'react'
import Navigation from '../components/Navigation'
import Animatedbg from '../components/Animatedbg'
import Slider1 from '../components/teamnew/slider1'
import Slider2 from '../components/teamnew/slider2'
import Slider3 from '../components/teamnew/slider3'
import Footer from '../components/footer'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function Teamnew() {
    useEffect(() => {
        Aos.init({duration: 800});
    }, [])
    return (
        <div>
            <Animatedbg/>
            <Navigation/>
            <div className = "slider">
            <h2 data-aos = "zoom-in" data-aos-once = "true">TEAM</h2>
            <hr/>
            </div>
            <div className = "combined">
            <Slider1/>
            <Slider2/>
            <Slider3/>
            </div>
            <Footer/>
        </div>
    )
}
