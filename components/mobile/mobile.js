import React, { Fragment, useEffect } from 'react'
import Cookies from 'js-cookie'
import Landing from './landing/landing.js'
import Adventures from './landing/adventures'
import Categories from './landing/categories'
import Gallery from './landing/gallery'
import Contact from './landing/contact'
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
    <Categories />
    <Adventures />
    <Gallery />
    <div className="mobile-footer">
      <p>copyright @ 2020 by North Season</p>
      <div>
        <i className="fab fa-instagram"/>
      </div>
    </div>
  </div>
}
