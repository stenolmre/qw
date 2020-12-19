import React, { Fragment, useState } from 'react'
import MobileLayout from './../layout'
import Categories from './categories'
import AlbumDisplay from './../components/album'
import { useAlbumState } from './../../../context/album'

export default function Galleries({ userLanguage }) {
  const { albums } = useAlbumState()
  const [filterAlbums, setFilterAlbums] = useState('/')

  return <Fragment>
    <MobileLayout heading="spectacular scenary. lifelong memories." subheading="Explore adventures through our eyes.">
      <div className="mobile-galleries-page">
        <Categories filter={el => setFilterAlbums(el)}/>
        {
          filterAlbums !== '/'
            ? albums.filter(e => e.category === filterAlbums).map(e => <AlbumDisplay key={e._id} e={e} userLanguage={userLanguage}/>)
            : albums.map(e => <AlbumDisplay key={e._id} e={e} userLanguage={userLanguage}/>)
        }
      </div>
    </MobileLayout>
  </Fragment>
}
