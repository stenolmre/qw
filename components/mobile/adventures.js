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
      <div className="mobile-adventures-flex">
        {
          adventures && adventures.map(e => <div key={e._id} className="mobile-adventure">
            <img src={e.images[0]} alt={e.name}/>
          </div>).slice(1)
        }
        <p style={{ opacity: '0' }}>&</p>
      </div>
    </div>
  </div>
}

// <img src={e.images[0]} alt={e.name}/>
