import React from 'react'
import '../css/right.css';
import Upper from './Upper';
import Middle from './Middle';
import Lower from './Lower';

const Right = () => {
    return (
        <div className='right-container'>
            <Upper/>
            <Middle/>
            <Lower/>
        </div>
    )
}

export default Right