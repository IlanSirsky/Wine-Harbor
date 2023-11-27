import React from 'react';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const ShopPage = () => {
    // Fetch and display wine data here
    return (
        <div className="shop-page">
            <Header />
            <h2>Shop Wines</h2>
            {/* Display wines from the dataset */}
            <Footer />
        </div>
    );
};

export default ShopPage;