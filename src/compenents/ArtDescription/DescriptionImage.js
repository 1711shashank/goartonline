import ReactImageMagnify from "react-image-magnify";
import React from 'react'

const DescriptionImage = ({ artImage }) => {

    return (
        <div className='descriptionImage'>
            <ReactImageMagnify
                {...{
                    smallImage: {
                        alt: "art Image",
                        isFluidWidth: true,
                        src: `${artImage}`,
                    },
                    largeImage: {
                        src: `${artImage}`,
                        width: 1800,
                        height: 1500
                    },
                    shouldUsePositiveSpaceLens: true,
                }}
            />
        </div>
    )
}

export default DescriptionImage