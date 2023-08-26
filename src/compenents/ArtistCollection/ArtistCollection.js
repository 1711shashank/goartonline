import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import { useNavigate } from 'react-router-dom'
import {artistCollection} from '../../utility/apiData'

const ArtistCollection = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='artCollection tab-body'>
                <h1 className="primary-header">COLLECTIONS BY ARKY</h1>
                <div className='artists-body'>
                    {
                        artistCollection.map((collection) => (
                            <div onClick={() => navigate(collection.id)} key={collection.id}  >
                                <ImageCard imageLink={collection.imageLink} name={collection.name} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ArtistCollection