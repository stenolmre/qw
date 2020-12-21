import React from 'react'
import Link from 'next/link'

export default function Heading({ link, name }) {
  return <Link href={link}><a className="mobile-landing-heading">
    <h2>{name}</h2>
    <i className="fas fa-arrow-right"/>
  </a></Link>
}
