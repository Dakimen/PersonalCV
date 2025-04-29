import React from "react";
import linkedInIcon from "../../assets/images/icons8-linkedin.svg"
import Insta from "../../assets/images/icons8-instagram.svg"
import "./styles.scss"


const Footer = () => {
    return (
        <div className="footer">
            <h3>Dmitry Akimenko</h3>
            <a href="mailto:dakimenko@yahoo.com"><div className="buttonContact">
                <span>Contact</span>
            </div></a>
            <div className="socialMedia">
                <div className="iconArea">
                    <a href=""><img src={linkedInIcon} alt="logo LinkedIn"></img></a>
                </div>
                <div className="iconArea">
                    <a href=""><img src={Insta} alt="logo Instagram"></img></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;