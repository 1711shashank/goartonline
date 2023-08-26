
import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';
import ArtDescription from '../ArtDescription/ArtDescription';

const ImageCarouselLogic = ({ carouselName, carouselArray }) => {
    const [selectedArt, setSelectedArt] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleImageClick = (art, index) => {
        setSelectedArt(art);
        setCurrentIndex(index);
    };

    const closeDescriptionHandler = () => {
        setSelectedArt(null);
    };

    const nextArt = () => {
        const nextIndex = (currentIndex + 1) % carouselArray.length;
        setSelectedArt(carouselArray[nextIndex]);
        setCurrentIndex(nextIndex);
    };

    const previousArt = () => {
        const previousIndex = (currentIndex - 1 + carouselArray.length) % carouselArray.length;
        setSelectedArt(carouselArray[previousIndex]);
        setCurrentIndex(previousIndex);
    };

    return (
        <>
            {selectedArt && (
                <ArtDescription
                    artData={selectedArt}
                    closeDescriptionHandler={closeDescriptionHandler}
                    previousArt={previousArt}
                    nextArt={nextArt}
                    currentIndex={currentIndex}
                    totalArtworks={carouselArray.length}
                />
            )}

            <ImageCarousel carouselName={carouselName} carouselArray={carouselArray} handleImageClick={handleImageClick} />
        </>
    );
};

export default ImageCarouselLogic;
