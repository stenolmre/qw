import React from 'react'
import Link from 'next/link'

export default function AdventureDisplay({ userLanguage, e }) {
  return <div className="mobile-adventure">
    <Link href={`/adventures/${e._id}?${e.name.split(' ').join('-')}`}><a>
    <img src={e.images[0]} alt={userLanguage ? e.name : e.nimi}/>
    <div className="mobile-adventure-price">
      <p>{(e.prices[0].price / 100).toFixed(2)}€</p>
    </div>
    <div className="mobile-adventure-glass">
      <h1>{userLanguage ? e.name : e.nimi}</h1>
      <div>
        <i className="fas fa-chevron-right"/>
      </div>
    </div>
    </a></Link>
  </div>
}
