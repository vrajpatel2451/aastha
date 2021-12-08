import React from 'react'
import {useHistory} from 'react-router-dom'

function Projects() {
    const history = useHistory();
    const gotoPage = (id) => {
        history.push(`/projects/${id}`);
    }
    return (
        <div className="projects" id="projects">
            <div className="cover" onClick={()=>{gotoPage('ongoing')}}>
            <div className="indi ongoing">
                </div>
                <div className="details">
                <h1>ongoing</h1>
                <div className="bottom-details">
                <p>MAKE YOUR DREAM COME TRUE</p>
                <p><span></span> SOUTH BOPAL</p>
                </div>
            </div>
            </div>
            <div className="cover" onClick={()=>{gotoPage('upcoming')}}>
            <div className="indi upcoming">
            </div>
                <div className="details">
                <h1>upcoming</h1>
                <div className="bottom-details">
                <p>MAKE YOUR DREAM COME TRUE</p>
                <p><span></span> SOUTH BOPAL</p>
                </div>
                </div>
            </div>
            <div className="cover" onClick={()=>{gotoPage('delivered')}}>
            <div className="indi delivered">
                </div>
                <div className="details">
                <h1>delivered</h1>
                <div className="bottom-details">
                <p>MAKE YOUR DREAM COME TRUE</p>
                <p><span></span> SOUTH BOPAL</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Projects
