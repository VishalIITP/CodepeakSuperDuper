import React from 'react'
import {AiFillLinkedin, AiFillMail} from 'react-icons/ai'
import './teamnew.css'
export default function namecard(props) {
    return (
        <div className = "namecard">
            <p>{props.name} <br/> {props.post} </p>
            <div className = "iconbx">
                <a href = {props.link1} target = "_blank" rel = "noreferrer">
                    <AiFillLinkedin />
                </a>
                <a href = {props.link2} target = "_blank" rel = "noreferrer">
                    <AiFillMail />
                </a>
            </div>
        </div>
    )
}
