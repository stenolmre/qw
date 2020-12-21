import React from 'react'
import Navbar from './../navbar'

export default function MobileLanding({ userLanguage }) {
  return <div className="mobile-landing">
    <Navbar userLanguage={userLanguage}/>
    {
      userLanguage
        ? <h1><span>Travel</span> to<span> inspire</span> your life!</h1>
        : <h1><span>Travel</span> to<span> inspire</span> your life!</h1>
    }
  </div>
}
