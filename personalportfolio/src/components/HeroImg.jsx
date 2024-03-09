import "./HeroImgStyles.css";

import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";

function HeroImg() {
  return (
    <div className="hero">
        <div className="mask">
            <img src={IntroImg} alt="IntroImg" className="into-img"/>
        </div>
        <div className="content">
            <p>HI, I'M A FREELANCER</p>
            <h1>React Developer.</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contect</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg