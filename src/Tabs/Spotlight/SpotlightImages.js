import React from 'react'

const SpotlightImages = ({ sportLightArt, handleImageClick, selectedIndex }) => {
    return (
        <>
            <div className='spotlightImages'>
                {sportLightArt.imageArray.map((imageLink, index) => (
                    <div onClick={() => handleImageClick(index)} key={index}>
                        <img
                            className={`${index === selectedIndex ? 'active-box' : ''}`}
                            src={imageLink}
                            width="90%"
                            alt=''
                        />
                    </div>
                ))}
            </div>

        </>
    )
}

export default SpotlightImages