import React from 'react'
import '../css/topStates.css';

const TopStates = () => {
  return (
    <div className='top-states-container'>
      <p style={{ color: '#131313', fontSize: '1.25rem', fontWeight: '600', paddingBottom: '0.5rem' }}>
        Top States
      </p>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignItems: 'center', background: 'linear-gradient(90deg, #FFCD71 -2.57%, rgba(255, 205, 113, 0.00) 112.5%)', padding: '0.3rem 0.5rem', borderRadius: '0.25rem', marginBottom: '0.5rem' }}>
        <p style={{ color: '#131313', fontSize: '0.875', fontWeight: '600' }}>
          NY
        </p>
        <p style={{ color: '#131313', fontSize: '0.625', fontWeight: '500' }}>
          120k
        </p>
      </div >
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '75%', alignItems: 'center', background: 'linear-gradient(90deg, #FFCD71 -2.57%, rgba(255, 205, 113, 0.00) 112.5%)', padding: '0.3rem 0.5rem', borderRadius: '0.25rem', marginBottom: '0.5rem' }}>
        <p style={{ color: '#131313', fontSize: '0.875', fontWeight: '600' }}>
          MA
        </p>
        <p style={{ color: '#131313', fontSize: '0.625', fontWeight: '500' }}>
          80k
        </p>
      </div >
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '60%', alignItems: 'center', background: 'linear-gradient(90deg, #FFCD71 -2.57%, rgba(255, 205, 113, 0.00) 112.5%)', padding: '0.3rem 0.5rem', borderRadius: '0.25rem', marginBottom: '0.5rem' }}>
        <p style={{ color: '#131313', fontSize: '0.875', fontWeight: '600' }}>
          NH
        </p>
        <p style={{ color: '#131313', fontSize: '0.625', fontWeight: '500' }}>
          70k
        </p>
      </div >
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '50%', alignItems: 'center', background: 'linear-gradient(90deg, #FFCD71 -2.57%, rgba(255, 205, 113, 0.00) 112.5%)', padding: '0.3rem 0.5rem', borderRadius: '0.25rem', marginBottom: '0.5rem' }}>
        <p style={{ color: '#131313', fontSize: '0.875', fontWeight: '600' }}>
          OR
        </p>
        <p style={{ color: '#131313', fontSize: '0.625', fontWeight: '500' }}>
          50k
        </p>
      </div >
    </div >
  )
}

export default TopStates