import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';

const DescriptionHeader = ({ closeDescriptionHandler, previousArt, nextArt, currentIndex, totalArtworks }) => {
    
    const fraction = `${currentIndex + 1}/${totalArtworks}`;

    return (
        <div className='descriptionHeader'>
            <div className='secondary-header uppercase'>SPORTS | XRAY</div>
            <div className='descriptionHeader-right'>
                
                <ArrowBackIosIcon onClick={previousArt} sx={{ fontSize: '2rem', stroke: "#ffffff", color: '#600e63' }} />
                <p className='descriptionHeader-fraction'>{fraction}</p>
                <ArrowForwardIosIcon onClick={nextArt} sx={{ fontSize: '2rem', stroke: "#ffffff", color: '#600e63' }} />

                <CloseIcon onClick={closeDescriptionHandler} sx={{ fontSize: '3rem', stroke: "#ffffff", color: '#600e63', marginLeft: '1rem' }} />
            </div>
        </div>
    );
};

export default DescriptionHeader;
