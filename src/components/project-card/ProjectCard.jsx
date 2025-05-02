import React from "react";
import "./styles.scss";

function ProjectCard ({project}) {
    return (
        <a className="link" href={project.link}>
        <div className="project-card" style={{ backgroundImage: `url(${project.screenshot})` }} title={project.alt}>
            <div className="project-card-over">
                <h3 className="project-title">{project.name}</h3>
                <div className="project-card-description">
                    <p className="longer">{project.longerdescription}</p>
                    <p className="shorter">{project.shortdescription}</p>
                    <span>Technologies utilisées : {project.technologies}</span>
                </div> 
            </div>
        </div></a>
    )
}

export default ProjectCard;