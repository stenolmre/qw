import React, { Fragment } from 'react'
import { useRouter } from 'next/router'

export default function AdventureCard({ name, src, alt, link, topicon, bottomicon, destination, price }) {
  const router = useRouter()

  return <div className="adventurecard-container" onClick={() => router.push(link)}>
    <div className="adventurecard">
      <img src={src} alt={alt}/>
      <div className="adventure-overlay"/>
      <div className="adventure-icon">
        <i className={`fas ${ topicon }`}/>
      </div>
      <div className="adventurecard-add-info">
        <p><i className="fas fa-map-marker-alt"/> {destination}</p>
        <p>{price}€</p>
      </div>
    </div>
    <h3>{name}</h3>
  </div>
}
