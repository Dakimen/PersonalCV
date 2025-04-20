import React from "react";

const Banner = ({title, image}) => {
    return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
        <div>
          {title}
        </div>
    </div>)
}

export default Banner;