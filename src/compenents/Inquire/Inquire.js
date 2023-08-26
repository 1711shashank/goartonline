import React, { useState } from 'react'
import './Inquire.css'
import Dialog from '@mui/material/Dialog';
import Form from '../Form/Form';


const Inquire = ({ name, imageLink, inquireModal, setInquireModal }) => {

    const [formData, setFormData] = useState({
        name: '',
        country: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
        email: '',
        telephone: '',
        message: '',
        type: 'Inquire'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <div className='inquire'>
                <Dialog
                    className='inquire-modal'
                    open={inquireModal}
                    onClose={() => setInquireModal(false)}
                    scroll={'body'}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >

                    <div className='primary-header inquire-modalHead'> WANT TO KNOW MORE ABOUT {name} </div>
                    <div className='inquire-body'>
                        <div className='inquire-body-left'>
                            <img src={imageLink} alt='' width='100%' />
                        </div>
                        <div className='inquire-body-right'>

                            <Form formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} />

                        </div>
                    </div>
                </Dialog>

            </div >
        </>
    )
}

export default Inquire