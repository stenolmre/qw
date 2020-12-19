import React, { useState, Fragment } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)
  return <Fragment>
    <div className="mobile-landing-header-container">
      <div className="mobile-landing-header">
        <Link href="/"><a>
          <p><i className="fas fa-route"/>&nbsp; NorthSeason</p>
        </a></Link>
        <i className={`fas fa-${showNavbar ? 'times' : 'ellipsis-h'}`} onClick={() => setShowNavbar(!showNavbar)}/>
      </div>
    </div>
    <div className="mobile-navbar">
      <Link href="/"><a>Home</a></Link>
      <Link href="/adventures"><a>Adventures</a></Link>
      <Link href="/albums"><a>Gallery</a></Link>
      <Link href="/contact"><a>Contact</a></Link>
    </div>
    <style jsx>
      {`
        .mobile-navbar {
          left: ${!showNavbar ? '-70%' : '0'}
        }

        .mobile-landing-header {
          position: ${showNavbar && 'fixed'}
        }
      `}
    </style>
  </Fragment>
}
