import React from 'react'
import './Events.css'
import HeaderText from '../../compenents/HeaderText';
import ImageCarouselLogic from '../../compenents/ImageCarousel/ImageCarouselLogic';


const Events = () => {

    const otherCarouselArray = [
        {
            imageLink: 'https://www.goartonline.com/media/catalog/product/9/_/9_david_arky-x-ray_football_helmet-cool.jpg',
        },
        {
            imageLink: 'https://www.goartonline.com/media/catalog/product/h/a/handbag_-_warm_grey.jpg',
        },
        {
            imageLink: 'https://www.goartonline.com/media/catalog/product/cache/1/small_image/280x280/9df78eab33525d08d6e5fb8d27136e95/a/r/arky_-_1_-_30_x_30_-_lost_in_new_york_2_-_red.jpg',
        },
        {
            imageLink: 'https://www.goartonline.com/media/catalog/product/c/r/croix_celtique_5_1.jpg',
        },
        {
            imageLink: 'https://www.goartonline.com/media/catalog/product/9/_/9_david_arky-x-ray_football_helmet-cool.jpg',
        },
        {
            imageLink: 'https://www.goartonline.com/media/catalog/product/h/a/handbag_-_warm_grey.jpg',
        },
        {
            imageLink: 'https://www.goartonline.com/media/catalog/product/cache/1/small_image/280x280/9df78eab33525d08d6e5fb8d27136e95/a/r/arky_-_1_-_30_x_30_-_lost_in_new_york_2_-_red.jpg',
        },
        {
            imageLink: 'https://www.goartonline.com/media/catalog/product/c/r/croix_celtique_5_1.jpg',
        },
    ];
    const pastCarouselArray = [
        {
            imageLink: 'https://www.goartonline.com/media/catalog/product/c/o/cover4_1.jpg',
        },
        {
            imageLink: 'https://www.goartonline.com/media/catalog/product/e/v/events5.jpg',
        },
        {
            imageLink: 'https://www.goartonline.com/media/catalog/product/e/v/event_goart3.jpg',
        },
        {
            imageLink: 'https://www.goartonline.com/media/catalog/product/c/a/card.jpg',
        },
        {
            imageLink: 'https://www.goartonline.com/media/catalog/product/c/o/cover4_1.jpg',
        },
        {
            imageLink: 'https://www.goartonline.com/media/catalog/product/e/v/events5.jpg',
        },
        {
            imageLink: 'https://www.goartonline.com/media/catalog/product/e/v/event_goart3.jpg',
        },
        {
            imageLink: 'https://www.goartonline.com/media/catalog/product/c/a/card.jpg',
        },
    ];


    return (
        <>
            <div className='events tab-body'>
                <HeaderText headerName='Events' />

                <div className='events-body'>
                    <div className='events-bodyLeft'>
                        <img src='https://www.goartonline.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/e/v/events_.png' alt='' width='100%' />
                        <h1 className='events-name'> The Great Spirit by Anthony Quinn </h1>
                        <p className='events-description'>A virtual exhibit of a monumental book</p>
                    </div>
                    <div className='events-bodyRight'>
                        <img src='https://www.goartonline.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/e/v/events_main_1.jpg' alt='' width='100%' />
                        <h1 className='events-name'> NOUVELLE VAGUE </h1>
                        <p className='events-description'>@ Maison 10 | Feb 5 - June 11, 2023</p>
                        <p className='events-description'>4 West 29 St | NYC </p>
                    </div>

                </div>

                <div>
                    <ImageCarouselLogic carouselName='Other Events' carouselArray={otherCarouselArray} />
                    <ImageCarouselLogic carouselName='Past Events' carouselArray={pastCarouselArray} />
                </div>
            </div>
        </>
    )
}

export default Events