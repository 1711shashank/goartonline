import React from 'react'
import HeaderText from '../../compenents/HeaderText';


const AboutPartners = () => {

    const imageLinks = [
        {
            imgUrl: 'https://www.goartonline.com/media/wysiwyg/sofitel-logo.jpg',
            link: 'http://www.sofitel.com/gb/asia/index.shtml',
        },
        {
            imgUrl: 'https://www.goartonline.com/media/wysiwyg/french-district-logo.jpg',
            link: 'https://frenchdistrict.com/new-york',
        },
        {
            imgUrl: 'https://www.goartonline.com/media/wysiwyg/quebec-logo.jpg',
            link: 'http://www.international.gouv.qc.ca/en/new-york',
        },
        {
            imgUrl: 'https://www.goartonline.com/media/wysiwyg/republique-francaise-logo.jpg',
            link: 'http://www.gouv.qc.ca/FR/Pages/Accueil.aspx',
        },
        {
            imgUrl: 'https://www.goartonline.com/media/wysiwyg/daum-logo.jpg',
            link: 'https://daum.fr',
        },
        {
            imgUrl: 'https://www.goartonline.com/media/wysiwyg/organisation-internationale-de-la-francophonie-logo.jpg',
            link: 'http://www.francophonie.org',
        },
        {
            imgUrl: 'https://www.goartonline.com/media/wysiwyg/bar-lounge-logo.jpg',
            link: 'http://www.flutebar.com/',
        },
        {
            imgUrl: 'https://www.goartonline.com/media/wysiwyg/lalique-logo.jpg',
            link: 'http://www.lalique.com/en/',
        },
        {
            imgUrl: 'https://www.goartonline.com/media/wysiwyg/city-of-new-york-parks-recreation-logo.jpg',
            link: 'https://www.nycgovparks.org/',
        }
    ];


    return (
        <>
            <div className='aboutPartners' id='partners'>
                <HeaderText headerName='PARTNERS' />

                <div className='aboutPartners-images'>
                    {imageLinks.map((item, index) => (
                        <div className='aboutPartners-image' key={index} >
                            <a href={item.link} target="_blank" rel='noreferrer'>
                                <img src={item.imgUrl} alt='' />
                            </a>
                        </div>
                    ))}
                </div>
            </div >
        </>
    )
}

export default AboutPartners