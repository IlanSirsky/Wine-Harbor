import React from 'react';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const DetailsPage = () => {
    // Fetch and display details of a specific wine
    return (
        <div className="details-page">
            <Header />
            <h2>Wine Details</h2>
            {/* Display details of the selected wine */}
            <Footer />
        </div>
    );
};

export default DetailsPage;