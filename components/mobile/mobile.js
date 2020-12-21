import React, { Fragment, useEffect } from 'react'
import Landing from './landing/landing.js'
import Adventures from './landing/adventures'
import Categories from './landing/categories'
import Gallery from './landing/gallery'
import Contact from './landing/contact'
import Footer from './../footer'
import Footbar from './footbar'
import { useAdventureState, useAdventureDispatch } from './../../context/adventure'
import { getAdventures } from './../../actions/adventure'

export default function MobileLanding({ userLanguage }) {
  const dispatchAdventure = useAdventureDispatch()
  const adventureState = useAdventureState()

  useEffect(() => {
    getAdventures(dispatchAdventure)
  }, [dispatchAdventure])

  return <div className="mobile-container">
    <Landing userLanguage={userLanguage}/>
    <Categories userLanguage={userLanguage}/>
    <Adventures userLanguage={userLanguage}/>
    <Gallery userLanguage={userLanguage}/>
    <Contact userLanguage={userLanguage}/>
    <div className="mobile-footer">
      <p>copyright @ 2020 by North Season</p>
      <div>
        <i className="fab fa-instagram"/>
      </div>
    </div>
    <Footbar/>
  </div>
}
