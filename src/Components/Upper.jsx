import React from 'react'
import '../css/upper.css';
import RevenueCard from './RevenueCard';
import Goal from './Goal';

const Upper = () => {
  return (
    <div className='upper-container'>
        <RevenueCard item={1}/>
        <RevenueCard item={2}/>
        <Goal/>
    </div>
  )
}

export default Upper