import "./WorkCardStyles.css";
import React from 'react'
import { NavLink } from "react-router-dom";

function WorkCard(props) {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="project Image" />
                <h2 className="project-tittle">{props.tittle}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        <NavLink to={props.view} className="btn">VIEW</NavLink>
                        <NavLink to="url.com" className="btn">SOURCE</NavLink>
                    </div>
                </div>
            </div>
  )
}

export default WorkCard