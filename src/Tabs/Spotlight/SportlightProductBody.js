import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import DescriptionIcon from '@mui/icons-material/Description';
import ShareIcon from '@mui/icons-material/Share';

const SportlightProductBody = ({ productData }) => {
    return (
        <>
            <div className='sportlightProductBody'>
                <div className='sportlightProductBody-image'>
                    <img src={productData.imageLink} alt='' />
                </div>


                <div className='sportlightProductBody-data'>

                    <h2 className='product-name'>{productData.productName}</h2>

                    <div className='sportlightProductBody-data-details'>
                        <p>{productData.productDimensions}</p>
                        <p>{productData.productDescriptionTitle}</p>
                        <p>{productData.productDescription}</p>
                    </div>

                    <div className='sportlightProductBody-data-link'>
                        <div>
                            <LaunchIcon /> VIEW IN ROOM
                        </div>
                        <div>
                            <LaunchIcon /> HIGH RES
                        </div>
                        <div>
                            <DescriptionIcon /> INQUIRE
                        </div>
                        <div>
                            <ShareIcon /> SHARE
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default SportlightProductBody