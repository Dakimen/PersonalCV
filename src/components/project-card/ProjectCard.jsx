import React from "react";

function ProjectCard ({project}) {
    return (
        <div className="project-card">
            <h3 className="project-title">{project.name}</h3>
            <div className="screenshot">
                <img src={project.screenshot} />
            </div>
            <div className="project-card-description">
                <p>{project.shortdescription}</p>
                <span>{project.technologies}</span>
            </div>
        </div>
    )
}

export default ProjectCard;