import React, { useState } from "react";

const Collapse = ({ title, content }) => {
  const [Open, setOpen] = useState(false);
  if(content[0].image) {
    return (
      <div>
      <div className="collapse" onClick={() => setOpen(!Open)}>
        {title} <i className={Open ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i>
      </div>
      <div className={Open ? "collapsedTextOpen" : "collapsedTextClosed"}>
        {content.map((content) => (
          <img key={content.id} src={content.image} />
        ))}
      </div>
    </div>
    )
  } else {
  return (
    <div>
      <div className="collapse" onClick={() => setOpen(!Open)}>
        {title} <i className={Open ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i>
      </div>
      <div className={Open ? "collapsedTextOpen" : "collapsedTextClosed"}>
        <ul>
        {content.map((content) => (
          <li key={content.id}>{content.name} - {content.date}</li>
        ))}
        </ul>
      </div>
    </div>
  ); };
};

export default Collapse;