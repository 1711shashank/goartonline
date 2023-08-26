import React, { useState } from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import DescriptionIcon from '@mui/icons-material/Description';
import ShareIcon from '@mui/icons-material/Share';
import ViewInRoom from '../ViewInRoom/ViewInRoom';
import HighResolution from '../HighResolution/HighResolution';
import Inquire from '../Inquire/Inquire';
import ShareModal from './ShareModal';

const DescriptionData = ({ artWork }) => {

    const [roomModal, setViewModal] = useState(false);
    const [highResolutionModal, setHighResolutionModal] = useState(false);
    const [inquireModal, setInquireModal] = useState(false);
    const [shareModal, setShareModal] = useState(false);


    return (
        <>
            <div className='descriptionData'>

                <h2 className='secondary-header'>{artWork.name}</h2>

                <div className='descriptionData-details'>
                    <p>{artWork.dimensions}</p>
                    <p>{artWork.dimensions}</p>
                    <p>{artWork.description}</p>
                </div>

                <div className='descriptionData-link'>
                    <div onClick={() => setViewModal(true)}>            <LaunchIcon />            VIEW IN ROOM    </div>
                    <div onClick={() => setHighResolutionModal(true)} > <LaunchIcon />            HIGH RES        </div>
                    <div onClick={() => setInquireModal(true)}>         <DescriptionIcon />       INQUIRE         </div>
                    <div onClick={() => setShareModal(!shareModal)} style={{ position: 'relative' }}>           <ShareIcon />             SHARE
                        {shareModal && <ShareModal />}
                    </div>
                </div>
            </div>

            {roomModal && <ViewInRoom imageLink={artWork.imageLink} setViewModal={setViewModal} />}
            {highResolutionModal && <HighResolution name={artWork.name} imageLink={artWork.imageLink} highResolutionModal={highResolutionModal} setHighResolutionModal={setHighResolutionModal} />}
            {inquireModal && <Inquire name={artWork.name} imageLink={artWork.imageLink} inquireModal={inquireModal} setInquireModal={setInquireModal} />}
        </>
    )
}

export default DescriptionData