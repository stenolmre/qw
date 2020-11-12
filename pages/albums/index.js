import { Fragment, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Cookies from 'js-cookie'
import Container from './../../components/container'
import Heading from './../../components/heading'
import Spinner from './../../components/spinner'
import { useAlbumState, useAlbumDispatch } from './../../context/album'
import { getAlbums } from './../../actions/album'

export default function Albums() {
  const dispatchAlbum = useAlbumDispatch()
  const albumState = useAlbumState()
  const { albums } = albumState
  const userLanguage = Cookies.get('lan') === 'eng'

  useEffect(() => {
    getAlbums(dispatchAlbum)
  }, [dispatchAlbum])

  return <Fragment>
    <Head>
      <title>qw - albums</title>
    </Head>
    <Container>
      <div className="albums">
        <div className="album-previews">
          {
            albumState && albums
              ? albums.map(album => <Link key={album._id} href={`/albums/${album._id}`}><a>
                  <div className="album-preview">
                    {
                      album.images.map(image => <div key={image} className="album-preview-image" style={{ backgroundImage: `url(${image})`}}/>).slice(0, 4)
                    }
                  </div>
                  <h4>{userLanguage ? album.name : album.nimi}</h4>
                </a></Link>)
              : <Spinner/>
          }
        </div>
      </div>
    </Container>
  </Fragment>
}
