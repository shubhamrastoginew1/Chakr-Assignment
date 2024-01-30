import React from 'react'

const DealItem = ({ dealName }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0.5rem 0.8rem 0.5rem 0.5rem', backgroundColor: '#FFF7E8', borderRadius: '1rem', gap: '0.4rem' }}>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M15 12.6116H9M12 9.61163V15.6116M12 3.61163C19.2 3.61163 21 5.41163 21 12.6116C21 19.8116 19.2 21.6116 12 21.6116C4.8 21.6116 3 19.8116 3 12.6116C3 5.41163 4.8 3.61163 12 3.61163Z" stroke="#FFA500" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <p style={{ color: '#734A00', fontSize: '0.75rem', fontWeight: '400' }}>
                {dealName}
            </p>
        </div>
    )
}

export default DealItem