import React from 'react'
import logo from '../assets/logo.png'
import '../css/logo.css';

const Logo = () => {
    return (
        <div className='logo-container'>
            <img style={{ maxWidth: '65%', padding: '0.3rem' }} src={logo} alt="Logo Here" />
        </div>
    )
}

export default Logo