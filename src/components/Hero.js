import React, { useEffect, useState } from 'react'
import arrow from '../images/arrow.png'

function Hero({content}) {
    const [number,setNumber] = useState(1);
    useEffect(() => {
        setTimeout(
          () =>
            setNumber((prevIndex) =>
              prevIndex === 6 ? 1 : prevIndex + 1
            ),
          4000
        );
        return () => {};
      }, [number]);
    return (
        <div className="hero-main" >
            <div className={number===1?"hero hero-01 active":"hero hero-01"}>
                <div className="heading-hero">{content[0]}</div>
                {/* <button className="btn-hero">view more</button> */}
            <div id="scroll"></div>
                <a href="#scroll"><img src={arrow}></img></a>
            </div>
            <div className={number===2?"hero hero-02 active":"hero hero-02"}>
                <div className="heading-hero">{content[1]}</div>
                {/* <button className="btn-hero">view more</button> */}
            <div id="scroll"></div>
                <a href="#scroll"><img src={arrow}></img></a>
            </div>
            <div className={number===3?"hero hero-03 active":"hero hero-03"}>
                <div className="heading-hero">{content[2]}</div>
                {/* <button className="btn-hero">view more</button> */}
            <div id="scroll"></div>
                <a href="#scroll"><img src={arrow}></img></a>
            </div>
            <div className={number===4?"hero hero-04 active":"hero hero-04"}>
                <div className="heading-hero">{content[3]}</div>
                {/* <button className="btn-hero">view more</button> */}
            <div id="scroll"></div>
                <a href="#scroll"><img src={arrow}></img></a>
            </div>
            <div className={number===5?"hero hero-05 active":"hero hero-05"}>
                <div className="heading-hero">{content[4]}</div>
                {/* <button className="btn-hero">view more</button> */}
            <div id="scroll"></div>
                <a href="#scroll"><img src={arrow}></img></a>
            </div>
            <div className={number===6?"hero hero-06 active":"hero hero-06"}>
                <div className="heading-hero">{content[5]}</div>
                {/* <button className="btn-hero">view more</button> */}
            <div id="scroll"></div>
                <a href="#scroll"><img src={arrow}></img></a>
            </div>
        </div>
    )
}

export default Hero
