import React, { useState } from 'react';
import './Contact.css';
import HeaderText from '../../compenents/HeaderText';
import Form from '../../compenents/Form/Form';

const Contact = () => {

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
        type: 'Contact'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData)
    };

    return (
        <>
            <div className='contact tab-body'>
                <HeaderText headerName='Contact' />
                <Form formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} />
            </div>
        </>
    );
};

export default Contact;
