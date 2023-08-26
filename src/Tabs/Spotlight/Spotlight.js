import React, { useEffect, useState } from 'react';
import './Spotlight.css';
import ArtDescription from '../../compenents/ArtDescription/ArtDescription';
import SpotlightImages from './SpotlightImages';
import ImageCarousel from '../../compenents/ImageCarousel/ImageCarousel';

const Spotlight = () => {


    const otherSportLightArt = [
        {
            id: '1-spotlightId',
            collection_id: '1-artCollection',
            name: 'Ready to roll - Pink',
            dimensions: '40 x 40 in | 30 x 30 in | 20 x 20 in',
            imageLink: 'https://www.goartonline.com/media/catalog/product/cache/1/small_image/600x/9df78eab33525d08d6e5fb8d27136e95/i/m/img_1290.jpg',
            description: '1st art Des - a creative tour de force - was a citizen of the world. Self-taught and led by the eye of his soul, Anthony Quinn never came upon a rock or an oddly shaped and snarled piece of wood or even a precious stone that he could not tame into beauty with his wide array of tools and his patient and eager hands. His artwork, similar to the many ethnicities of the characters he portrayed in his films, is also a window on his life and on the world.',
            imageArray: [
                "https://www.goartonline.com/media/catalog/product/cache/1/small_image/600x/9df78eab33525d08d6e5fb8d27136e95/p/r/prometheus_web_1_1.jpg",
                "https://www.goartonline.com/media/catalog/product/cache/1/small_image/600x/9df78eab33525d08d6e5fb8d27136e95/i/m/img_1290.jpg",
                "https://www.goartonline.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_1291z.jpg",
                "https://www.goartonline.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_1292z.jpg",
                "https://www.goartonline.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_1293z.jpg",
                "https://www.goartonline.com/media/catalog/product/cache/1/small_image/600x/9df78eab33525d08d6e5fb8d27136e95/p/r/prometheus_web_1_1.jpg"
            ]
        },
        {
            id: '2-spotlightId',
            collection_id: '1-artCollection',
            name: 'Le Paréo Rouge by BONNEFOIT',
            dimensions: '40 x 40 in | 30 x 30 in | 20 x 20 in',
            imageLink: 'https://www.goartonline.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/6/_/6_-_pareo.jpg',
            description: '2nt art Des - a creative tour de force - was a citizen of the world. Self-taught and led by the eye of his soul, Anthony Quinn never came upon a rock or an oddly shaped and snarled piece of wood or even a precious stone that he could not tame into beauty with his wide array of tools and his patient and eager hands. His artwork, similar to the many ethnicities of the characters he portrayed in his films, is also a window on his life and on the world.',
            imageArray: [
                "https://www.goartonline.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/l/e/le_pareo_rouge_-_1_-_20_x_28_1.jpg",
                "https://www.goartonline.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/2/_/2_-_pareo.jpg",
                "https://www.goartonline.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/3/_/3_-_pareo.jpg",
                "https://www.goartonline.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/4/_/4_-_pareo.jpg",
                "https://www.goartonline.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/5/_/5_-_pareo.jpg",
                "https://www.goartonline.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/6/_/6_-_pareo.jpg"
            ]
        },

    ]


    const [isSpotLightVisible, setIsSpotLightVisible] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [sportLightArt, setSportLightArt] = useState(otherSportLightArt[0]);


    const closeDescriptionHandler = () => setIsSpotLightVisible(false);
    const handleImageClick = (imageIndex) => setSelectedIndex(imageIndex);
    const nextArt = () => setSelectedIndex((selectedIndex + 1) % sportLightArt.imageArray.length);
    const previousArt = () => setSelectedIndex((selectedIndex - 1) % sportLightArt.imageArray.length);


    const changeSpotlightArt = (spotlightId, collectionId) => {

        const baseUrl = window.location.href;
        const urlParts = baseUrl.split("/");

        const spotlightIndex = urlParts.indexOf("spotlight");

        // base url dont have any id
        if (spotlightIndex !== -1 && !urlParts[spotlightIndex + 1]) {
            window.location.href = baseUrl + "#" + spotlightId;
        }
        else {
            const oldID = baseUrl.substring(baseUrl.indexOf("#") + 1);
            const newUrl = baseUrl.replace(oldID, spotlightId);
            window.location.href = newUrl;
        }

        const initalArt = otherSportLightArt.filter((art) => art.id === spotlightId);
        if (initalArt.length === 1) setSportLightArt(initalArt[0]);
        else setSportLightArt(otherSportLightArt[0]);


    }

    useEffect(() => {
        const url = window.location.href;
        const artId = url.substring(url.indexOf("#") + 1);
        const initalArt = otherSportLightArt.filter((art) => art.collection_id === artId);

        if (initalArt.length === 1) setSportLightArt(initalArt[0]);
        else setSportLightArt(otherSportLightArt[0]);
    }, [])




    return (
        <>
            <div className='spotlight tab-body'>
                {isSpotLightVisible && (
                    <>
                        <ArtDescription
                            artWork={sportLightArt}
                            artImage={sportLightArt.imageArray[selectedIndex]}
                            nextArt={nextArt}
                            previousArt={previousArt}
                            currentIndex={selectedIndex}
                            totalArtworks={sportLightArt.imageArray.length}
                            closeDescriptionHandler={closeDescriptionHandler}
                        />

                        <SpotlightImages sportLightArt={sportLightArt} handleImageClick={handleImageClick} 
                        selectedIndex={selectedIndex} 
                        />
                    </>
                )}
                <ImageCarousel carouselName="PREVIOUSLY SPOTLIGHT" carouselArray={otherSportLightArt} handleImageClick={changeSpotlightArt} />

            </div>
        </>
    );
};

export default Spotlight;
