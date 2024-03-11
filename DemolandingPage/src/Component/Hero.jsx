import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import heroimg from "../assets/img1.png"
import "./HeroStyles.css"
import heroimg2 from "../assets/image.png"

function Hero() {
  return (
    <>
    <div className='hero'>
        <div className='hero-tittle'>
            <h1>All of your company's <br />financial accounts in one view</h1>
            <p>Connect and control all of your global business accounts <br />from one dashboard. Automatically earn on your idle cash.</p>
            <button className='btn'>Schedule a demo <FaArrowRight size={15} style={{color:"#fff"}}/></button>
        </div>
        <div className='hero-img'>
            <img src={heroimg} alt="" />
        </div>
    </div>
    <div className="company">
          <p>Leading companies use Vesto as their treasury management system</p>
           <div>
            <img src={heroimg2} alt="" /></div>
            </div> 
    </>
  )
}

export default Hero