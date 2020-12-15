import React, { useEffect, Fragment } from 'react'
import Link from 'next/link'
import { useAlbumState, useAlbumDispatch } from './../../context/album'
import { getAlbums } from './../../actions/album'

export default function Gallery({ userLanguage }) {
  const dispatchAlbum = useAlbumDispatch()
  const { albums } = useAlbumState()

  useEffect(() => {
    getAlbums(dispatchAlbum)
  }, [dispatchAlbum])

  return <div className="mobile-albums-container">
    <div className="mobile-albums">
      <div style={{ marginLeft: '6%' }} className="mobile-landing-heading">
        <h1>{ userLanguage ? 'Gallery' : 'Galerii' }</h1>
        <i className="fas fa-ellipsis-h"/>
      </div>
      <div className="mobile-albums-flex">
        {
          albums && albums.map(e => <div key={e._id} className="mobile-album-container">
            <div className="mobile-album">
              {
                e.images.map(img => <img src={img} alt={img}/>).slice(0, 4)
              }
            </div>
            <h2>{userLanguage ? e.name : e.nimi}</h2>
          </div>)
        }
        <p style={{ color: 'white' }}>&</p>
      </div>
    </div>
  </div>
}
