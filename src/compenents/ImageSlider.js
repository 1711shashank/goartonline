/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import HomeSlider1 from '../images/HomeSlide1.png';
import HomeSlider2 from '../images/HomeSlide2.png';
import HomeSlider3 from '../images/HomeSlide3.png';

const ImageSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [HomeSlider1, HomeSlider2, HomeSlider3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <div>
                <img src={images[currentImage]} alt="Slider" style={{ width: '100vw' }} />
            </div>
        </>
    );
};

export default ImageSlider;
