import React from 'react'
import imge1 from '../images/folder-01/pexels-sevenstorm-juhaszimrus-409842.png'
import imge2 from '../images/folder-01/pexels-sevenstorm-juhaszimrus-425058_1.webp'
function Vision() {
    return (
        <div className="vision-mission">
            <div className="vision">
                <div className="vision-img">
                <img src={imge1}></img>
            </div>
            <div className="vision-desc">
                <h1>our vision</h1>
                
                <li>We aim to provide our customers with high-quality homes that are built on solid foundations of technological skill.</li> 
                <li>To continuously achieve customer satisfaction by delivering all construction-related services, including design, on a turnkey basis, and ensuring that projects are completed on time, under budget, and with outstanding quality.</li> 
                <li>To provide the best possible value for every rupee invested by our clients in the residences we build.</li>
                
            </div>
            </div>
            <div className="vision reverse">
            <div className="vision-desc">
                <h1>our mission</h1>
                
                <li>We believe in the Customer First philosophy. Our projects are devoid of litigation, and we can promise our consumers that they will enjoy a stress-free life.</li> 
                <li>We work hard to satisfy the clients' preferences, standards, and other needs by investigating the finest feasible choices with the help of our experienced team of specialists.</li>
                
            </div>
            <div className="vision-img">
                <img src={imge2}></img>
            </div>
            </div>
        </div>
    )
}

export default Vision
