import React from 'react'
import '../css/middle.css'
import Customers from './Customers'
import Growth from './Growth'
import Stats from './Stats'

const Middle = () => {
    return (
        <div className='middle-container'>
            <Customers />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '100%', width: '55%' }}>
                <Growth />
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: '30%', width: '94%' }}>
                    <Stats item={1} />
                    <Stats item={2} />
                    <Stats item={3} />
                </div>
            </div>
        </div>
    )
}

export default Middle