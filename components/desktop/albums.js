import React, { Fragment } from 'react'
import Link from 'next/link'
import DesktopLayout from './layout'
import AdventureSidebar from './sidebars/adventuresidebar'

export default function DesktopAlbums({ userLanguage, albums }) {
  return <DesktopLayout sidebar={<AdventureSidebar/>}>
    <h1 className="desktop-page-heading">{userLanguage ? <Fragment>Spectacular Scenary.<br/>Lifelong Memories.</Fragment> : <Fragment>Imelised Vaated.<br/>Ajatud Kogemused.</Fragment>}</h1>
    <p>{userLanguage ? 'Explore adventures through our eyes.' : 'Elamusmatkad läbi matkaja silmade.'}</p>
    <div className="desktop-albums-page">
      {
        albums.map(e => <AlbumDisplay key={e._id} e={e} userLanguage={userLanguage} />)
      }
    </div>
  </DesktopLayout>
}

function AlbumDisplay({ e, userLanguage }) {
  return <Link href={`/albums/${e._id}?${(userLanguage ? e.name : e.nimi).split(' ').join('-')}`}><a>
    <div className="desktop-album-container">
      <div className="desktop-album">
        {
          e.thumbnails.map(img => <img key={img} src={img} alt={img}/>).slice(0, 4)
        }
        <div className="desktop-album-blur">
          +{e.images.length - 3}
        </div>
      </div>
      <h4>{userLanguage ? e.name : e.nimi}</h4>
    </div>
  </a></Link>
}
