import React from 'react'

const SearchResultModel = ({ filterArtWorkWithType, filterArtistWithType }) => {

    const handleClick = (card) => {

        if (card.type === 'Art') {
            //find artist ID bu collection ID
            const artistId = '1-artistId';
            const selectedArtURL = `artists/${artistId}/${card.collection_id}#${card.id}`;
            window.location.href = `http://localhost:3000/${selectedArtURL}`;
        }
        if (card.type === 'Artist') {
            const selectedArtistURL = `artists/${card.id}`;
            window.location.href = `http://localhost:3000/${selectedArtistURL}`;
        }
    }

    return (
        <div className='searchResultModel'>

            <div className={`${filterArtWorkWithType.length ? 'header-active' : 'header-inactive'}`}>
                <ul className='search-result-items'>
                    {filterArtWorkWithType.map((card) => (
                        <li className='search-result-item' key={card.id} onClick={() => handleClick(card)}>
                            <img className='search-result-img' src={card.imageLink} width='100%' alt='' />
                            <div >
                                <p className='search-result-name plain-text' > {card.name} </p>
                                <p className='artArtist plain-text'> {card.type} </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {
                filterArtWorkWithType.length && filterArtistWithType.length ?
                    <span className='horizontal-line'></span> : <></>
            }

            <div className={`${filterArtistWithType.length ? 'header-active' : 'header-inactive'}`}>
                <ul className='search-result-items'>
                    {filterArtistWithType.map((card) => (
                        <li className='search-result-item' key={card.id} onClick={() => handleClick(card)}>
                            <img className='search-result-img' src={card.imageLink} width='100%' alt='' />
                            <div >
                                <p className='search-result-name plain-text' > {card.name} </p>
                                <p className='artArtist plain-text'> {card.type} </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>

    )
}

export default SearchResultModel