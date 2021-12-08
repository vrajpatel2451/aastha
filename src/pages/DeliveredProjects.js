import React, { useState } from 'react'
import img1 from '../images/folder-01/pexels-expect-best-323775.webp'
import img2 from '../images/folder-01/pexels-sevenstorm-juhaszimrus-409842.png'
import img3 from '../images/folder-01/pexels-sevenstorm-juhaszimrus-425058_1.webp'
import img4 from '../images/folder-01/pexels-expect-best-323775.webp'
import img5 from '../images/folder-01/pexels-timur-saglambilek-87223_1.webp'
import img6 from '../images/folder-02/khasan-erkenov-TyqGRc6q22Y-unsplash.png'
import img7 from '../images/folder-01/chuttersnap-QbVHo1BOu88-unsplash.webp'
import img8 from '../images/folder-02/mika-baumeister-PL7K02i4s9g-unsplash.png'
import img9 from '../images/folder-02/pexels-enric-cruz-l+¦pez-6272216.png'
import img10 from '../images/folder-02/pexels-luis-quintero-2077937.png'
import img11 from '../images/folder-02/pexels-mantas-sinkevi-ìius-1106476.png'
import arrow from '../images/arrow.png'
function DeliveredProjects({data}) {
    const [type,setType] = useState(1);
    const [content,setContent] = useState(data);
    const changeContent = (id) =>{
        switch (id) {
            case 1:
                setContent(data);
                break;
            case 2:
                const temp = data.filter(item=>item.subtype==="residential");
                setContent(temp);
                break;
            case 3:
                const temp2 = data.filter(item=>item.subtype==="comercial");
                setContent(temp2);
                break;
            default:
                setContent(data);
                break;
        }
    }
    const changeOccur=(id)=>{
        setType(id);
        changeContent(id);
    }
    const imgGenerator = (id) => {
        switch (id) {
            case 4:
                return img1;
            case 5:
                return img2;
            case 6:
                return img3;
            case 7:
                return img4;
            case 8:
                return img5;
            case 9:
                return img6;
            case 10:
                return img7;
            case 11:
                return img8;
            case 12:
                return img9;
            case 13:
                return img10;
            case 14:
                return img11;
            default:
                return img1;
        }
    }
    return (
        <div className="ongoing-page">
            <div className="ongoing-img-whole">
            <a href="#scroll-about"><img src={arrow}></img></a>
            </div>
            <div className="ongoing-title" id="scroll-about">delivered projects</div>
            <div className="filter">
                <ul>
                <li onClick={()=>{changeOccur(1)}} className={type===1?"filter-item active-filter":"filter-item"}>all</li>
                <li onClick={()=>{changeOccur(2)}} className={type===2?"filter-item active-filter":"filter-item"}>residential</li>
                <li onClick={()=>{changeOccur(3)}} className={type===3?"filter-item active-filter":"filter-item"}>commercial</li>
                <hr></hr>
                </ul>
            </div>
            <div className="project-list">
                {
                    content?.map((item)=><div className="project-item" key={item.id}>
                        <div className="item-img-project"><img src={imgGenerator(item.id)}></img></div>
                        <div className="item-project-details">{item.name}</div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default DeliveredProjects

