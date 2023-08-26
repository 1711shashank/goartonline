import React from 'react'
import './Archives.css'
import HeaderText from '../../compenents/HeaderText';
import ImageCarouselLogic from '../../compenents/ImageCarousel/ImageCarouselLogic';
const Archives = () => {

    const archivesArray = [
        {
            carouselName: '2018',
            carouselArray: [{
                imageLink: 'https://www.goartonline.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/1/_/1_-_touch_someone_s_heart.jpg',
            },
            {
                imageLink: 'https://www.goartonline.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/4/_/4_-_robion_-_portes_ouvertes.jpg',
            },
            {
                imageLink: 'https://www.goartonline.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/8/_/8_-_robion_at_deux6.jpg',
            },
            {
                imageLink: 'https://www.goartonline.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/9/_/9_-_joy_and_peace.jpg',
            }]
        },
        {
            carouselName: '2017',
            carouselArray: [{
                imageLink: 'https://www.goartonline.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/1/_/1_-_diaz_2017_1.jpg',
            },
            {
                imageLink: 'https://www.goartonline.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/8/_/8_-_g_o_art_in_the_news.jpg',
            },
            {
                imageLink: 'https://www.goartonline.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/5/_/5_-_jvg_-_af_copy.jpg',
            },
            {
                imageLink: 'https://www.goartonline.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/7/_/7_-_robion.jpg',
            }]
        },

    ];

    return (
        <>
            <div className='archives tab-body'>
                <HeaderText headerName='Archives' />

                <div>
                    {
                        archivesArray.map((curElement) => (
                            <ImageCarouselLogic carouselName={curElement.carouselName} carouselArray={curElement.carouselArray} />

                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Archives