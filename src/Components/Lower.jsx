import React from 'react'
import '../css/lower.css'
import Chats from './Chats'
import TopStates from './TopStates'
import Deals from './Deals'

const Lower = () => {
  return (
    <div className='lower-container'>
        <Chats/>
        <TopStates/>
        <Deals/>
    </div>
  )
}

export default Lower