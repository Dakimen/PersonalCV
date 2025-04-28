import React from "react";
import "./styles.scss";

const CompetenceCard = ({competence}) => {
    return (
        <div className="competence-card">
            <img src={competence.image} />
            <span>{competence.name}</span>
        </div>
    )
}

export default CompetenceCard;