import React from 'react'

const AboutPressImages = () => {

    const imageLinks = [
        {
            imgUrl: 'https://www.goartonline.com/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/r/e/rendre_l_art_accessible_au_plus_grand_nombre_-_main_image_1.jpg',
        },
        {
            imgUrl: 'https://www.goartonline.com/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/2/0/2002_-_vie_des_arts-main.jpg',
        },
        {
            imgUrl: 'https://www.goartonline.com/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/r/e/rendre_l_art_accessible_au_plus_grand_nombre_-_main_image_1.jpg',
        },
        {
            imgUrl: 'https://www.goartonline.com/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/l/e/les_arts_et_les_lettres_pour_odile_gorse_-_main_image.jpg',
        }
    ];

    return (
        <>
            <div className='aboutPressImages'>
                {imageLinks.map((item, index) => (
                    <div className='aboutPressImage' key={index}>
                        <img src={item.imgUrl} alt='' />
                    </div>
                ))}
            </div>
        </>
    )
}

export default AboutPressImages