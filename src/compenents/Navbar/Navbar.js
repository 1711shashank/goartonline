import React from 'react'
import './Navbar.css'
import { useNavigate } from "react-router-dom";



const Navbar = () => {

    const navigate = useNavigate();

    const handleTabClick = (tab) => {
        navigate(`${tab}`);
    }

    return (
        <>
            <div className="navbar">
                <ul className="nav-list">
                    <li onClick={() => handleTabClick('artists')}>ARTISTS</li>
                    <li onClick={() => handleTabClick('pick-of-the-month')}>PICK OF THE MONTH</li>
                    <li onClick={() => handleTabClick('spotlight')}>SPOTLIGHT</li>
                    <li onClick={() => handleTabClick('virtual-gallery')}>VIRTUAL GALLERY</li>
                    <li onClick={() => handleTabClick('events')}>EVENTS</li>
                    <li onClick={() => handleTabClick('archives')}>ARCHIVES</li>
                    <li onClick={() => handleTabClick('multimedia')}>MULTIMEDIA</li>
                    <li onClick={() => handleTabClick('about')}>ABOUT</li>
                    <li onClick={() => handleTabClick('contact')}>CONTACT</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar