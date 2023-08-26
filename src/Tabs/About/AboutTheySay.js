import React, { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const AboutTheySay = () => {
    const imageLinks = [
        {
            imgUrl: 'https://www.goartonline.com/media/custom/upload/File-1554905850.jpg',
        },
        {
            imgUrl: 'https://www.goartonline.com/media/custom/upload/File-1479127956.jpg',
        },
        {
            imgUrl: 'https://www.goartonline.com/media/custom/upload/File-1479128011.jpg',
        },
        {
            imgUrl: 'https://www.goartonline.com/media/custom/upload/File-1479128055.jpg',
        },
        {
            imgUrl: 'https://www.goartonline.com/media/custom/upload/File-1554905850.jpg',
        },
        {
            imgUrl: 'https://www.goartonline.com/media/custom/upload/File-1479127956.jpg',
        },
        {
            imgUrl: 'https://www.goartonline.com/media/custom/upload/File-1479128011.jpg',
        },
        {
            imgUrl: 'https://www.goartonline.com/media/custom/upload/File-1479128055.jpg',
        },

    ];

    const [startIndex, setStartIndex] = useState(0);

    const handlePrevious = () => {
        setStartIndex((startIndex - 1 + imageLinks.length) % (imageLinks.length - 4));
    };

    const handleNext = () => {
        setStartIndex((startIndex + 1 + imageLinks.length) % (imageLinks.length - 4));
    };

    const visibleImages = imageLinks.slice(startIndex, (startIndex + 4));

    return (
        <div className='aboutTheySay' id='they_say_about_us'>
            <h1 className='header-text' style={{ fontWeight: '400', padding: '1rem 0' }}>THEY SAY...</h1>
            <div className='carousel-arrow mui-icons'>
                <KeyboardArrowLeftIcon onClick={handlePrevious} />
                <KeyboardArrowRightIcon onClick={handleNext} />
            </div>
            <div className='aboutTheySay-images'>
                {visibleImages.map((item, index) => (
                    <div className='aboutTheySay-image' key={index}>
                        <img src={item.imgUrl} alt='' width='100%' />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default AboutTheySay;
