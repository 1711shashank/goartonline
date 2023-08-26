import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';

const ArtistStatement = () => {
    return (
        <div className='artistStatement'>
            <h1 className="primary-header">Statement</h1>

            <p className='plain-text'>The use of x-ray images and computers are tools for realizing David Arky's vision as an artist with an interest in Sciences of the natural world.</p>
            <p className='plain-text'>Photography and the x-ray process both explore ideas of exposure of nature. An inner life is uncovered in the nature of x-ray photography and in the actions of the subjects. Static props from everyday life become animated and humanized with recognizable personas. Stories of the world and of nature become the nonsensical and yet unthreatening in the natural world and thus become deeply familiar.</p>
            <p className='plain-text'>The drama of x-ray photography and particularly the sense that the viewers are left with theopportunity to allow their imaginations to wander and fill in the voids that color x-ray images seem to complete. The transparent-ness of the x-ray process allowed me to bring in added depth to the images. It also allowed me to add the language of my interest of how one sees sciences and art merge, while keeping some mystery about who we are in a world bound by sciences.</p>
            
            <div style={{ display: 'flex', alignItems: 'flex-end', margin: '2rem 0' }}>
                <DownloadIcon sx={{ fontSize: '2rem', color: '#8c8c8c', marginRight: '1rem' }} />
                <p style={{ color: '#151515', fontSize: '14px' }}>...more</p>
            </div>
        </div>
    )
}

export default ArtistStatement