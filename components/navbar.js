import Link from 'next/link'

export default function Navbar({ style }) {
  return <nav style={style}>
    <div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/contact"><a>Contact</a></Link>
    </div>
  </nav>
}
