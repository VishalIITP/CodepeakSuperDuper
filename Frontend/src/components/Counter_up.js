import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './Counter_up.css'
export default function Counter_up(props) {

    return (
        <div style={{color:'white', zIndex:'2', position:'relative'}}>
      <div className="content" />
      <VisibilitySensor partialVisibility offset={{ bottom: 5 }}>
        {({ isVisible }) => (
          <div className="count_up">
            {isVisible ? <CountUp duration={1} end={props.end} suffix={' +'} /> : null}
          </div>
        )}
      </VisibilitySensor>
        </div>
    )
}
