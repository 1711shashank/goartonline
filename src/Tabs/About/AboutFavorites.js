import React from 'react';
import FavoritesTable from './FavoritesTable'
import HeaderText from '../../compenents/HeaderText';

const AboutFavorites = () => {
    const favoritesData = [
        {
            magazineName: "NEC PLUS ULTRA - Le Magazine d'Art de Vivre",
            websiteUrl: 'www.necplusultra.paris',
        },
        {
            magazineName: "JEAN PIERRE HEIM - Architect",
            websiteUrl: 'www.heimdesign.com',
        },
        {
            magazineName: "CARLINA - L'excellence de la nature pour votre beauté",
            websiteUrl: 'carlina-paris.fr',
        },
        {
            magazineName: "Tracey Ryan Pilates - New York City",
            websiteUrl: 'traceyryanpilates.com',
        }
    ];

    return (
        <>
            <div className="aboutFavorites" id='favorites'>
                <HeaderText headerName='FAVORITES' />
                <div className="aboutFavorites-table">
                    {favoritesData.map((data, index) => (
                        <FavoritesTable
                            key={index}
                            magazineName={data.magazineName}
                            websiteUrl={data.websiteUrl}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default AboutFavorites;
