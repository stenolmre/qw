import React from 'react'
import Link from 'next/link'

export default function Adventure({ link, image, name, price }) {
  return <div className="desktop-adventure-card">
    <Link href={link}><a>
      <img src={image} alt={name}/>
      <p className="desktop-adventure-card-price">{price}€</p>
      <div>
        <p>{name}</p>
        <i className="fas fa-arrow-right"/>
      </div>
    </a></Link>
  </div>
}
