import React, { useEffect, Fragment } from 'react'
import Link from 'next/link'
import Heading from './../components/landingheading'
import AlbumDisplay from './../components/album'
import { useAlbumState, useAlbumDispatch } from './../../../context/album'
import { getAlbums } from './../../../actions/album'

export default function Gallery({ userLanguage }) {
  const dispatchAlbum = useAlbumDispatch()
  const { albums } = useAlbumState()

  useEffect(() => {
    getAlbums(dispatchAlbum)
  }, [dispatchAlbum])

  return <div className="mobile-albums">
    <Heading name={userLanguage ? 'Traveller\'s gallery' : 'Matkaja silmade läbi'} link="/albums" />
    <div className="mobile-albums-flex">
      {
        albums && albums.map(e => <AlbumDisplay key={e._id} e={e} userLanguage={userLanguage}/>)
      }
    <p style={{ color: 'white' }}>&</p>
    </div>
  </div>
}
