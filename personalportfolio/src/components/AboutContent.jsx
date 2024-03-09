import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import react1 from "../assets/react1.jpg";
import react2 from "../assets/react2.webp";

import React from 'react'

function AboutContent() {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a react Front-End Developer. I create responsive secure website for Open Source</p>
            <Link to="/contact">
                <button className="btn">CONTACT</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} alt="" className="img"/>
                </div>
                <div className="img-stack bottom">
                    <img src={react2} alt="" className="img"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;