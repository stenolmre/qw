import React, { Fragment } from 'react'
import Link from 'next/link'

export default function AdventureCard({ name, src, alt, link, topicon, destination, price }) {

  return <Link href={link}><a>
    <div className="adventurecard">
      <img src={src} alt={name}/>
      <div className="adventure-overlay"/>
      <div className="adventure-icon">
        <i className={`fas ${ topicon }`}/>
      </div>
      <div className="adventurecard-add-info">
        <p><i className="fas fa-map-pin"/>{destination}</p>
        <p>{price}€</p>
      </div>
    </div>
    <h3 className="adventure-name">{name}</h3>
  </a></Link>
}
