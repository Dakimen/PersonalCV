import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

function ProjectCard ({project}) {
    return (
        <Link className="link" to={project.link}>
        <div className="project-card" style={{ backgroundImage: `url(${project.screenshot})` }} title={project.alt}>
            <div className="project-card-over">
                <h3 className="project-title">{project.name}</h3>
                <div className="project-card-description">
                    <p className="longer">{project.longerdescription}</p>
                    <p className="shorter">{project.shortdescription}</p>
                    <span>Technologies utilisées : {project.technologies}</span>
                </div> 
            </div>
        </div></Link>
    )
}

export default ProjectCard;