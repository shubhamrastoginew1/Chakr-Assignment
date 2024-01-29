import React from 'react'
import '../css/growth.css'
import Graph from './Graph';

const Growth = () => {
    return (
        <div className='growth-container'>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <p style={{ color: '#131313', fontSize: '1.25rem', fontWeight: '600' }}> Growth</p>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <p style={{ color: '#454545', fontSize: '0.875rem', fontWeight: '600' }}>
                        Growth &nbsp;
                    </p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                            <path d="M3.5 5.86163L7 9.36163L10.5 5.86163" stroke="#7D7D7D" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
            <Graph/>
        </div>
    )
}

export default Growth