import React from 'react'
import '../css/chats.css';
import avatar1 from '../assets/21.png'
import avatar2 from '../assets/22.png'
import avatar3 from '../assets/23.png'
import avatar4 from '../assets/24.png'

const Chats = () => {
    return (
        <div className='chats-container'>
            <p style={{ color: '#131313', fontSize: '1.25rem', fontWeight: '600', margin: '0.5rem 0.5rem' }}>
                Chats
            </p>
            <p style={{ color: '#454545', fontSize: '0.875rem', fontWeight: '400', margin: '0.5rem 0.5rem' }}>
                2 unread messages
            </p>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingTop: '0.5rem' }}>
                <div style={{ padding: '0.8rem', borderRadius: '1rem', backgroundColor: '#FFF7E8', position: 'relative' }}>
                    <img src={avatar1} alt="avatar1" />
                    <div style={{ position: 'absolute', top: '0.8rem', right: '0.8rem', height: '0.25rem', width: '0.25rem', backgroundColor: '#EB5050', borderRadius: '1rem' }}>

                    </div>
                </div>
                <div style={{ padding: '0.8rem', borderRadius: '1rem', backgroundColor: '#FFF7E8', position: 'relative' }}>
                    <img src={avatar2} alt="avatar2" />
                    <div style={{ position: 'absolute', top: '0.8rem', right: '0.8rem', height: '0.25rem', width: '0.25rem', backgroundColor: '#EB5050', borderRadius: '1rem' }}>

                    </div>
                </div>
                <div style={{ padding: '0.8rem', borderRadius: '1rem' }}>
                    <img src={avatar3} alt="avatar2" />
                </div>
                <div style={{ padding: '0.8rem', borderRadius: '1rem' }}>
                    <img src={avatar4} alt="avatar2" />
                </div>
            </div>
        </div>
    )
}

export default Chats