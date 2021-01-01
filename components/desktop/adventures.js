import React, { Fragment } from 'react'
import Link from 'next/link'
import DesktopLayout from './layout'
import AlbumSidebar from './sidebars/albumsidebar'
import AdventureDisplay from './components/adventure'
import Loader from './../mobile/components/loader'

export default function DesktopAdventures({ adventures, loading, userLanguage }) {
  return <DesktopLayout sidebar={<AlbumSidebar/>}>
    <h1 className="desktop-page-heading">{userLanguage ? <Fragment>Inspired Life.<br/>Deserved Happiness.</Fragment> : <Fragment>Inspireerivad Elamused.<br/>Rikkalikud Emotsioonid.</Fragment>}</h1>
    <p>{userLanguage ? 'Experience jaw-dropping adventures.' : 'Koge unustamatuid seiklusi.'}</p>
    <div className="desktop-adventures-page">
      {
        loading
          ? <Loader />
        : adventures.map(e => <AdventureDisplay key={e._id} link={`/adventures/${e._id}?${e.name.split(' ').join('-')}`} image={e.images[0]} name={userLanguage ? e.name : e.nimi} price={(e.prices[0].price / 100).toFixed(2)} />)
      }
    </div>
  </DesktopLayout>
}
