import React from 'react'
import logo from '../assets/burger.png'
const Footer = () => {
    return (
        <div className='w-full bg-success'>
            <div className="container text-light d-flex flex-column py-3">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <img src={logo} alt="" width={'45px'} height={'45px'} />
                        <h1 className='fs-3 ms-2'>TasteBites</h1>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='social-icons'><i className="fa-brands fa-youtube"></i></div>
                        <div className='social-icons'><i className="fa-brands fa-instagram"></i></div>
                        <div className='social-icons'><i className="fa-brands fa-x-twitter"></i></div>
                        <div className='social-icons'><i className="fa-brands fa-facebook-f"></i></div>
                    </div>

                </div>
                <p className='text-center'>Copyright ©2024 All rights reserved | This template is made by TasteBites</p>
            </div>
        </div>
    )
}

export default Footer