import React, { useState } from 'react'
import Logo from '../../images/logo.png'
import UsFlag from '../../images/flag-us.png'
import FrFlag from '../../images/flag-fr.png'
import './Header.css';
import { useNavigate } from 'react-router-dom';
import SearchResultModel from './SearchResultModel';
import SearchBar from './SearchBar';

const Header = () => {



    const navigate = useNavigate();

    const handalClick = () => {
        navigate("/");
    }

    return (
        <>
            <div className='header'>
                <div className='header-left'>
                    <img src={Logo} alt='logo' width='230px' onClick={handalClick} />
                </div>


                <div className='header-right'>

                    <a className='us tel-numbers-form' href="tel:+13477398366">
                        <img src={UsFlag} alt='US flag' width='20px' />
                        <p className='phone-numbers'>347.739.8366</p>
                    </a>
                    <a className='fr tel-numbers-form' href="tel:+33620731109">
                        <img src={FrFlag} alt='FR flag' width='20px' />
                        <p className='phone-numbers'>06.20.73.11.09</p>
                    </a>
                    
                    <SearchBar />

                </div>

            </div>

        </>
    )
}

export default Header



















