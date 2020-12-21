import React, { useState, Fragment } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import navs from './../arrays/navs'

export default function Navbar({ userLanguage }) {
  const [showNavbar, setShowNavbar] = useState(false)
  const { pathname } = useRouter()

  return <div style={{ position: 'relative' }}>
    <div className="mobile-landing-header-container">
      <div className="mobile-landing-header">
        <Link href="/"><a>
          <p><i className="fas fa-route"/>&nbsp; North Season</p>
        </a></Link>
      <i style={{ padding: '15px' }} className={`fas fa-${showNavbar ? 'times' : 'ellipsis-h'}`} onClick={() => setShowNavbar(!showNavbar)}/>
      <Flags />
      </div>
    </div>
    <div className="mobile-navbar">
      {
        navs.map((e, i) => <Link href={`${e.path}`}>
          <a className={e.path === '/' ? pathname === '/' ? 'active-nav' : '' : pathname.includes(e.path) ? 'active-nav' : ''}>
            <i className={e.icon}/> {userLanguage ? e.name : e.nimi}
          </a>
        </Link>)
      }
      <Flags />
      <a className="mobile-navbar-social-icon" href=""><i className="fab fa-instagram"/></a>
    </div>
    <style jsx>
      {`
        .mobile-navbar {
          left: ${!showNavbar ? '-70%' : '0'};
        }

        .mobile-landing-header {
          position: ${showNavbar ? 'fixed' : 'relative'};
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
