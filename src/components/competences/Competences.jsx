import React from "react";
import CompetenceCard from "../competence-card/CompetenceCard";
import "./styles.scss";

const Competences = ({ competences }) => {
    const frontend = competences.filter((competence) => competence.type === "frontend");
    const backend = competences.filter((competence) => competence.type === "backend");
    const tools = competences.filter((competence) => competence.type === "tool");

    return (
        <div className="competences-container-main">
            <div className="competences-column">
                <h3 className="column-title">Frontend</h3>
                <div className="card-container">
                {frontend.map((front)=> (
                    <CompetenceCard key={front.id} competence={front} />
                ))}
                </div>
            </div>
            <div className="competences-column center">
                <h3 className="column-title">Backend</h3>
                <div className="card-container">
                {backend.map((back)=> (
                    <CompetenceCard key={back.id} competence={back} />
                ))}
                </div>
            </div>
            <div className="competences-column">
                <h3 className="column-title">Outils</h3>
                <div className="card-container">
                {tools.map((tool)=> (
                    <CompetenceCard key={tool.id} competence={tool} />
                ))}
                </div>
            </div>
        </div>
    )
}

export default Competences;