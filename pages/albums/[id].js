import { Fragment, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import Container from './../../components/container'
import Heading from './../../components/utils/heading'
import Spinner from './../../components/utils/spinner'
import { useAlbumState, useAlbumDispatch } from './../../context/album'
import { getAlbum } from './../../actions/album'

export default function Album() {
  const dispatchAlbum = useAlbumDispatch()
  const albumState = useAlbumState()
  const { album } = albumState
  const router = useRouter()
  const { id } = router.query
  const userLanguage = Cookies.get('lan') === 'eng'

  useEffect(() => {
    getAlbum(dispatchAlbum, id)
  }, [dispatchAlbum, id])

  return <Fragment>
    <Head>
      <title>qw - album</title>
    </Head>
    <Container>
      <div className="gallery">
        {
          albumState && album
            ? <Fragment>
                <Heading name={userLanguage ? album.name : album.nimi} span={album.location}/>
                <p className="album-info">{userLanguage ? album.info : album.infoEst}</p>
              </Fragment>
            : <Spinner/>
        }
        <div className="album">
          {
            albumState && album
              ? album.images.map(image => <img key={image} src={image} alt=""/>)
              : <Spinner/>
          }
        </div>
      </div>
    </Container>
  </Fragment>
}
