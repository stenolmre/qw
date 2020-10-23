import Link from 'next/link'

export default function Navbar() {
  return <nav>
    <div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/contact"><a>Contact</a></Link>
    </div>
  </div>
}
