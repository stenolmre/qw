import Link from 'next/link'

export default function Navbar({ style }) {
  return <nav style={style}>
    <Link href="/"><a>Home</a></Link>
    <Link href="/adventures"><a>Adventures</a></Link>
    <Link href="/albums"><a>Gallery</a></Link>
    <Link href="/contact"><a>Contact</a></Link>
  </nav>
}
