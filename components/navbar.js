import Link from 'next/link'

export default function Navbar({ background }) {
  return <nav>
    <div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/"><a>About</a></Link>
      <Link href="/"><a>Contact</a></Link>
    </div>
  </nav>
}
