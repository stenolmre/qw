import React, { Fragment, useState } from 'react'
import Link from 'next/link'
import Navbar from './../navbar'
import Categories from './categories'
import AlbumDisplay from './../components/album'
import { useAlbumState } from './../../../context/album'

export default function Galleries({ userLanguage }) {
  const { albums } = useAlbumState()
  const [filterAlbums, setFilterAlbums] = useState('/')

  return <Fragment>
    <Navbar/>
    <Categories filter={el => setFilterAlbums(el)}/>
    <div className="mobile-galleries-page-flex">
    {
      filterAlbums !== '/'
        ? albums.filter(e => e.category === filterAlbums).map(e => <AlbumDisplay key={e._id} e={e} userLanguage={userLanguage}/>)
        : albums.map(e => <AlbumDisplay key={e._id} e={e} userLanguage={userLanguage}/>)
    }
    </div>
    <div className="mobile-footer">
      <p>copyright @ 2020 by North Season</p>
    </div>
  </Fragment>
}
