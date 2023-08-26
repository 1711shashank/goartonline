import React, { useEffect, useState } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import ArtDescription from '../ArtDescription/ArtDescription';
import ArtistBio from '../ArtistBio/ArtistBio';
import ArtistStatement from '../ArtistStatement/ArtistStatement';
import {artWorkArray, artistCollection} from '../../utility/apiData'


const ArtCollection = () => {

    const updatedArtWorkArray = artistCollection.filter((collection) => collection.id !== artWorkArray[0].collection_id);

    const [selectedArt, setSelectedArt] = useState(artWorkArray[0]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const url = window.location.href;
        const artId = url.substring(url.indexOf("#") + 1);
        const initalArt = artWorkArray.filter((art) => art.id === artId);
        const selectedIndex = artWorkArray.findIndex((art) => art.id === artId);

        if (initalArt.length === 1) {
            setSelectedArt(initalArt[0]);
            setSelectedIndex(selectedIndex);
        }
        else {
            setSelectedArt(artWorkArray[0]);
            setSelectedIndex(0);
        }
    }, [])

    const handleArtClick = (art, index) => {
        setSelectedArt(art);
        setSelectedIndex(index);
    };

    const closeDescriptionHandler = () => setSelectedArt(null);

    const nextArt = () => {
        const nextIndex = (selectedIndex + 1) % artWorkArray.length;
        setSelectedArt(artWorkArray[nextIndex]);
        setSelectedIndex(nextIndex);
    };

    const previousArt = () => {
        const previousIndex = (selectedIndex - 1 + artWorkArray.length) % artWorkArray.length;
        setSelectedArt(artWorkArray[previousIndex]);
        setSelectedIndex(previousIndex);
    };

    const handleNavigate = (collectionId) => {

        const baseUrl = window.location.href;
        const urlParts = baseUrl.split("/");

        const oldID = urlParts[urlParts.length - 1];
        const newUrl = baseUrl.replace(oldID, collectionId);

        window.location.href = newUrl;
    }


    return (
        <>
            <div className='artCollection tab-body'>
                <h1 className="primary-header">COLLECTIONS BY ARKY</h1>

                {selectedArt && (
                    <ArtDescription
                        artWork={selectedArt}
                        artImage={selectedArt.imageLink}
                        nextArt={nextArt}
                        previousArt={previousArt}
                        currentIndex={selectedIndex}
                        totalArtworks={artWorkArray.length}
                        closeDescriptionHandler={closeDescriptionHandler}
                    />
                )}

                <div className="artists-body">
                    {artWorkArray.map((artWork, index) => (
                        <a onClick={() => handleArtClick(artWork, index)} key={index} href={`#${artWork.id}`} >
                            <ImageCard imageLink={artWork.imageLink} name={artWork.name} isActive={index === selectedIndex} />
                        </a>
                    ))}
                </div>

                <div className='artists-moreCollection' style={{ marginTop: '5rem' }}>

                    <h1 className="primary-header">MORE COLLECTIONS BY ARKY</h1>
                    <div className='artists-body'>
                        {
                            updatedArtWorkArray.map((collection) => (
                                <div onClick={() => handleNavigate(collection.id)} key={collection.id}  >
                                    <ImageCard imageLink={collection.imageLink} name={collection.name} />
                                </div>
                            ))
                        }
                    </div>

                </div>


                <ArtistBio />
                <ArtistStatement />

            </div>
        </>
    );
};

export default ArtCollection;