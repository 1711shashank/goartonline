import React, { useState } from 'react'
import './ImageCarousel.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const CarouselHeader = ({ carouselName, handlePrevious, handleNext }) => {
    return (
        <div className='imageCarousel-header'>
            <h1 className='imageCarousel-title'>{carouselName}</h1>
            <div className="imageCarousel-arrow">
                <KeyboardArrowLeftIcon onClick={handlePrevious} />
                <KeyboardArrowRightIcon onClick={handleNext} />
            </div>
        </div>
    );
};

export const CarouselBody = ({ visibleData, handleImageClick }) => {
    return (
        <div className="imageCarousel-body">
            {visibleData.map((art) => (
                <div onClick={() => handleImageClick(art.id, art.collection_id)} key={art.id}>
                    <img src={art.imageLink} alt={art.name} width="100%" />
                    <p>{art.name} {art.name}</p>
                </div>
            ))}
        </div>
    );
};


const ImageCarousel = ({ carouselName, carouselArray, handleImageClick }) => {
    const [startIndex, setStartIndex] = useState(0);

    const handlePrevious = () => setStartIndex((startIndex - 1 + carouselArray.length) % (carouselArray.length - 4));
    const handleNext = () => setStartIndex((startIndex + 1 + carouselArray.length) % (carouselArray.length - 4));
    const visibleData = carouselArray.slice(startIndex, (startIndex + 4));

    return (
        <>
            <div className='imageCarousel'>
                <CarouselHeader carouselName={carouselName} handlePrevious={handlePrevious} handleNext={handleNext} />
                <CarouselBody visibleData={visibleData} handleImageClick={handleImageClick} />
            </div>
        </>
    );
};

export default ImageCarousel;
