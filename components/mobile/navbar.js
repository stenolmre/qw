import React, { useState, Fragment } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)

  function est() {
    Cookies.set('lan', 'est')
    location.reload()
  }

  function eng() {
    Cookies.set('lan', 'eng')
    location.reload()
  }

  return <Fragment>
    <div className="mobile-landing-header-container">
      <div className="mobile-landing-header">
        <Link href="/"><a>
          <p><i className="fas fa-route"/>&nbsp; NorthSeason</p>
        </a></Link>
      <i style={{ padding: '15px' }} className={`fas fa-${showNavbar ? 'times' : 'ellipsis-h'}`} onClick={() => setShowNavbar(!showNavbar)}/>
      </div>
    </div>
    <div className="mobile-navbar">
      <Link href="/"><a>Home</a></Link>
      <Link href="/adventures"><a>Adventures</a></Link>
      <Link href="/albums"><a>Gallery</a></Link>
      <Link href="/contact"><a>Contact</a></Link>
      <div>
        <img onClick={est} src="https://s.svgbox.net/flags-hd.svg?ic=ee&fill=000000" alt="estonian_flag"/>
        <img onClick={eng} src="https://s.svgbox.net/flags-hd.svg?ic=gb&fill=000000" alt="united_kingdom_flag"/>
      </div>
    </div>
    <style jsx>
      {`
        .mobile-navbar {
          left: ${!showNavbar ? '-70%' : '0'}
        }

        .mobile-landing-header {
          position: ${showNavbar ? 'fixed' : 'block'}
        }

        .mobile-navbar div {
          margin-top: 20px;
        }

        .mobile-navbar img {
          width: 32px;
          margin-right: 10px;
        }
      `}
    </style>
  </Fragment>
}
