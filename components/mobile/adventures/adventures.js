import React, { Fragment, useEffect } from 'react'
import MobileLayout from './../layout'
import AdventureDisplay from './../components/adventure'
import { useAdventureState, useAdventureDispatch } from './../../../context/adventure'
import { getAdventures } from './../../../actions/adventure'
import { adventures_ad_eng, adventures_ad_est } from './../../texts/adventures'

export default function MobileAdventure({ userLanguage }) {
  const { adventures } = useAdventureState()
  const dispatchAdventure = useAdventureDispatch()

  useEffect(() => {
    getAdventures(dispatchAdventure)
  }, [dispatchAdventure])

  return <Fragment>
    {
      adventures && <MobileLayout userLanguage={userLanguage} paragraph heading={userLanguage ? 'Adventure is worthwile in itself.' : '-'} subheading={userLanguage ? adventures_ad_eng : adventures_ad_est}>
        <div className="mobile-adventures-page">
          {
            adventures && adventures.map(e => <AdventureDisplay key={e._id} userLanguage={userLanguage} e={e} />).reverse()
          }
        </div>
      </MobileLayout>
    }
  </Fragment>
}
