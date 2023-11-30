import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../styles/home/homeSection.css';

const HomeSection = (props) => {
    return (
        <div className='home-section'>
            <Container>
                <Row className="content">
                    {props.imageOnRight ? (
                        <>
                            <Col xs={12} lg={6} className="order-md-1">
                                <div className="text right">
                                    <h2 className="section-title">{props.headerText}</h2>
                                    <p>{props.paragraph1}</p>
                                    <p>{props.paragraph2}</p>
                                    <a href={props.link} className="underline-animation">⟶ {props.linkText}</a>
                                </div>
                            </Col>
                            <Col xs={12} lg={6} className="order-md-2">
                                <div className="image-container">
                                    <Image src={props.imageSrc} fluid className="img"/>
                                </div>
                            </Col>
                        </>
                    ) : (
                        <>
                            <Col xs={12} lg={6} >
                                <div className="image-container">
                                    <Image src={props.imageSrc} fluid className="img"/>
                                </div>
                            </Col>
                            <Col xs={12} lg={6}>
                                <div className="text left">
                                    <h2 className="section-title">{props.headerText}</h2>
                                    <p>{props.paragraph1}</p>
                                    <p>{props.paragraph2}</p>
                                    <a href={props.link} className="underline-animation">⟶ {props.linkText}</a>
                                </div>
                            </Col>
                        </>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default HomeSection;