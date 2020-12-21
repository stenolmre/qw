import React from 'react'
import Link from 'next/link'
import navs from './../arrays/navs'

export default function Footbar() {
  return <div className="mobile-footbar">
    {
      navs.map(e => <Item key={e.name} icon={e.icon} link={`${e.path}`} />)
    }
  </div>
}

function Item({ icon, link }) {
  return <Link href={link}><a>
    <i className={icon} />
  </a></Link>
}
