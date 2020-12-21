import React from 'react'
import Link from 'next/link'
import navs from './../arrays/navs'

export default function Footbar({ userLanguage }) {
  return <div className="mobile-footbar">
    {
      navs.map(e => <Item key={e.name} icon={e.icon} link={`${e.path}`} name={userLanguage ? e.name : e.nimi}/>)
    }
  </div>
}

function Item({ icon, link, name }) {
  return <Link href={link}><a>
    <i className={icon} />
    <p>{name}</p>
  </a></Link>
}
