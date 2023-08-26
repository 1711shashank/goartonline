import React, { useState } from 'react';
import './Artists.css';
import ImageCard from '../../compenents/ImageCard/ImageCard';
import { useNavigate } from 'react-router-dom';
import useApiData from '../../utility/useApiData';
import {artistDataArray} from '../../utility/apiData'

const Artists = () => {


    // const artistDataArray = useApiData('http://localhost:3002/artists');
    // console.log(artistDataArray);
    

    const [activeTab, setActiveTab] = useState('Artists');
    const navigate = useNavigate();


    return (
        <>
            <div className='artists tab-body'>

                <div className="artists-header">
                    <p className={`artists-header-tab ${activeTab === 'Artists' ? 'active' : ''}`} onClick={() => setActiveTab('Artists')} > Artists </p>
                    <p className={`artists-header-tab ${activeTab === 'Collections' ? 'active' : ''}`} onClick={() => setActiveTab('Collections')} > Collections </p>
                </div>

                <div className='artists-body'>
                    {artistDataArray.map((artist, index) => (
                        <div onClick={() => navigate(artist.id)} key={index}>
                            <ImageCard
                                imageLink={artist.imageLink}
                                name={artist.name}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
};

export default Artists;
