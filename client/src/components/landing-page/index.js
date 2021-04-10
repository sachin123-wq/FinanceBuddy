import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { Button, OutlineButton } from '../../common/button';
import Hero from '../../images/calc.png';
import './index.scss';


const LandingPage = () => {

    return (
        <div className="landing-wrapper">
            {/* 
                SECTION - 1
            */}
            <div className="section-1">
                <div className="hero-image">
                    <img src={Hero} alt="hero" />
                </div>
                <div className="hero-detail">
                    <p className="hero-title">Become Smart at Finance</p>
                    <p className="hero-text">We have courses curated by experts to take from zero to hero</p>
                    <div className="hero-btns">
                        <OutlineButton text="Sign Up" className="landing-page-btns" onClick={() => { }} />
                        <Button text="Get Started" className="landing-page-btns" onClick={() => { }} />
                    </div>
                </div>
            </div>

            {/* 
                FOOTER 
            */}
            <div className="footer">
                <div className="contact-container">
                    <div className="logo">
                        <h3>FinBuddy</h3>
                    </div>
                    <div className="contact-info">
                        <p className="contact" >
                            <i className="fa fa-phone" style={{ 'color': 'green' }}></i>
                            6299286051
                        </p>
                        <p className="contact">
                            <i className="fa fa-envelope" style={{ 'color': 'grey' }}></i>
                            help.fin@gmail.com
                        </p>
                    </div>
                </div>
                <div className="social-media-icons">
                    <a href="#" target="new">
                        <span className="soc-icon" style={{ color: "#4267B2" }}>
                            <i className="fa fa-facebook-square"></i>
                        </span>
                    </a>
                    <a href="#" target="new">
                        <span className="soc-icon" style={{ 'color': '#2867B2' }}>
                            <i className="fa fa-linkedin-square"></i>
                        </span>
                    </a>
                    <a href="#" target="new">
                        <span className="soc-icon" style={{ 'color': '#1DA1F2' }}>
                            <i className="fa fa-twitter-square"></i>
                        </span>
                    </a>
                </div>
                <div>&#169; 2021</div>
            </div>
        </div>
    )
}

export default LandingPage
