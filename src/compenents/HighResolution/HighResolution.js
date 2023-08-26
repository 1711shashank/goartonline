import React from 'react'
import './HighResolution.css'
import Dialog from '@mui/material/Dialog';


const HighResolution = ({ name, imageLink, highResolutionModal, setHighResolutionModal }) => {

    return (
        <>
            <div className='highResolution'>
                <Dialog
                    className='highResolution-modal'
                    open={highResolutionModal}
                    onClose={() => setHighResolutionModal(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <img src={imageLink} alt='' width='100%' />
                </Dialog >
            </div >
        </>
    )
}

export default HighResolution