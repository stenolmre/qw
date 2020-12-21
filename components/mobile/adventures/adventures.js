import React, { Fragment, useEffect } from 'react'
import { useRouter } from 'next/router'
import MobileLayout from './../layout'
import AdventureDisplay from './../components/adventure'
import Categories from './categories'
import { useAdventureState, useAdventureDispatch } from './../../../context/adventure'
import { getAdventures } from './../../../actions/adventure'
import { adventures_ad_eng, adventures_ad_est } from './../../texts/adventures'

export default function MobileAdventure({ userLanguage, message }) {
  const { adventures } = useAdventureState()
  const dispatchAdventure = useAdventureDispatch()
  const { pathname } = useRouter()

  useEffect(() => {
    getAdventures(dispatchAdventure)
  }, [dispatchAdventure])

  return <Fragment>
    {
      adventures && <MobileLayout userLanguage={userLanguage} paragraph heading={userLanguage ? 'Adventure is worthwile in itself.' : '-'} subheading={userLanguage ? adventures_ad_eng : adventures_ad_est}>
        <Categories />
        <div className="mobile-adventures-page">
          {
            adventures && pathname === '/adventures'
              ? adventures.map(e => <AdventureDisplay key={e._id} userLanguage={userLanguage} e={e} />).reverse()
              : adventures.filter(e => e.type === pathname.slice(12)).map(e => <AdventureDisplay key={e._id} userLanguage={userLanguage} e={e} />)
          }
          {
            adventures && adventures.filter(e => e.type === pathname.slice(12)).length < 1 && <p className="mobile-adventures-page-error">{message}</p>
          }
        </div>
      </MobileLayout>
    }
  </Fragment>
}
