import React, { useState } from 'react'
import countries from '../../utility/countries';
import ReCAPTCHA from "react-google-recaptcha";


const Form = ({ formData, handleSubmit, handleChange }) => {

    const [ticked, setTicked] = useState(false);
    const [verified, setVerified] = useState(false);

    return (
        <>
            <div>
                <form onSubmit={handleSubmit} className='contact-form'>
                    <div className='contact-formFiled col-1'>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name*"
                            required
                        />
                    </div>
                    <div className='contact-formFiled col-1'>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email*"
                            required
                        />
                    </div>
                    <div className='contact-formFiled col-1'>
                        <input
                            type="tel"
                            id="telephone"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            placeholder="Telephone"
                        />
                    </div>
                    <div className='contact-formFiled col-1'>
                        <input
                            type="text"
                            id="addressLine1"
                            name="addressLine1"
                            value={formData.addressLine1}
                            onChange={handleChange}
                            placeholder="Address Line 1"
                        />
                    </div>
                    <div className='contact-formFiled col-1'>
                        <input
                            type="text"
                            id="addressLine2"
                            name="addressLine2"
                            value={formData.addressLine2}
                            onChange={handleChange}
                            placeholder="Address Line 2"
                        />
                    </div>
                    <div className='contact-formFiled col-2'>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="City"
                        />
                    </div>
                    <div className='contact-formFiled col-2'>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            placeholder="State"
                        />
                    </div>
                    <div className='contact-formFiled col-2'>
                        <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="Country"
                        >
                            <option value="">Country</option>
                            {countries.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='contact-formFiled col-2'>
                        <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            placeholder="Zip Code"
                        />
                    </div>
                    <div className='contact-formFiled col-1'>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message*"
                            required
                        />
                    </div>
                    <div className='contact-formFiled checkbox-div'>
                        <input type='checkbox' className='contact-checkbox' onChange={() => setTicked(!ticked)} />
                        Please register me to receive G&O ART newsletters, invitations and catalogs.
                    </div>

                    <button disable={!verified} type="submit" className={`contact-submit-btn ${!verified || !ticked ? 'btn-disable' : ''}`} >Send</button>
                </form>
            </div>
        </>
    )
}

export default Form