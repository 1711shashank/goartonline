import React, { useState } from 'react'
import SearchResultModel from './SearchResultModel';
import { artistDataArray, artWorkArray } from '../../utility/apiData'


const SearchBar = () => {

    const [searchText, setSearchText] = useState('');

    const filterArtWork = artWorkArray.filter((art) =>
        art.name.toLowerCase().includes(searchText.toLowerCase())
    );


    const filterArtist = artistDataArray.filter((artist) =>
        artist.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const filterArtWorkWithType = filterArtWork.map((art) => ({ ...art, type: "Art" }));
    const filterArtistWithType = filterArtist.map((artist) => ({ ...artist, type: "Artist" }));
    

    return (
        <div className='searchBar'>

            <input type='text' placeholder='Search...' onChange={(e) => setSearchText(e.target.value)} />

            {(!!searchText) && (!!filterArtWork.length) && <SearchResultModel filterArtWorkWithType={filterArtWorkWithType}  filterArtistWithType={filterArtistWithType}/>}

        </div >
    )
}

export default SearchBar