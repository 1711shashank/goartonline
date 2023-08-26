import React from 'react'
import './About.css'
import AboutPartners from './AboutPartners'
import AboutFavorites from './AboutFavorites'
import AboutPress from './AboutPress'
import AboutPressImages from './AboutPressImages'
import AboutTheySay from './AboutTheySay'
import AboutServices from './AboutServices'
import HeaderText from '../../compenents/HeaderText'

const About = () => {

    return (
        <>
            <div className='about'>
                <HeaderText headerName='About' />

                <div className='about-navbar'>
                    <ul>
                        <a href='#services'> Services </a>
                        <a href='#press'>Press </a>
                        <a href='#they_say_about_us'>They Say ... </a>
                        <a href='#partners'>Partners </a>
                        <a href='#favorites'> Favorites</a>
                    </ul>
                </div>

                <div className='about-body'>
                    <div className='about-left'>
                        <img src="https://www.goartonline.com/media/wysiwyg/about_us.jpg" alt='' width='100%' />
                    </div>
                    <div className='about-right'>
                        <h1 className='tab-sub-header'> ODILE GORSE & GHENADIE BURLACU </h1>

                        <p>G & O ART is an inimitable representative and promotional agency for international contemporary artists.</p>

                        <p> G & O ART is the synergy of Odile Gorse's expertise of more than 40 years in the art business and Ghenadie Burlacu's skill in public relations and advertising.</p>

                        <p>G & O ART is a unique art source-expert catering to Private and Corporate Collectors, International Institutions and Foundations, Hospitality and Luxury industries, Galleries, Art Dealers and Museums.</p>

                        <p>Its success is based on close working relationship with all clients and on the ability to provide a wide range of visual arts of nationally and internationally recognized or emerging artists.</p>

                        <p>G & O ART collaborated as independent curators with many reputable organizations: The World Bank in WDC, General Consulate of France and the French Embassy in New York, French Institute / Alliance Française, City of New York Parks & Recreation, the United Nations, Barnes & Noble, Seamen’s Church Institute, The Corning Gallery at Steuben Glass,  Air France and BNP Paribas just to name a few.</p>

                        <p>The French Ministry of Culture and Communication awarded Odile Gorse the prestigious French Medal of Arts - Chevalier dans l’Ordre des Arts et des Lettres - for her work in furthering the arts.</p>
                    </div>

                </div>

                <AboutServices />
                <AboutPress />
                <AboutPressImages />
                <AboutTheySay />
                <AboutPartners />
                <AboutFavorites />


            </div>
        </>
    )
}

export default About