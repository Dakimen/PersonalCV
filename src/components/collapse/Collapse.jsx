import React, { useState } from "react";
import "./styles.scss"

const Collapse = ({ title, content }) => {
  const [Open, setOpen] = useState(false);
  if(content[0].image) {
    return (
      <div className="collapse imgcollapse">
      <div className="collapse-button" onClick={() => setOpen(!Open)}>
      <span>{title}</span> <i className={Open ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i>
      </div>
      <div className={Open ? "collapsedTextOpen" : "collapsedTextClosed"}>
        <div className="contentimg">
        {content.map((content) => (
          <img key={content.id} src={content.image} className={Open ? "open" : "closed"} alt={content.alt}/>
        ))}</div>
      </div>
    </div>
    )
  } else {
  return (
    <div className="collapse">
      <div className="collapse-button" onClick={() => setOpen(!Open)}>
        <span>{title}</span> <i className={Open ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i>
      </div>
      <div className={Open ? "collapsedTextOpen" : "collapsedTextClosed"}>
        <ul>
        {content.map((content) => (
          <li key={content.id}>{content.name} ({content.date})</li>
        ))}
        </ul>
      </div>
    </div>
  ); };
};

export default Collapse;