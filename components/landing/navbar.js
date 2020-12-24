import React, { Fragment } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'

export default function Navbar() {
  return <Fragment>
    <div className="landing-header">
      <p className="logo"><i className="fas fa-route"/>&nbsp; North Season</p>
      <Flags />
    </div>
    <div className="landing-navbar">
      <Link href="/"><a>Popular</a></Link>
      <Link href="/adventures"><a>All Adventures</a></Link>
      <Link href="/contact"><a>Contact</a></Link>
    </div>
  </Fragment>
}

function Flags() {
  function changeLanguage(el) {
    Cookies.set('lan', el)
    location.reload()
  }

  return <div>
    <img onClick={() => changeLanguage('est')} src="https://etreeningud.ee/media/images/stenolmre/est.png" alt=""/>
    <img onClick={() => changeLanguage('eng')} src="https://etreeningud.ee/media/images/stenolmre/eng.png" alt=""/>
  </div>
}
