import React from 'react';
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <main>
                <section className="featured-section">
                    <h2>Featured Wines</h2>
                    {/* Display featured wines or any content */}
                </section>
                {/* Add more sections or content as needed */}
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;