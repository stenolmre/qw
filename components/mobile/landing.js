import React, { Fragment } from 'react'
import Link from 'next/link'
import Navbar from './../navbar'
import Adventures from './adventures'
import Categories from './categories'
import Gallery from './gallery'
import MobileContact from './contact'
import { landingest, landingeng } from './../texts/landing'
import categories from './../arrays/categories'
import categoriesEst from './../arrays/categoriesEst'

export default function MobileLanding({ userLanguage }) {
  return <Fragment>
    <div className="mobile-landing">
      <h1>Travel to inspire your world!</h1>
    </div>
    <Adventures userLanguage={userLanguage}/>
    <Categories userLanguage={userLanguage}/>
    <Gallery userLanguage={userLanguage}/>
    <MobileContact userLanguage={userLanguage}/>
  </Fragment>
}
