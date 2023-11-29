import React from 'react';
import Image from 'react-bootstrap/Image';
import '../styles/homePage.css';

const HomeSection = (props) => {

    return (
        <section className={props.className}>
            <Image className="image" src={props.img} fluid />
            <div className="text">
                <h2 className="section-title">{props.title}</h2>
                <p>{props.text1}</p>
                <p>{props.text2}</p>
                <a href={props.link} class="underline-animation">⟶ {props.discover}</a>
            </div>
        </section>
    );
}

export default HomeSection;