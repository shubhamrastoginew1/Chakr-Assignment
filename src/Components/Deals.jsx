import React from 'react'
import '../css/deals.css';
import DealItem from './DealItem';

const Deals = () => {
    return (
        <div className="deal-outer">
            <p style={{ color: '#131313', fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                New Deals
            </p>
            <div className='deals-container'>
                <DealItem dealName={"Fruit2Go"} />
                <DealItem dealName={"Marshall's MKT"} />
                <DealItem dealName={"CCNT"} />
                <DealItem dealName={"Joana Mini-market"} />
                <DealItem dealName={"Little Brazil Vegan"} />
                <DealItem dealName={"Target"} />
                <DealItem dealName={"Organic Place"} />
                <DealItem dealName={"Morello's"} />
            </div>
        </div>
    )
}

export default Deals