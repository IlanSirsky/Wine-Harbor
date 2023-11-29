import React from 'react';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const AboutPage = () => {
    return (
        <div className="about-page">
            <Header />
            <h2>About Us</h2>
            {/* Add content about the winery, mission, team, etc. */}
            <p>Our winery prides itself on the meticulous craft behind every drop of our distinguished wines.
                At the heart of this artistry lies our exceptional use of specially crafted barrels.
                These barrels, sourced from select cooperages renowned for their expertise, are meticulously chosen to complement the unique characteristics of our grapes.
                Handcrafted from premium oak, each barrel undergoes a precise seasoning process,
                ensuring it becomes an integral vessel in refining the flavor profiles that define our celebrated wines.</p>
            <p>The journey of our wine from vineyard to bottle is intimately intertwined with the influence of these bespoke barrels.
                Through a delicate dance of oxidation and oak infusion, our wines mature, developing complexity, depth, and nuanced flavors.
                The marriage of oak's natural tannins and the wine's intrinsic qualities within these barrels gives
                rise to an unparalleled symphony of aromas and tastes that captivate the senses.
                This dedication to utilizing the finest barrels embodies our commitment to crafting wines that exemplify excellence and distinction with every sip.</p>
            <Footer />
        </div>
    );
};

export default AboutPage;