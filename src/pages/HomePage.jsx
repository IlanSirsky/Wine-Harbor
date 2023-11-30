import React from 'react';
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import HomeSection from "../components/HomeSection.jsx";
import HomeImage from '../components/HomeImage.jsx';

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <HomeImage />
            <main>
                
                <HomeSection
                    imageSrc="https://www.celebritycruises.com/blog/content/uploads/2020/06/california-wine-regions-napa-valley-1024x592.jpg"
                    headerText="Our Terroirs"
                    paragraph1="Our vineyards are located in the heart of the most prestigious appellations of the Bordeaux region."
                    paragraph2="Our wines are the result of a unique know-how, a perfect mastery of the vineyard and a rigorous selection of the best grapes."
                    link="/about/winery"
                    linkText="Discover more about us"
                    imageOnRight={false}
                />

                <HomeSection
                    imageSrc="https://www.thewinesociety.com/4a4f8a/globalassets/discovery/articles/barrels_1200x675.jpg"
                    headerText="Crafting Excellence"
                    paragraph1="The Essence of Our Signature Wine Barrels"
                    paragraph2="Meticulously selected from renowned cooperages, our premium oak barrels are the backbone of our winemaking, enhancing the unique traits of our grapes with precision."
                    link="/about/barrels"
                    linkText="Discover more about our barrels"
                    imageOnRight={true}
                />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;