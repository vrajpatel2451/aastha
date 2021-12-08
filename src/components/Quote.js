import React from 'react'
import imge from '../images/quotation-mark-brown.png'

function Quote() {
    return (
        <div className="quote-from-ceo">
            <div className="quote">
            <p className="line-01">Note from the CEO</p>
            <p className="line-02"><img src={imge}></img></p>
            <p className="line-03">Since its inception, AASTHA PROJECTS has believed in and worked tirelessly to return its moral responsibility to society. It aspires to make a difference in society by offering services that raise the level of living and meet fundamental human needs.</p>
            <p className="line-04"><img src={imge}></img></p>
            </div>  
        </div>
    )
}

export default Quote
