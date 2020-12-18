import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return <div className="mobile-landing-header">
    <Link href="/"><a>
      <p><i className="fas fa-route"/>&nbsp; NorthSeason</p>
    </a></Link>
    <i className="fas fa-ellipsis-h"/>
  </div>
}
