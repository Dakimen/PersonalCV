import React from "react";
import CompetenceCard from "../competence-card/CompetenceCard";

const Competences = ({ competences }) => {
    const frontend = competences.filter((competence) => competence.type === "frontend");
    const backend = competences.filter((competence) => competence.type === "backend");
    const tools = competences.filter((competence) => competence.type === "tool");

    return (
        <div className="competences-container-main">
            <div className="competences-column">
                <h3 className="column-title">Frontend</h3>
                {frontend.map((front)=> (
                    <CompetenceCard key={front.id} competence={front} />
                ))}
            </div>
            <div className="competences-column">
                <h3 className="column-title">Backend</h3>
                {backend.map((back)=> (
                    <CompetenceCard key={back.id} competence={back} />
                ))}
            </div>
            <div className="competences-column">
                <h3 className="column-title">Outils</h3>
                {tools.map((tool)=> (
                    <CompetenceCard key={tool.id} competence={tool} />
                ))}
            </div>
        </div>
    )
}

export default Competences;