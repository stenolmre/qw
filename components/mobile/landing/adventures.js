import React, { useEffect } from 'react'
import Link from 'next/link'
import AdventureDisplay from './../components/adventure'
import Heading from './../components/landingheading'
import { useAdventureState, useAdventureDispatch } from './../../../context/adventure'
import { getAdventures } from './../../../actions/adventure'

export default function MobileAdventures({ userLanguage }) {
  const dispatchAdventure = useAdventureDispatch()
  const { adventures } = useAdventureState()

  useEffect(() => {
    getAdventures(dispatchAdventure)
  }, [dispatchAdventure])

  return <div className="mobile-adventures">
    <Heading name={userLanguage ? 'Best Experiences' : 'Parimad elamused'} link="/adventures" />
    <div className="mobile-adventures-flex">
      {
        adventures && adventures.map(e => <AdventureDisplay key={e._id} userLanguage={userLanguage} e={e} />).slice(0, 2).reverse()
      }
      <p style={{ opacity: '0' }}>&</p>
    </div>
  </div>
}
