import React, { Fragment } from 'react'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const { pathname } = useRouter()
  const user_lang = Cookies.get('lan') === 'eng' ? true : false

  function changeLanguage(el) {
    Cookies.set('lan', el)
    location.reload()
  }

  return <Fragment>
    <div className="desktop-navbar-top">
      <p className="logo"><i className="fas fa-route"/>&nbsp; North Season</p>
      <div>
        <img onClick={() => changeLanguage('est')} src="https://etreeningud.ee/media/images/stenolmre/est.png" alt=""/>
        <img onClick={() => changeLanguage('eng')} src="https://etreeningud.ee/media/images/stenolmre/eng.png" alt=""/>
      </div>
    </div>
    <nav className="desktop-navbar-bottom">
      {
        pathname !== '/'
          ? <Link href="/"><a>{user_lang ? 'Home' : 'Esileht'}</a></Link>
          : <Link href="/"><a className={pathname === '/' ? 'active' : null}>{user_lang ? 'Popular' : 'Populaarseim'}</a></Link>
      }
      <Link href="/adventures"><a className={pathname.includes('adventures') ? 'active' : null}>{user_lang ? 'All Adventures' : 'Kõik Elamusmatkad'}</a></Link>
      <Link href="/albums"><a className={pathname.includes('albums') ? 'active' : null}>{user_lang ? 'Gallery' : 'Galerii'}</a></Link>
      <Link href="/contact"><a className={pathname === '/contact' ? 'active' : null}>{user_lang ? 'Contact' : 'Kontakt'}</a></Link>
    </nav>
    <style jsx>{`
      .active {
        padding: 4px 20px;
        border-radius: 4px;
        background: black;
        color: white;
      }
    `}</style>
  </Fragment>
}
