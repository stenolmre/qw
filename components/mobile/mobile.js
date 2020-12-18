import React, { Fragment, useEffect } from 'react'
import Cookies from 'js-cookie'
import Landing from './landing.js'
import Adventures from './adventures'
import Categories from './categories'
import Gallery from './gallery'
import Contact from './contact'
import Footer from './../footer'
import { useAdventureState, useAdventureDispatch } from './../../context/adventure'
import { getAdventures } from './../../actions/adventure'

export default function MobileLanding() {
  const dispatchAdventure = useAdventureDispatch()
  const adventureState = useAdventureState()
  const userLanguage = Cookies.get('lan') === 'eng'

  useEffect(() => {
    getAdventures(dispatchAdventure)
  }, [dispatchAdventure])

  return <div className="mobile-container">
    <Landing />
    <Adventures/>
    <Categories />
    <Gallery />
    <Contact />
    <div className="mobile-footer">
      <p>copyright @ 2020 by North Season</p>
    </div>
  </div>
}
