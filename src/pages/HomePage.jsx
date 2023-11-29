import React from 'react';
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Image from 'react-bootstrap/Image';
// import HomeSection from "../components/HomeSection.jsx";
import '../styles/terroirsSection.css';
import '../styles/barrelsSection.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <main>
                {/* <HomeSection /> */}
                <section className="terroirs">
                    <Image src="https://www.celebritycruises.com/blog/content/uploads/2020/06/california-wine-regions-napa-valley-1024x592.jpg" fluid />
                    <div className="terroirs-text">
                        <h2>Our Terroirs</h2>
                        <p>Our vineyards are located in the heart of the most prestigious appellations of the Bordeaux region.</p>
                        <p>Our wines are the result of a unique know-how, a perfect mastery of the vineyard and a rigorous selection of the best grapes.</p>

                        <a href='/about/winery' class="underline-animation">⟶ Discover more about us</a>
                    </div>
                </section>

                <section className="barrels">
                    <div>
                        <Image src="https://www.thewinesociety.com/4a4f8a/globalassets/discovery/articles/barrels_1200x675.jpg" fluid />
                        <div className="barrels-text">
                            <h2>Crafting Excellence </h2>
                            <p>The Essence of Our Signature Wine Barrels</p>
                            <p>Meticulously selected from renowned cooperages, our premium oak barrels are the backbone of our winemaking, enhancing the unique traits of our grapes with precision.</p>
                            <p>Through a delicate interplay of oak and wine, these barrels sculpt the nuanced flavors and complexities that define our acclaimed wines, embodying our commitment to crafting excellence sip by sip.</p>

                            <a href='/about/barrels' class="underline-animation">⟶ Discover more about our barrels</a>
                        </div>
                    </div>
                </section>


            </main>
            <Footer />
        </div>
    );
};

export default HomePage;