import React, { Fragment } from 'react'
import Link from 'next/link'
import Navbar from './../navbar'
import Categories from './categories'
import Gallery from './gallery'
import { landingest, landingeng } from './../texts/landing'
import categories from './../arrays/categories'
import categoriesEst from './../arrays/categoriesEst'

export default function MobileLanding({ userLanguage }) {
  return <Fragment>
    <div className="mobile-landing">

    </div>
    <div className="mobile-adventures-container">
      <div className="mobile-adventures">
        <div style={{ marginLeft: '6%' }} className="mobile-landing-heading">
          <h1>{ userLanguage ? 'Adventures' : 'Elamusmatkad' }</h1>
          <i className="fas fa-ellipsis-h"/>
        </div>
      </div>
    </div>
    <Categories/>
    <Gallery />
    <div className="mobile-contact-container">
      <div className="mobile-contact">
        <div style={{ marginLeft: '6%' }} className="mobile-landing-heading">
          <h1>{ userLanguage ? 'Contact' : 'Kontakt' }</h1>
          <i className="fas fa-ellipsis-h"/>
        </div>
      </div>
    </div>
  </Fragment>
}
