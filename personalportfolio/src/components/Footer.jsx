import "./FooterStyles.css"
import {FaHome, FaPhone , FaMailBulk, FaLinkedinIn ,FaFacebook,FaTwitter} from "react-icons/fa"

import React from 'react'

function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                  <FaHome size={20} style={{color:"#fff" , marginRight:"2rem"}}/>
                  <div>
                    <p>123 Housing Noida </p>
                    <p>India</p>
                  </div>
                </div>
                <div className="phone">
                  <h4>
                  <FaPhone size={20} style={{color:"#fff" , marginRight:"2rem"}}/>
                  9560703432
                  </h4>
                </div>
                <div className="email">
                  <h4>
                  <FaMailBulk size={20} style={{color:"#fff" , marginRight:"2rem"}}/>
                  info@gmail.com
                  </h4>
                </div>
            </div>
            <div className="right">
              <h4>About the company</h4>
              <p>This is me Kapil kumar. I am front End developer. I enjoy Discussing new 
                project and design challenges.
              </p>
              <div className="social">
              <FaFacebook size={30} style={{color:"#fff" , marginRight:"1rem"}}/>
              <FaTwitter size={30} style={{color:"#fff" , marginRight:"1rem"}}/>
              <FaLinkedinIn size={30} style={{color:"#fff" , marginRight:"1rem"}}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer