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
  return <div className="mobile-landing">
    <div className="mobile-watermark">LAPLAND</div>
    <div className="mobile-landing-header">
      <p><i className="fas fa-route"/>&nbsp; NorthSeason</p>
      <i className="fas fa-ellipsis-h"/>
    </div>
    <div className="mobile-landing-image">
      <img src="https://etreeningud.ee/media/images/stenolmre/albums/Front_Page/IMG_0002.jpg" alt=""/>
    </div>
    <h1>Travel to inspire your life!</h1>
  </div>
}
