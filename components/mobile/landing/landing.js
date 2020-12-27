import React from 'react'
import Navbar from './../navbar'
import Adventures from './adventures'
import Categories from './categories'
import Gallery from './gallery'
import Contact from './contact'
import Footbar from './../footbar'

export default function MobileLanding({ userLanguage }) {
  return <div style={{ paddingBottom: '50px' }}>
    <div className="mobile-landing">
      <Navbar userLanguage={userLanguage}/>
      {
        userLanguage
          ? <h1><span>Travel Lapland</span> to<span> inspire</span> your life!</h1>
          : <h1><span>Travel Lapland</span> to<span> inspire</span> your life!</h1>
      }
    </div>
    <Categories userLanguage={userLanguage}/>
    <Adventures userLanguage={userLanguage}/>
    <Gallery userLanguage={userLanguage}/>
    <Contact userLanguage={userLanguage}/>
    <Footbar userLanguage={userLanguage}/>
  </div>
}
