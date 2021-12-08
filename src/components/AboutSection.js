import React from 'react'
import imge1 from '../images/folder-02/pexels-luis-quintero-2077937.png'
import imge2 from '../images/folder-02/zheni-yaneva-1FqcvKkQiXY-unsplash.png'
function AboutSection() {
    return (
        <div className="about-section">
            <div className="about-desc">
                <h1>about the aastha projects</h1>
                <p>AASTHA PROJECTS was founded in response to the rising need for high-quality homes and business space. Since then, the Group has evolved to become one of the region's top Real Estate Developers, catering to the demands of a discriminating clientele.</p>
                <p>The group now has about 26 years of building experience. The essence of these values can be felt in all of its initiatives, which have consistently helped the company to thrive and overcome early obstacles while learning the nuances of the business. </p>
                <p>The values that have bolstered the company's standing among its peers are focused on smooth operational methods, constant quality delivery, and providing maximum value for the customer's investment.Since its beginning, AASTHA PROJECTS has believed in and worked tirelessly to return its moral responsibility to society. It aspires to make a difference in society by offering services that raise the level of living and meet fundamental human needs.</p>
            </div>
            <div className="about-img">
                <img className="about-img-01" src={imge1}></img>
                <img className="about-img-02" src={imge2}></img>
            </div>
        </div>
    )
}

export default AboutSection
