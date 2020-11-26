import React, {useEffect} from 'react'
import Link from 'next/link'
import Heading from './../utils/heading'
import gallery from './../arrays/gallery'
import { useAlbumState, useAlbumDispatch } from './../../context/album'
import { getAlbums } from './../../actions/album'

export default function Gallery({ userLanguage }) {
  const dispatchAlbum = useAlbumDispatch()
  const albumState = useAlbumState()
  const { albums } = albumState

  useEffect(() => {
    getAlbums(dispatchAlbum)
  }, [dispatchAlbum])

  return <div className="mobile-section">
    <Heading name={userLanguage ? 'Gallery' : 'Galerii'} href="/albums" link={userLanguage ? 'see all' : 'vaata kõiki'}/>
    <div className="image-slider">
      {
        albumState && albums
          ? albums.map(album => <Link key={album._id} href={`/albums/${album._id}`}><a>
              <div className="album-preview">
                {
                  album.images.map(image => <div key={image} className="album-preview-image" style={{ backgroundImage: `url(${image})`}}/>).slice(0, 4)
                }
                <div className="album-overlay">
                  <h2>+{album.images.length - 3}</h2>
                </div>
              </div>
              <h4>{userLanguage ? album.name : album.nimi}</h4>
            </a></Link>)
          : <Spinner/>
      }
    </div>
  </div>
}
