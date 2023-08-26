import React from 'react';

const GalleryItem = ({ link, imageSrc, title, description }) => {
    return (
        <div className='virtualGallery-item'>
            <a href={link}>
                <img src={imageSrc} alt='' width='100%' />
            </a>
            <h2 className='virtual-exhibits-name text-ellipsis'>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default GalleryItem;
