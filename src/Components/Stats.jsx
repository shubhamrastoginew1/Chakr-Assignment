import React from 'react'
import '../css/stats.css'

const Stats = ({ item }) => {
    const heading = (item === 1) ? "Top month" : (item === 2) ? "Top year" : "Top buyer";
    const second = (item === 1) ? "November" : (item === 2) ? "2023" : "Maggie Johnson";
    const last = (item === 1) ? "2019" : (item === 2) ? "96K sold so far" : "Oasis Organic Inc.";

    const st1 = (item === 1) ? { color: '#734A00', fontSize: '1.5rem', fontWeight: '600' } : (item === 2) ? { color: '#734A00', fontSize: '1.5rem', fontWeight: '600' } : { color: '#131313', fontSize: '0.75rem', fontWeight: '500' };
    const st2 = (item === 1) ? { color: '#FFA500', fontSize: '1rem', fontWeight: '500' } : (item === 2) ? { color: '#454545', fontSize: '0.875rem', fontWeight: '400' } : { color: '#454545', fontSize: '0.625rem', fontWeight: '400' };

    return (
        <div className='stats-container'>
            <p style={{ color: '#7D7D7D', fontSize: '1rem', fontWeight: '600', marginBottom: '0.4rem' }}>
                {heading}
            </p>

            <p style={st1}>
                {second}
            </p>
            <p style={st2}>
                {last}
            </p>

        </div>
    )
}

export default Stats