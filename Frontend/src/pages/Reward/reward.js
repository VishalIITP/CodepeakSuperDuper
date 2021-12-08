import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/footer'
import Animatedbg from '../../components/Animatedbg'
import './reward.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import {BsStarFill} from 'react-icons/bs';
import { useEffect } from "react";
import RewardComp from '../../components/Reward/RewardComp'
import AviyelLogo from '../Images/avl.svg'
import GfgLogo from '../Images/gfgLogo.png'
import CSSBattleLogo from '../Images/cssbattleLogo.png'
import NWocLogo from '../Images/nwoc logo.svg'
import CodingClubLogo from '../Images/iitglogo.svg'
import VoiceflowLogo from '../Images/Artboard.svg'
import CodepeakLogo from '../Images/logo.png'
export default function Reward() {
    useEffect(() => {
        Aos.init({duration: 800});
    }, [])
    return (
        <div>
            <Animatedbg/>
            <Navigation/>
            <div className="reward_head">
            <h2 data-aos = "zoom-in" data-aos-once = "true">REWARDS AND PRIZES</h2>
            <hr />
            </div>
            <div className="rewardBox right" data-aos="fade-up" data-aos-once = "true">
                <img src={AviyelLogo} alt="" srcset="" className="rewardLogo" />
                <RewardComp className="rewardComp" 
                            title='Aviyel' 
                        abt1='- Top 5 Contributors will get a Swag kit from Aviyel !'
                            abt2='- Top Contributors of Aviyel projects may get an internship opportunity !!' />
            </div>
            <div className="rewardBox left" data-aos="fade-up" data-aos-once = "true">
                <img src={GfgLogo} alt="" srcset="" className="rewardLogo" />
                <RewardComp className="rewardComp" 
                            title='Geeks For Geeks' 
                            abt1='- Top 3 Contributors will get GFG Coupon worth Rs 1200, 1000, 800.'
                            abt2='- Geeks for Geeks Coupon worth Rs. 300 to all participants.' />
            </div>
            <div className="rewardBox right" data-aos="fade-up" data-aos-once = "true">
                <img src={CSSBattleLogo} alt="" srcset="" className="rewardLogo" />
                <RewardComp className="rewardComp" 
                            title='CSS Battles' 
                            abt1='- Top 3 Contributors will get CSS Battles credits worth $200.' />
            </div>
            <div className="rewardBox left" data-aos="fade-up" data-aos-once = "true">
                <img src={VoiceflowLogo} alt="" srcset="" className="rewardLogo" />
                <RewardComp className="rewardComp" 
                            title='Voiceflow' 
                            abt1='- Six months Voiceflow Subscription worth $240 to all participants.'/>
            </div>
            <div className="rewardBox left" data-aos="fade-up" data-aos-once = "true">
                <div className="rewImg">
                <img src={NWocLogo} alt="" srcset="" className="rewardLogo" />
                <img src={CodingClubLogo} alt="" srcset="" className="rewardLogo" />
                </div>
                <RewardComp className="rewardComp" 
                            title='NWoC IITP & Coding Club IITG' 
                            abt1='- Top performers will exclusively get free access to online courses/competitions offered by Coding Club IITG & NJACK IITP.'
                            abt2='- Top 10 students will be featured in CC IITG magazine - Debugged Editons!'
                            abt3='- Top 10 students will be featured in our social media handles.' />
            </div>
            <div className="rewardBox left" data-aos="fade-up" data-aos-once = "true">
                <img src={CodepeakLogo} alt="" srcset="" className="rewardLogo" />

                <RewardComp className="rewardComp" 
                            title='CODEPEAK' 
                            abt1='- Top 15 Contributors will get Codepeak Merchandise.'
                            abt2='- Certificate of Merit to top 40 contributorts.'
                            abt3='- Certificate of participation to all participants.' />
            </div>
            
            <Footer/>
        </div>
    )
}
