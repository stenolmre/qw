import React, { useEffect } from 'react'
import Link from 'next/link'
import AdventureCard from './../utils/adventurecard'
import { useAdventureState, useAdventureDispatch } from './../../context/adventure'
import { getAdventures } from './../../actions/adventure'

export default function MobileAdventures({ userLanguage }) {
  const dispatchAdventure = useAdventureDispatch()
  const { adventures } = useAdventureState()

  useEffect(() => {
    getAdventures(dispatchAdventure)
  }, [dispatchAdventure])

  return <div className="mobile-adventures-container">
    <div className="mobile-adventures">
      <div style={{ marginLeft: '6%' }} className="mobile-landing-heading">
        <h1>{ userLanguage ? 'Adventures' : 'Elamusmatkad' }</h1>
        <i className="fas fa-ellipsis-h"/>
      </div>
      <div className="mobile-adventures-flex">
        {
          adventures && adventures.map(e => <AdventureCard
            key={e._id}
            link={`/adventures/${e._id}`}
            name={userLanguage ? e.name : e.nimi}
            src={e.images.map(image => image).slice(0, 1)}
            topicon="fa-star"
            destination={e.location.start}
            price={(e.prices[0].price / 100).toFixed(2)}
          />)
        }
        <p style={{ color: 'white' }}>&</p>
      </div>
    </div>
  </div>
}
