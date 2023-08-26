import React from 'react';
import './VirtualGallery.css';
import GalleryItem from './GalleryItem';
import HeaderText from '../../compenents/HeaderText';

const VirtualGallery = () => {

    const galleryItems = [
        {
            imageSrc:
                'https://www.goartonline.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/e/x/expo2_4.jpg',
            title: 'BONNEFOIT - Les Venus',
            description: 'Master of the nude',
        },

        {
            imageSrc:
                'https://www.goartonline.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/w/e/web_cover_6.jpg',
            title: 'Etincelle and her books',
            description: 'Celebrating Ariane Lancell monumental books',
        },
        {
            imageSrc:
                'https://www.goartonline.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/m/u/multimedia.jpg',
            title: 'KABBALAH - video tour',
            description: 'Celebrating Ariane Lancell monumental books',
        },
    ];


    return (
        <>
            <div className='virtualGallery tab-body'>
                <HeaderText headerName='Virtual Gallery' />

                <div className='virtualGallery-container'>
                    {galleryItems.map((item, index) => (
                        <GalleryItem
                            key={index}
                            link={item.link}
                            imageSrc={item.imageSrc}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default VirtualGallery;
