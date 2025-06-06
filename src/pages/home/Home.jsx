import React from "react"
import Banner from "../../components/banner/Banner";
import bgImage from "../../assets/images/banner.webp"
import competencesData from "../../assets/data/competences.json"
import Competences from "../../components/competences/Competences";
import Collapse from "../../components/collapse/Collapse";
import certificats from "../../assets/data/certificats.json"
import diplomes from "../../assets/data/diplomes.json"
import Projects from "../../components/projects/Projects";
import projectArchive from "../../assets/data/projects.json";
import placeholder from "../../assets/images/me.webp"
import "./styles.scss";

const Home = () => {
    return(
        <div className="home">
            <Banner title="Développeur Web" image={bgImage}/>
            <div className="introduction">
                
                <div className="introduction-left">
                    <img src={placeholder} className="circlePhoto" alt="Photo de Dmitry" />
                </div>
                <div className="introduction-right">
                    <p>Développeur web passionné, je maîtrise l’intégration HTML/CSS, le développement JavaScript avec React, ainsi que le backend avec Node.js. J’optimise les performances, le SEO et assure la qualité du code grâce à mon experience en debug avec les Chrome Web Tools</p>
                </div>
            </div>
            <div className="competences-section">
                <h2>Mes compétences</h2>
                <Competences competences={competencesData} />
            </div>
            <div className="formations-section">
                <h2>Mes Formations</h2>
                <div className="autodidacte">
                    <span>Formation en autodidacte depuis 2023</span>
                </div>
                <Collapse title={"Certificats obtenus"} content={certificats} />
                <Collapse title={"Bac+2 : Developpeur Web Openclassrooms (2025)"} content={diplomes} />
            </div>
            <div className="projects-section"  id="portfolio">
                <h2>Mes projets</h2>
                <Projects projects={projectArchive} />
            </div>
            <div className="contacts-section" id="contacts">
                
            </div>
        </div>
    )
}

export default Home;