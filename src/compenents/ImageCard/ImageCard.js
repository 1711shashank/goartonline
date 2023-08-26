import React from 'react'
import './ImageCard.css'

const ImageCard = ({ imageLink, name, isActive }) => {


    return (
        <>
            <div className={`imageCard `}>
                <img className={`image-border ${isActive ? 'active-box' : ''}`} src={imageLink} alt={name} width='100%' />
                <p className={`image-name plain-text ${isActive ? 'active-text' : ''}`}> {name} </p>
            </div>

        </>
    )
}

export default ImageCard