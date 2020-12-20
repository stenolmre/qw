import React, { Fragment, useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Navbar from './../navbar'
import Adventures from './adventures'
import Categories from './categories'
import Gallery from './gallery'
import MobileContact from './contact'
import { landingest, landingeng } from './../../texts/landing'
import categories from './../../arrays/categories'
import categoriesEst from './../../arrays/categoriesEst'

export default function MobileLanding({ userLanguage }) {
  const image = useRef()
  const [dimensions, setDimensions] = useState()

  useEffect(() => {
    if (image.current) {
      setDimensions(image.current.getBoundingClientRect());
    }
  }, [])

  return <div className="mobile-landing">
    <div className="mobile-watermark">LAPLAND</div>
    <Navbar/>
    <div className="mobile-landing-image" style={{ height: dimensions !== undefined && dimensions.width }} ref={image}>
      <img src="desktop.jpg" alt=""/>
    </div>
    <h1>Travel to inspire your life!</h1>
  </div>
}
