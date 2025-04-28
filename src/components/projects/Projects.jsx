import React from "react";
import ProjectCard from "../project-card/ProjectCard";
import "./styles.scss";

function Projects ({projects}) {
    return(
        <div className="projects">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    )
}

export default Projects;