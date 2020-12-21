import React, { useState, Fragment } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

export default function Navbar({ userLanguage }) {
  const [showNavbar, setShowNavbar] = useState(false)
  const { pathname } = useRouter()

  const page = pathname.slice(1)

  function changeLanguage(el) {
    Cookies.set('lan', el)
    location.reload()
  }

  return <div style={{ position: 'relative' }}>
    <div className="mobile-landing-header-container">
      <div className="mobile-landing-header">
        <Link href="/"><a>
          <p><i className="fas fa-route"/>&nbsp; North Season</p>
        </a></Link>
      <i style={{ padding: '15px' }} className={`fas fa-${showNavbar ? 'times' : 'ellipsis-h'}`} onClick={() => setShowNavbar(!showNavbar)}/>
      <div>
        <img onClick={() => changeLanguage('est')} src="https://etreeningud.ee/media/images/stenolmre/est.png" alt=""/>
        <img onClick={() => changeLanguage('eng')} src="https://etreeningud.ee/media/images/stenolmre/eng.png" alt=""/>
      </div>
      </div>
    </div>
    <div className="mobile-navbar">
      <Link href="/"><a className={pathname === '/' ? 'active-nav' : ''}><i className="fas fa-home"/> {userLanguage ? 'Home' : 'Esileht'}</a></Link>
      <Link href="/adventures"><a className={page.includes('adventures') ? 'active-nav' : ''}><i className="fas fa-hiking"/> {userLanguage ? 'Adventures' : 'Elamusmatkad'}</a></Link>
      <Link href="/albums"><a className={page.includes('albums') ? 'active-nav' : ''}><i className="fas fa-images"/> {userLanguage ? 'Gallery' : 'Galerii'}</a></Link>
      <Link href="/contact"><a className={page.includes('contact') ? 'active-nav' : ''}><i className="fas fa-phone-alt"/> {userLanguage ? 'Contact' : 'Kontakt'}</a></Link>
      <div>
        <img onClick={() => changeLanguage('est')} src="https://etreeningud.ee/media/images/stenolmre/est.png" alt=""/>
        <img onClick={() => changeLanguage('eng')} src="https://etreeningud.ee/media/images/stenolmre/eng.png" alt=""/>
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

        .active-nav {
          color: rgba(113, 90, 255, 1);
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
  </div>
}
