import React, { Fragment, useEffect } from 'react'
import Link from 'next/link'
import Navbar from './navbar'
import Categories from './categories'
import AlbumDisplay from './../mobile/components/album'
import Loader from './../mobile/components/loader'
import { useAlbumState, useAlbumDispatch } from './../../context/album'
import { getAlbums } from './../../actions/album'

export default function Landing({ userLanguage }) {
  const dispatchAlbum = useAlbumDispatch()
  const { albums, loading } = useAlbumState()

  useEffect(() => {
    getAlbums(dispatchAlbum)
  }, [dispatchAlbum])

  return <Fragment>
    <div className="landing-adventures">
      <Navbar/>

      <div className="landing-popular-adventure">
        <div className="landing-popular-adventure-image">
          <img src="https://etreeningud.ee/media/images/stenolmre/albums/Nordkapp/E21C46E4-4361-4DA9-98BF-D3B2937093DA.jpeg" alt=""/>
        </div>
        <div>
          <h1>Bike Tour to Nordkapp</h1>
          <p>Most nothern place in Europe waits for you. Ride through amazing lapland and beside a Northern sea to gather memories that lasts forever.</p>
          <Link href={`/adventures`}><a>Explore more</a></Link>
        </div>
      </div>

      <Categories />

    </div>
    <div className="landing-gallery">
      <h4>spectacular scenary. <br/> lifelong memories.</h4>
      <p>Explore adventures through our eyes.</p>
      <div className="landing-album-displays">
        {
          loading
            ? <Loader />
            : albums && albums.map(e => <Fragment key={e}>
              <Link href={`/albums/${e._id}`}><a className="landing-album-display">
                {
                  e.images.map(e => <img key={e} src={e} alt={e} />).slice(0, 3)
                }
                <div className="landing-album-display-overlay">
                  +{e.images.length}
                </div>
              </a></Link>
              <h4><Link href={`/albums/${e._id}`}><a>{e.name}</a></Link></h4>
            </Fragment>).slice(0, 3)
        }
      </div>
      <Link href="/albums"><a className="landing-albums-explore-more">All Albums</a></Link>
    </div>
  </Fragment>
}
