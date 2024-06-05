import React from 'react';
import '../Home.css';
import Logo from '../images/avatar.jpg';

const Hero = () => {
    return (
        <div className="home-container">
            <video autoPlay loop muted className="background-video">
                <source src="/video/heroBackground.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay"></div>
            <div className="content">
                <div className="cta-section">
                    <h1>Experience Furniture in Your Space.</h1>
                    <p>Explore our AR showroom to visualize furniture in your home. Enjoy hassle-free delivery, free assembly, and flexible options to rent, rent-to-own, or buy.</p>
                    <button className="cta-button">Start your AR journey</button>
                </div>
                <div className="image-section">
                    <img src={Logo} style={{width:'30px', height:'30px', border:'2px solid  rgb(17, 158, 213)', padding:'2px' }} alt="User" title='User' className='avatar' />
                </div>
            </div>
        </div>
    );
};

export default Hero;
