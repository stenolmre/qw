import React, { Fragment, useEffect } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'
import Loader from './../../mobile/components/loader'
import { useAlbumState, useAlbumDispatch } from './../../../context/album'
import { getAlbums } from './../../../actions/album'

export default function AlbumSidebar() {
  const dispatchAlbum = useAlbumDispatch()
  const { albums, loading } = useAlbumState()
  const user_lang = Cookies.get('lan') === 'eng' ? true : false

  useEffect(() => { getAlbums(dispatchAlbum) }, [dispatchAlbum])

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
          : albums && albums.map(e => <Link href={`/albums/${e._id}`} key={e._id}><a className="desktop-landing-sidebar-album-container">
              <div className="desktop-landing-sidebar-album">
                {
                  e.thumbnails.map(el => <img key={el} src={el} alt={user_lang ? e.name : e.nimi} />).slice(0, 3)
                }
                <div className="desktop-landing-sidebar-album-overlay">+{e.images.length - 3}</div>
              </div>
              <h4>{user_lang ? e.name : e.nimi}</h4>
            </a></Link>).slice(0, 3)
      }
      <Link href="/albums"><a className="desktop-landing-sidebar-button">{user_lang ? 'All Albums' : 'Kõik albumid'}</a></Link>
    </div>
  </Fragment>
}
