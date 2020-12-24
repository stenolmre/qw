import React from 'react'
import Navbar from './../navbar'

export default function MobileLanding({ userLanguage }) {
  return <div className="mobile-landing">
    <Navbar userLanguage={userLanguage}/>
    <h5 className="mobile-watermark">LAPLAND</h5>
    {
      userLanguage
        ? <h1><span>Travel Lapland</span> to<span> inspire</span> your life!</h1>
        : <h1><span>Travel Lapland</span> to<span> inspire</span> your life!</h1>
    }
  </div>
}
