import React from 'react'
import img02 from '../images/Build-spaces-1.png'
import img03 from '../images/Total-Project.png'
import img04 from '../images/Dreams-fulfilled.png'
import img01 from '../images/Commercial-Space.png'
function Numbers() {
    return (
        <div className="numbers">
            <div className="individual">
                <div className="img-nuber">
                    <img src={img01}></img>
                </div>
                <div className="number-count">33+</div>
                <div className="number-desc">years of legacy</div>
            </div>
            <div className="individual">
                <div className="img-nuber">
                    <img src={img02}></img>
                </div>
                <div className="number-count">3 million+</div>
                <div className="number-desc">of construction makes faith(sq. ft.)</div>
            </div>
            <div className="individual">
                <div className="img-nuber">
                    <img src={img03}></img>
                </div>
                <div className="number-count">55+</div>
                <div className="number-desc">projects stand for dedication</div>
            </div>
            <div className="individual">
                <div className="img-nuber">
                    <img src={img04}></img>
                </div>
                <div className="number-count">10000+</div>
                <div className="number-desc">Happy Families with better livings</div>
            </div>
        </div>
    )
}

export default Numbers
