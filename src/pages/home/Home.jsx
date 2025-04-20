import React from "react"
import Banner from "../../components/banner/Banner";
import bgImage from "../../assets/images/banner.webp"

const Home = () => {
    return(
        <div>
            <Banner title="Web Developper" image={bgImage}/>
            <p>Banner and stuff</p>
        </div>
    )
}

export default Home;