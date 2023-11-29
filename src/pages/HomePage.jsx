import React from 'react';
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Image from 'react-bootstrap/Image';
import '../styles/homePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <main>
                <section className="terroirs">
                    <Image src="https://www.celebritycruises.com/blog/content/uploads/2020/06/california-wine-regions-napa-valley-1024x592.jpg" fluid />
                    <div className="terroirs-text">
                        <h2>Our Terroirs</h2>
                        <p>Our vineyards are located in the heart of the most prestigious appellations of the Bordeaux region.</p>
                        <p>Our wines are the result of a unique know-how, a perfect mastery of the vineyard and a rigorous selection of the best grapes.</p>

                        <a href='/about' class="underline-animation">⟶ Discover more about us</a>
                    </div>
                </section>

                <section className="terroirs">
                    <Image src="https://www.celebritycruises.com/blog/content/uploads/2020/06/california-wine-regions-napa-valley-1024x592.jpg" fluid />
                    <div className="terroirs-text">
                        <h2>Our Terroirs</h2>
                        <p>Our vineyards are located in the heart of the most prestigious appellations of the Bordeaux region.</p>
                        <p>Our wines are the result of a unique know-how, a perfect mastery of the vineyard and a rigorous selection of the best grapes.</p>

                        <a href='/about' class="underline-animation">⟶ Discover more about us</a>
                    </div>
                </section>


            </main>
            <Footer />
        </div>
    );
};

export default HomePage;