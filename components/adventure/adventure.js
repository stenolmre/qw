import React, { Fragment } from 'react'
import Navbar from './../mobile/navbar'
import Info from './info'
import Images from './images'
import Cart from './cart'

export default function Adventure({ adventure, userLanguage }) {
  return <Fragment>
    <Navbar userLanguage={userLanguage}/>
    <div className="adventure">
      <Images adventure={adventure}/>
      <Info adventure={adventure}/>
      <Cart adventure={adventure}/>
    </div>
    <div className="mobile-footer">
      <p>copyright @ 2020 by North Season</p>
      <div>
        <a href="https://instagram.com/me_and_olmre" target="_blank"><i className="fab fa-instagram"/></a>
      </div>
    </div>
  </Fragment>
}
