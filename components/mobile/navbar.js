import React, { useState, Fragment } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'

export default function Navbar({ userLanguage }) {
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
          <p><i className="fas fa-route"/>&nbsp; North Season</p>
        </a></Link>
      <i style={{ padding: '15px' }} className={`fas fa-${showNavbar ? 'times' : 'ellipsis-h'}`} onClick={() => setShowNavbar(!showNavbar)}/>
      <div>
        <img onClick={est} src="https://etreeningud.ee/media/images/stenolmre/est.png" alt=""/>
        <img onClick={eng} src="https://etreeningud.ee/media/images/stenolmre/eng.png" alt=""/>
      </div>
      </div>
    </div>
    <div className="mobile-navbar">
      <Link href="/"><a><i className="fas fa-home"/> {userLanguage ? 'Home' : 'Esileht'}</a></Link>
      <Link href="/adventures"><a><i className="fas fa-hiking"/> {userLanguage ? 'Adventures' : 'Elamusmatkad'}</a></Link>
      <Link href="/albums"><a><i className="fas fa-images"/> {userLanguage ? 'Gallery' : 'Galerii'}</a></Link>
      <Link href="/contact"><a><i className="fas fa-phone-alt"/> {userLanguage ? 'Contact' : 'Kontakt'}</a></Link>
      <div>
        <img onClick={est} src="https://etreeningud.ee/media/images/stenolmre/est.png" alt=""/>
        <img onClick={eng} src="https://etreeningud.ee/media/images/stenolmre/eng.png" alt=""/>
      </div>
      <a className="mobile-navbar-social-icon" href=""><i className="fab fa-instagram"/></a>
    </div>
    <style jsx>
      {`
        .mobile-navbar {
          left: ${!showNavbar ? '-70%' : '0'}
        }

        .mobile-landing-header {
          position: ${showNavbar ? 'fixed' : 'relative'}
        }

        @media (min-width: 768px) {
          .mobile-navbar {
            left: 25%;
          }

          .mobile-landing-header {
            position: relative;
          }
        }
      `}
    </style>
  </Fragment>
}
