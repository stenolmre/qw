import React, { Fragment, useEffect } from 'react'
import MobileLayout from './../layout'
import AdventureDisplay from './../components/adventure'
import { useAdventureState, useAdventureDispatch } from './../../../context/adventure'
import { getAdventures } from './../../../actions/adventure'
import { adventures_ad_eng } from './../../texts/adventures'

export default function MobileAdventure() {
  const { adventures } = useAdventureState()
  const dispatchAdventure = useAdventureDispatch()

  useEffect(() => {
    getAdventures(dispatchAdventure)
  }, [dispatchAdventure])

  return <Fragment>
    {
      adventures && <MobileLayout paragraph heading="Adventure is worthwile in itself." subheading={adventures_ad_eng}>
        <div className="mobile-adventures-page">
          {
            adventures && adventures.map(e => <AdventureDisplay key={e._id} e={e} />).reverse()
          }
        </div>
      </MobileLayout>
    }
  </Fragment>
}
