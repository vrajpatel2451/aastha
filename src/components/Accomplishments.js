import React from 'react'
import img1 from '../images/accomp-1.png'
import img2 from '../images/accomp-2.png'
import img3 from '../images/accomp-3.png'
function Accomplishments() {
    return (
        <div className="accomplishments">
            <div className="item">
                <div className="image-accom">
                    <img src={img1}></img>
                </div>
                <p>
                Developed approx. 35 Lakhs sq. ft.
                </p>
            </div>
            <div className="item">
                <div className="image-accom">
                    <img src={img2}></img>
                </div>
                <p>Projects covering an area of more than 8 Lakhs sq. ft. under - development.</p>
            </div>
            <div className="item">
                <div className="image-accom">
                    <img src={img3}></img>
                </div>
                <p>Proposed construction of more than 15 Lakhs sq. ft. area.</p>
            </div>
        </div>
    )
}

export default Accomplishments
