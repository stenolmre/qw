import React, { useState, Fragment } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'

export default function Navbar({ userLanguage }) {
  function changeLanguage(el) {
    Cookies.set('lan', el)
    location.reload()
  }

  return <div className="mobile-landing-navbar">
    <Link href="/"><a>
      <p className="logo"><i className="fas fa-route"/>&nbsp; North Season</p>
    </a></Link>
    <div>
      <img onClick={() => changeLanguage('est')} src="https://etreeningud.ee/media/images/stenolmre/est.png" alt=""/>
      <img onClick={() => changeLanguage('eng')} src="https://etreeningud.ee/media/images/stenolmre/eng.png" alt=""/>
    </div>
  </div>
}
