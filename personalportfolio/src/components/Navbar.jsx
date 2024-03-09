import React, { useState } from 'react'
import "./NavbarStyles.css"
import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from "react-icons/fa";

function Navbar() {

    const [click,setclick] = useState(false);
    const handleclick =() =>setclick(!click);

    const [color,setcolor] = useState(false);
    const changeColor = () =>{
        if(window.scrollY >=100){
            setcolor(true);
        }
        else{
            setcolor(false);
        }
    };

    window.addEventListener("scroll" , changeColor);
  return (
    <div className ={color ? "header header-bg" :"header"}>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Project">Project</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Contact">Contact Us</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleclick}>
            {click ? (<FaTimes size={20} style={{color:"#fff"}}/>) :(<FaBars size={20} style={{color:"#fff"}}/>)}
        </div>
    </div>
  )
}

export default Navbar