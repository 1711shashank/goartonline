import React from 'react'
import AboutServicesDescriptionList from './AboutServicesDescriptionList';

const AboutServices = () => {

    const servicesdata = [
        {
            title: 'Private Collectors',
            description: ['Bullet 1', 'Bullet 2', 'Bullet 3', 'Bullet 4'],
        },
        {
            title: 'Corporations and International Institutions',
            description: ['Bullet 1', 'Bullet 2', 'Bullet 3', 'Bullet 4'],
        },
        {
            title: 'Hospitality Industry',
            description: ['Bullet 1', 'Bullet 2', 'Bullet 3', 'Bullet 4'],
        },
        {
            title: 'Galleries and Art Dealers',
            description: ['Bullet 1', 'Bullet 2', 'Bullet 3', 'Bullet 4'],
        },
    ];

    return (
        <div className='aboutServices' id='services'>
            <div className='aboutServices-left'>
                <h1 className='header-text' style={{ fontWeight: '400', padding: '1rem 0' }}>SERVICES</h1>
                <AboutServicesDescriptionList data={servicesdata} />
            </div>
            <div className='aboutServices-right'>
                <img src='https://www.goartonline.com/media/wysiwyg/PICTURE_1_-_ABOUT_US.JPG' alt='' width='100%' />
            </div>

        </div>
    )
}

export default AboutServices