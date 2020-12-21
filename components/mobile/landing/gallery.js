import React, { useEffect, Fragment } from 'react'
import Link from 'next/link'
import { useAlbumState, useAlbumDispatch } from './../../../context/album'
import { getAlbums } from './../../../actions/album'

export default function Gallery({ userLanguage }) {
  const dispatchAlbum = useAlbumDispatch()
  const { albums } = useAlbumState()

  useEffect(() => {
    getAlbums(dispatchAlbum)
  }, [dispatchAlbum])

  return <div className="mobile-albums-container">
    <div className="mobile-albums">
      <div className="mobile-landing-heading">
        <h2>{userLanguage ? 'Traveller\'s gallery' : 'Matkaja silmade läbi'}</h2>
        <i className="fas fa-arrow-right"/>
      </div>
      <div className="mobile-albums-flex">
        {
          albums && albums.map(e => <Link href={`/albums/${e._id}`} key={e._id}><a>
            <div className="mobile-album-container">
              <div className="mobile-album">
                {
                  e.images.map(img => <img key={img} src={img} alt={img}/>).slice(0, 4)
                }
                <div className="mobile-album-blur">
                  +{e.images.length - 3}
                </div>
              </div>
              <h2>{userLanguage ? e.name : e.nimi}</h2>
            </div>
          </a></Link>)
        }
        <p style={{ color: 'white' }}>&</p>
      </div>
    </div>
  </div>
}
