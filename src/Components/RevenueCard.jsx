import React from 'react'
import '../css/revenue.css'

const RevenueCard = ({ item }) => {

    const heading = (item === 1) ? "Revenues" : "Lost Deals";
    const percent = (item === 1) ? 15 : 4;
    const para = (item === 1) ? "Increase compared to last week" : "You closed 96 out of 100 deals";
    const footer = (item === 1) ? "Revenues report" : "All deals";

    return (
        <div className='revenue-container'>
            <div className="revenue-top">
                <p style={{ fontSize: '1.25rem', fontWeight: '600', color: '#131313', marginBottom: '0.5rem' }}>
                    {heading}
                </p>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '0.7rem 0' }}>
                    <p style={{ fontSize: '3rem', fontWeight: '500', color: '#131313', marginRight: '0.5rem' }}>
                        {percent}%
                    </p>
                    {
                        item === 1 ? <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" fill="none">
                                <path d="M22.6667 9.33334L9.33334 22.6667M22.6667 9.33334H10.6667M22.6667 9.33334V21.3333" stroke="#25CD25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div> : null
                    }
                </div>
                <div>
                    <p style={{ color: '#454545', fontSize: '875', fontWeight: '400' }}>
                        {para}
                    </p>
                </div>
            </div>
            <div className="revenue-bottom" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <p style={{ color: '#734A00', fontSize: '0.875rem', fontWeight: '400', marginRight:'0.3rem' }}>
                    {footer}
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                    <path d="M2.91666 7.11164H11.0833M11.0833 7.11164L8.75 9.44497M11.0833 7.11164L8.75 4.77831" stroke="#734A00" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
    )
}

export default RevenueCard