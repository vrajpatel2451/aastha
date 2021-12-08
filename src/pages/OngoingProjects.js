import React, { useState } from 'react'
import img1 from '../images/green-velly.jpg'
import img2 from '../images/sky-greens.jpg'
import img3 from '../images/shahi-kuteer.jpg'
import arrow from '../images/arrow.png'
function OngoingProjects({data}) {
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
            case 1:
                return img1;
            case 2:
                return img2;
            case 3:
                return img3;
            default:
                return img1;
        }
    }
    return (
        <div className="ongoing-page">
            <div className="ongoing-img-whole">
            <a href="#scroll-about"><img src={arrow}></img></a>
            </div>
            <div className="ongoing-title" id="scroll-about">Ongoing Projects</div>
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

export default OngoingProjects
