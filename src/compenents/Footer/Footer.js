
import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-row'>

                    <div className='footer-column follow-me-text'>
                        <p>Follow GOARTONLINE on: </p>
                        <FacebookIcon />
                        <InstagramIcon />
                    </div>
                    <div className='footer-column'> <p> To Join our mailing list <span> Click here</span>  </p></div>
                    <div className='footer-column'> <p> © 2017 G&O Art. All Rights Reserved. </p></div>

                </div>
                <div className='footer-row'>
                    <h2 className='footer-text'>
                        G & O Art LLC. is an inimitable representative and promotional agency providing a wide and unique range of visual arts to Private and Corporate Collectors,
                        <br />
                        International Institutions, Luxury and Hospitality Industries, Museums, Galleries and Art Dealers
                    </h2>
                </div>
            </div>


        </>
    )
}

export default Footer