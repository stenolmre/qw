import React from 'react'
import Link from 'next/link'

export default function AdventureDisplay({ e }) {
  return <div className="mobile-adventure">
    <Link href={`/adventures/${e._id}`}><a>
    <img src={e.images[0]} alt={e.name}/>
    <div className="mobile-adventure-price">
      <p>{(e.prices[0].price / 100).toFixed(2)}€</p>
    </div>
    <div className="mobile-adventure-glass">
      <h1>{e.name}</h1>
    </div>
    </a></Link>
  </div>
}
