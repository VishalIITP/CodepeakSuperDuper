import React from 'react'
import './RewardComp.css'
export default function RewardComp(props) {
    return (
        <div className="front_ext">
            <div style={{display:'flex'}}>
                <h1>{props.title}</h1> 
                <a href={props.link} rel="noreferrer" target='_blank'></a>
            </div>
            <hr className="exp_hr" />
            <p>{props.abt1}</p>
            <p>{props.abt2}</p>
            <p>{props.abt3}</p>
        </div>
    )
}
