import React, { Fragment, useEffect } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'
import Loader from './../../mobile/components/loader'
import AdventureDisplay from './../components/adventure'
import { useAdventureState, useAdventureDispatch } from './../../../context/adventure'
import { getAdventures } from './../../../actions/adventure'

export default function AdventureSidebar() {
  const dispatchAdventure = useAdventureDispatch()
  const { adventures, loading } = useAdventureState()
  const user_lang = Cookies.get('lan') === 'eng' ? true : false

  useEffect(() => { getAdventures(dispatchAdventure) }, [dispatchAdventure])

  return <Fragment>
    <div className="desktop-layout-header">
      <div className="desktop-layout-sidebar-header">
        <h4>{user_lang ? <Fragment>Spectacular Scenary.<br/>Lifelong Memories.</Fragment> : <Fragment>Imelised Vaated.<br/>Ajatud Kogemused.</Fragment>}</h4>
        <p>{user_lang ? 'Explore adventures through our eyes.' : 'Elamusmatkad läbi matkaja silmade.'}</p>
      </div>
    </div>
    <div style={{ padding: '25px 0 0 0' }}>
      {
        loading
          ? <Loader />
          : adventures && adventures.map(e => <AdventureDisplay key={e._id} link={`/adventures/${e._id}`} name={user_lang ? e.name : e.nimi} image={e.images[0]} price={(e.prices[0].price / 100).toFixed(2)}/>)
      }
      <Link href="/adventures"><a className="desktop-landing-sidebar-button">{user_lang ? 'All adventures' : 'Kõik elamusmatkad'}</a></Link>
    </div>
  </Fragment>
}
