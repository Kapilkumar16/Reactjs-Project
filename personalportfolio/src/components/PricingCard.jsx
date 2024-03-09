import { Link } from "react-router-dom";
import "./PricingCardStyles.css";

import React from 'react'

function PricingCard() {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc"></p>
                <p>- 3Days -</p>
                <p>- 3pages -</p>
                <p>-Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>
            </div>

            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="btc"></p>
                <p>- 5Days -</p>
                <p>- 8pages -</p>
                <p>-Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>
            </div>

            <div className="card">
                <h3>- Business -</h3>
                <span className="bar"></span>
                <p className="btc"></p>
                <p>- 10Days -</p>
                <p>- 15pages -</p>
                <p>-Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard