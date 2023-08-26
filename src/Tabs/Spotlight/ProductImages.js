import React from 'react';

const ProductImages = ({ imageArray }) => {
    return (
        <>
            <div className='product-images'>
                {imageArray.map((item) => (
                    <div className='product-imageCard'>
                        <img src={item.link} className='border-imageCard' alt='' />
                    </div>
                ))}
            </div>
        </>

    );
};

export default ProductImages;

