import React, { Fragment } from 'react'
import MobileLayout from './layout'
import AdventureDisplay from './components/adventure'
import Loader from './components/loader'
import { adventures_ad_eng, adventures_ad_est } from './../texts/adventures'

export default function MobileAdventure({ userLanguage, adventures, loading }) {
  return <Fragment>
    <MobileLayout userLanguage={userLanguage} paragraph heading={userLanguage ? <Fragment>Inspired Life.<br/>Deserved Happiness.</Fragment> : <Fragment>Inspireerivad Elamused.<br/>Rikkalikud Emotsioonid.</Fragment>} subheading={userLanguage ? adventures_ad_eng : adventures_ad_est}>
      {
        loading
          ? <Loader />
          : adventures && <div className="mobile-adventures-page">
              {
                adventures.map(e => <AdventureDisplay key={e._id} userLanguage={userLanguage} e={e} />)
              }
            </div>
      }
    </MobileLayout>
  </Fragment>
}
