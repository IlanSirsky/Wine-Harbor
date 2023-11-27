import React from 'react';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const AboutPage = () => {
    return (
        <div className="about-page">
            <Header />
            <h2>About Us</h2>
            {/* Add content about the winery, mission, team, etc. */}
            <Footer />
        </div>
    );
};

export default AboutPage;