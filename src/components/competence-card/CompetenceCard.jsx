import React from "react";

const CompetenceCard = ({competence}) => {
    return (
        <div className="competence-card">
            <img src={competence.image} />
            <span>{competence.name}</span>
        </div>
    )
}

export default CompetenceCard;