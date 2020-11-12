import { Fragment } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'

export default function Navbar({ style }) {
  function est() {
    Cookies.set('lan', 'est')
    location.reload()
  }

  function eng() {
    Cookies.set('lan', 'eng')
    location.reload()
  }
  return <Fragment>
    {
      Cookies.get('lan') === 'eng'
        ? <nav>
            <Link href="/"><a>Home</a></Link>
            <Link href="/adventures"><a>Adventures</a></Link>
            <Link href="/albums"><a>Gallery</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
            <p onClick={est}>🇪🇪</p>
          </nav>
        : <nav>
            <Link href="/"><a>Esileht</a></Link>
            <Link href="/adventures"><a>Adventures</a></Link>
            <Link href="/albums"><a>Galerii</a></Link>
            <Link href="/contact"><a>Kontakt</a></Link>
            <p onClick={eng}>󠁧🇺🇸</p>
          </nav>
    }
  </Fragment>
}
