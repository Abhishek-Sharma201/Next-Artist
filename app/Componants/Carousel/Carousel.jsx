import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        'https://wallpapers.com/images/hd/1920-x-1080-hd-qk3gikd2sbt9vio5.jpg',
        'https://wallpapers.com/images/hd/1920-x-1080-hd-qk3gikd2sbt9vio5.jpg',
        'https://wallpapers.com/images/hd/1920-x-1080-hd-qk3gikd2sbt9vio5.jpg',
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % images.length);
        }, 3000); // Change the number to adjust transition time (in milliseconds)

        return () => clearInterval(intervalId);
    }, [currentSlide, images.length]); // Add currentSlide to the dependency array


    const handlePrevious = () => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    };

    return (
        <>
            <div className="carousel">
                <button className="carousel-button prev" onClick={handlePrevious}>
                    &lt;
                </button>
                <div className="imageContainer">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            className={currentSlide === index ? 'active' : ''}
                            src={image}
                            alt="img"
                        />
                    ))}
                </div>
                <button className="carousel-button next" onClick={handleNext}>
                    &gt;
                </button>
            </div>
        </>
    );
};

export default Carousel;
