import React from 'react';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import WineCard from '../components/WineCard.jsx';
import wines from '../assests/data/wine-data.js';

import '../styles/wines/winesPage.css';

const ShopPage = () => {
    const limitedWines = wines.slice(0, 50);
    return (
        <div>
            <Header />
            <h2 className="shop-title">All wines</h2>
            <p className="shop-subtitle">Browse our selection of wines</p>
            <div className="wine-card-container">

                {limitedWines.map((wine) => {
                    // Using regex to remove text within parentheses from the title
                    const cleanedTitle = wine.title.replace(/\([^()]*\)/g, '').trim();

                    return (
                        <WineCard
                            key={wine.id}
                            id={wine.id}
                            title={cleanedTitle}
                            region={wine.region_1}
                            price={wine.price}
                        />
                    );
                })}
            </div>
            <Footer />
        </div>
    );
};

export default ShopPage;