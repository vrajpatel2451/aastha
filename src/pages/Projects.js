import React from 'react'
import {Redirect} from 'react-router-dom'
import {projectList} from '../data/project-list'
import DeliveredProjects from './DeliveredProjects';
import OngoingProjects from './OngoingProjects';
import UpcomingProjects from './UpcomingProjecs';
import './project.css'
import './projectsMedia.css'

function Projects({match}) {
    const data = projectList.filter(item=>item.type===match.params.id);
    if(match.params.id==="upcoming" || match.params.id==="ongoing" || match.params.id==="delivered"){
        return (
            <div className="projects-page">
                {match.params.id==="upcoming"?<UpcomingProjects data={data}></UpcomingProjects>:match.params.id==="ongoing"?<OngoingProjects data={data}></OngoingProjects>:<DeliveredProjects data={data}></DeliveredProjects>}
            </div>
        )
    }else {
        return <Redirect to="/404"></Redirect>
    }
}

export default Projects
