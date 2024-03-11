import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./NavbarStyles.css"
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
    <div className={color ? "header header-bg" :"header"}>
        <Link to="/">
            <h1>
                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.80171 0.193893C6.59602 -0.0646309 6.20343 -0.0646309 5.99775 0.193892L0.111782 7.59192C-0.0372605 7.77925 -0.037261 8.04472 0.111782 8.23205L6.39973 16.1353L12.5403 23.8534C12.746 24.1119 13.1386 24.1119 13.3443 23.8534L19.2303 16.4554C19.3793 16.2681 19.3793 16.0026 19.2303 15.8153L12.9424 7.91198H24.9619C25.3921 7.91198 25.6319 7.41469 25.364 7.07796L19.8869 0.193892C19.6812 -0.0646309 19.2887 -0.0646309 19.083 0.193893L12.9424 7.91198L6.80171 0.193893Z" fill="#2E2E27"/></svg>
Vesto</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li className='act'>
            
            <button className='btn btn-light btn1'>Sign in</button>
            <button className='btn'>Schedule a demo</button>
        
            </li>
        </ul>
       
        <div className='hamburger' onClick={handleclick}>
            {click ? (<FaTimes size={20} style={{color:"#000"}}/>) :(<FaBars size={20} style={{color:"#000"}}/>)}
        </div>
    </div>
  )
}

export default Navbar