import React from "react";
import "./styles.scss";

const Banner = ({title, image}) => {
    return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="banner-over">
        <div>
          {title}
        </div>
      </div>
    </div>)
}

export default Banner;