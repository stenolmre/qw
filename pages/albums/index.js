import React, { Fragment, useEffect } from 'react'
import Link from 'next/link'
import cookies from 'next-cookies'
import Head from './../../components/utils/head'
import Container from './../../components/container'
import Heading from './../../components/utils/heading'
import Spinner from './../../components/utils/spinner'
import { useAlbumState, useAlbumDispatch } from './../../context/album'
import { getAlbums } from './../../actions/album'
import { landingeng, landingest } from './../../components/texts/landing'

import MobileGalleries from './../../components/mobile/gallery/galleries'

function Albums({ language }) {
  const user_lang = language === 'eng' ? true : false
  const dispatchAlbum = useAlbumDispatch()
  const albumState = useAlbumState()
  const { albums } = albumState

  useEffect(() => {
    getAlbums(dispatchAlbum)
  }, [dispatchAlbum])

  return <Fragment>
    <Head title={user_lang ? 'North Season - Gallery' : 'North Season - Galerii'} description={user_lang ? landingeng : landingest} image="https://etreeningud.ee/media/images/stenolmre/OG_IMG_2946.jpg" url="https://stenolmre.com/albums" />

      <div className="gallery">
        <Container>
        <div className="album-previews">
          {
            albumState && albums
              ? albums.map(album => <Link key={album._id} href={`/albums/${album._id}`}><a>
                  <div className="album-preview">
                    {
                      album.thumbnails.map(image => <div key={image} className="album-preview-image" style={{ backgroundImage: `url(${image})`}}/>)
                    }
                    <div className="album-overlay">
                      <h2>+{album.images.length - 3}</h2>
                    </div>
                  </div>
                  <h4>{user_lang ? album.name : album.nimi}</h4>
                </a></Link>)
              : <Spinner/>
          }
        </div>
        </Container>
      </div>
      {
        albums && <MobileGalleries/>
      }
  </Fragment>
}

Albums.getInitialProps = async ctx => {
  const { lan } = cookies(ctx)
  return { language: lan }
}

export default Albums
