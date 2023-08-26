import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ShareModal = () => {

    const handleClick = (baseURL) => {
        console.log(baseURL + window.location.href);
        window.open(baseURL + window.location.href, "_blank");
    }

    return (
        <>
            <div className='shareModal'>
                <div className='shareModal-box' onClick={() => handleClick('https://linkedin.com/sharing/share-offsite/?url=')}>
                    <LinkedInIcon />
                    <p>LinkedIn</p>
                </div>
                <div className='shareModal-box' onClick={() => handleClick('https://twitter.com/share?url=')}>
                    <TwitterIcon />
                    <p>Twitter</p>
                </div>
                <div className='shareModal-box' onClick={() => handleClick('https://facebook.com/sharer.php?u=')}>
                    <FacebookIcon />
                    <p>Facebook</p>
                </div>
                <div className='shareModal-box' onClick={() => handleClick('https://web.whatsapp.com/send?text=')}>
                    <WhatsAppIcon />
                    <p>WhatsApp</p>
                </div>
            </div>

        </>
    )
}

export default ShareModal