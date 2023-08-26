import React from 'react'
import './Home.css'
import { Route, Routes } from "react-router-dom";

import Header from '../compenents/Header/Header'
import Footer from '../compenents/Footer/Footer'
import Navbar from '../compenents/Navbar/Navbar'

import PickOfTheMonth from '../Tabs/PickOfTheMonth/PickOfTheMonth'
import Artists from '../Tabs/Artists/Artists'
import ImageSlider from '../compenents/ImageSlider'
import Contact from '../Tabs/Contact/Contact';
import VirtualGallery from '../Tabs/VirtualGallery/VirtualGallery';
import Spotlight from '../Tabs/Spotlight/Spotlight';
import Multimedia from '../Tabs/Multimedia/Multimedia';
import Archives from '../Tabs/Archives/Archives';
import About from '../Tabs/About/About';
import Events from '../Tabs/Events/Events';
import ArtCollection from '../compenents/ArtCollection/ArtCollection';
import ArtistCollection from '../compenents/ArtistCollection/ArtistCollection';



const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Routes >

                <Route path="/artists" element={<Artists />} />
                <Route path="/artists/:artistId" element={<ArtistCollection />} />
                <Route path="/artists/:artistId/:artId" element={<ArtCollection />} />

                <Route path="/pick-of-the-month" element={<PickOfTheMonth />} />
                <Route path="/virtual-gallery" element={<VirtualGallery />} />
                <Route path="/spotlight" element={<Spotlight />} />
                <Route path="/spotlight/:id" element={<Spotlight />} />
                <Route path="/events" element={<Events />} />
                <Route path="/archives" element={<Archives />} />
                <Route path="/multimedia" element={<Multimedia />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<ImageSlider />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Home