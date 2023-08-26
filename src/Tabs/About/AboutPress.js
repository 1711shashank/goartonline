import React from 'react'
import Button from '../../compenents/Button/Button'
import HeaderText from '../../compenents/HeaderText'

const AboutPress = () => {
    return (
        <>
            <div className='aboutPress' id='press'>
                <h1 className='header-text' style={{ fontWeight: '400', padding: '1rem 0' }}>PRESS</h1>
                <div className='aboutPress-body'>
                    <div className='aboutPress-left'>
                        <img src='https://www.goartonline.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/e/rendre_l_art_accessible_au_plus_grand_nombre_-_main_image.jpg' alt='' width='100%' />
                    </div>
                    <div className='aboutPress-right'>
                        
                        <HeaderText headerName="RENDRE L'ART ACCESSIBLE AU PLUS GRAND NOMBRE" />

                        <p style={{ color: '#bfbfbf' }}>Le Journal du Parlement: Dossiers Internationaux</p>

                        <p>Par le biais de sa structure G & O Art, Odile Gorse, en collaboration avec son mari Ghenadie Burlacu, facilite les rencontres entre artistes et amateurs d’art dans tous les lieux où les œuvres peuvent prendre place. Elle nous détaille ses activités.</p>
                        <p>Entretien avec Odile Gorse, cofondatrice de G & O Art, Conseiller du Commerce Extérieur de la France et Chevalier dans l’Ordre des Arts et des Lettres</p>

                        <Button text='More ...' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutPress