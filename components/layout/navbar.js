import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

const Navbar = () => {
  const { pathname } = useRouter()

  const user_lang = Cookies.get('lan') === 'eng' ? true : false

  return <nav>
    <Link href="/">
      <a><i className="fas fa-route"/></a>
    </Link>
    <Link href="/adventures">
      <a className={pathname.slice(1, 11) === 'adventures' ? 'nav active_nav' : 'nav'}>
        <i className="fas fa-hiking"/>
        <p>{user_lang ? 'Adventures' : 'Matkad'}</p>
      </a>
    </Link>
    <Link href="/galleries">
      <a className={pathname.slice(1, 10) === 'galleries' ? 'nav active_nav' : 'nav'}>
        <i className="fas fa-images"/>
        <p>{user_lang ? 'Galleries' : 'Galeriid'}</p>
      </a>
    </Link>
    <Link href="/about">
      <a className={pathname.slice(1, 6) === 'about' ? 'nav active_nav' : 'nav'}>
        <i className="fas fa-user"/>
        <p>{user_lang ? 'About us' : 'Meist'}</p>
      </a>
    </Link>
    <Link href="/contact">
      <a className={pathname.slice(1, 8) === 'contact' ? 'nav active_nav nav_contact' : 'nav nav_contact'}>
        <i className="fas fa-phone"/>
        <p>{user_lang ? 'Contact' : 'Kontakt'}</p>
      </a>
    </Link>
  </nav>
}

export default Navbar
