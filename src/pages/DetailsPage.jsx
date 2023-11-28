import React from 'react';
import { useParams } from 'react-router-dom';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import wines from '../assests/data/wine-data.js';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../styles/detailsPage.css';


const DetailsPage = () => {
    const { id } = useParams();

    function findWineById(idToFind) {
        return wines.find(wine => wine.id === parseInt(idToFind));
    }

    const foundWine = findWineById(id);
    const { title, region_1, price, description, points, variety, winery } = foundWine;
    const cleanedTitle = title.replace(/\([^()]*\)/g, '').trim();
    return (
        <div className="details-page">
            <Header />
            <Container className="wine-details">
                <Row className="mt-5">
                    <Col md={4}>
                        <Image src={"https://www.lancaster-estate.com/wp-content/uploads/sites/15/2022/04/WL-bottle-3-w-shadow.png?w=178"} alt={cleanedTitle} fluid />
                    </Col>
                    <Col md={8}>
                        <h2 className="wine-title">{cleanedTitle}</h2>
                        <p><strong>Variety:</strong> {variety}</p>
                        <p><strong>Description:</strong> {description}</p>
                        <p><strong>Winery:</strong> {winery}</p>
                        <p><strong>Region:</strong> {region_1}</p>
                        <p><strong>Size:</strong> 750 ml</p>
                        <p><strong>Rating:</strong> {points} / 100</p>
                        
                        <p><strong>Price:</strong> {price} $</p>                                      
                    </Col>
                </Row>
            </Container>

            <Footer />

        </div>
    );
};

export default DetailsPage;