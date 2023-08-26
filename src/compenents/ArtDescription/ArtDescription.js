import React from 'react'
import './ArtDescription.css'
import DescriptionHeader from './DescriptionHeader'
import DescriptionImage from './DescriptionImage'
import DescriptionData from './DescriptionData'



const ArtDescription = ({ artWork, artImage, nextArt, previousArt, currentIndex, totalArtworks, closeDescriptionHandler }) => {

    return (
        <>
            <div className='artDescription'>
                <DescriptionHeader
                    previousArt={previousArt}
                    nextArt={nextArt}
                    currentIndex={currentIndex}
                    totalArtworks={totalArtworks}
                    closeDescriptionHandler={closeDescriptionHandler}
                />
                <div className='artDescription-body'>
                    <DescriptionImage artImage={artImage} />
                    <DescriptionData artWork={artWork} />
                </div>
            </div>
        </>
    )
}

export default ArtDescription