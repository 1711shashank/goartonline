import React from 'react'
import './PickOfTheMonth.css'
import ImageCarousel from '../../compenents/ImageCarousel/ImageCarousel';
import { useNavigate } from 'react-router-dom';
import { pickOfTheMonthArray } from '../../utility/apiData'

const PickOfTheMonth = () => {

    const navigator = useNavigate();
    const handleImageClick = (artId, collectionId) => {
        const artistsId = '1-artistId';
        navigator(`../artists/${artistsId}/${collectionId}#${artId}`);
    }

    return (
        <>
            <div className='pickOfTheMonth tab-body'>
                <ImageCarousel carouselName='Pick of the months' carouselArray={pickOfTheMonthArray} handleImageClick={handleImageClick} />
            </div>
        </>
    )
}

export default PickOfTheMonth