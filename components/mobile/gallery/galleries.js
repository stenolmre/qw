import React, { Fragment, useState } from 'react'
import MobileLayout from './../layout'
import Categories from './categories'
import AlbumDisplay from './../components/album'
import Loader from './../components/loader'
import { useAlbumState } from './../../../context/album'

export default function Galleries({ userLanguage }) {
  const { albums, loading } = useAlbumState()
  const [filterAlbums, setFilterAlbums] = useState('/')

  return <Fragment>
    <MobileLayout userLanguage={userLanguage} heading={userLanguage ? 'spectacular scenary. lifelong memories.' : 'Imelised vaated. Ajatud kogemused.'} subheading={userLanguage ? 'Explore adventures through our eyes.' : 'Elamusmatkad läbi matkaja silmade.'}>
      <div className="mobile-galleries-page">
        <Categories filter={el => setFilterAlbums(el)}/>
        {
          loading
            ? <Loader />
            : filterAlbums !== '/'
                ? albums.filter(e => e.category === filterAlbums).map(e => <AlbumDisplay key={e._id} e={e} userLanguage={userLanguage}/>)
                : albums.map(e => <AlbumDisplay key={e._id} e={e} userLanguage={userLanguage}/>)
        }
      </div>
    </MobileLayout>
  </Fragment>
}
