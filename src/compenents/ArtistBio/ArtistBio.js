import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';


const ArtistBio = () => {
    return (
        <div className='artistBio gary-background'>
            <h1 className="primary-header">BIO</h1>

            <p className='plain-text'>David Arky is not just an artist for art’s sake. To him, photography is a calling in which the final image is designed to achieve an end. Since his start, he’s seen photography as a kind of visual language, crafted in specific ways to solve specific challenges. Having studied photography at the Art Center College of Design and Rochester Institute of Technology, he now shares his passion with students at the International Center for Photography, where he has taught since 2001.</p>
            <p className='plain-text'>SELECTED SHOWS & AWARDS</p>
            <p className='plain-text'>Creative Quarterly Review (Winner 2013 & 2011) - Foley Gallery, Analog vs Digital - PDN / Objects of Desire Contest Winner  - Society of Illustrators Award</p>
            <p className='plain-text'>SELECTED LIST OF CLIENTS</p>
            <p className='plain-text'>American Express, AT&T, Bank of New York, Bristol Meyers Squibb, Coach USA, Comcast, Eli Lily & Company, Forbes Life , Fortune, Fitness , Fresca,New York Times Magazine, Newsweek , Popular Science , Johnson & Johnson</p>

            <div style={{ display: 'flex', alignItems: 'flex-end', margin: '2rem 0' }}>
                <DownloadIcon sx={{ fontSize: '2rem', color: '#8c8c8c', marginRight: '1rem' }} />
                <p style={{ color: '#151515', fontSize: '14px' }}>...more</p>
            </div>
        </div>
    )
}

export default ArtistBio