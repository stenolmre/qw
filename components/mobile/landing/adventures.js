import React, { useEffect } from 'react'
import Link from 'next/link'
import { useAdventureState, useAdventureDispatch } from './../../../context/adventure'
import { getAdventures } from './../../../actions/adventure'

export default function MobileAdventures({ userLanguage }) {
  const dispatchAdventure = useAdventureDispatch()
  const { adventures } = useAdventureState()

  useEffect(() => {
    getAdventures(dispatchAdventure)
  }, [dispatchAdventure])

  return <div className="mobile-adventures">
      <h2 className="mobile-landing-heading">Best Experiences</h2>
      <div className="mobile-adventures-flex">
        {
          adventures && adventures.map(e => <div key={e._id} className="mobile-adventure">
            <Link href={`/adventures/${e._id}`}><a>
            <img src={e.images[0]} alt={e.name}/>
            <div className="mobile-adventure-price">
              <p>{(e.prices[0].price / 100).toFixed(2)}€</p>
            </div>
            <div className="mobile-adventure-glass">
              <h1>{e.name}</h1>
            </div>
            </a></Link>
          </div>).slice(0, 2).reverse()
        }
        <p style={{ opacity: '0' }}>&</p>
      </div>
    </div>
}
