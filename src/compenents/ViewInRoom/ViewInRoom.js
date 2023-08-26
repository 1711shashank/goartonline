import React from 'react'
import './ViewInRoom.css'

const ViewInRoom = ({ imageLink, setViewModal }) => {


    return (
        <>
            <div className='viewInRoom'>
                <div className='viewInRoom-text'>
                    <p style={{ fontSize: '16px', fontWeight: '500' }}> ARKY</p>
                    <p style={{ fontSize: '13px', fontWeight: '400' }}> COPY THAT - WARM</p>
                    <p style={{ fontSize: '12px', fontWeight: '300', color: '#5b5959' }}> 40 X 40 IN | 30 X 30 IN | 20 X 20 IN 100 X 100 CM | 75 X 75 CM | 50 X 50 CM</p>
                    <p style={{ fontSize: '14px', color: '#631462' }} onClick={() => setViewModal(false)}> Close</p>
                </div>

                <div className='viewInRoom-image'>
                    <img src={imageLink} alt='' />
                </div>
            </div>

        </>
    )
}

export default ViewInRoom