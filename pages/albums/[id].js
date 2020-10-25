import { Fragment, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Container from './../../components/container'
import Heading from './../../components/heading'
import { useAlbumState, useAlbumDispatch } from './../../context/album'
import { getAlbum } from './../../actions/album'

export default function Album() {
  const dispatchAlbum = useAlbumDispatch()
  const albumState = useAlbumState()
  const { album } = albumState
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    getAlbum(dispatchAlbum, id)
  }, [dispatchAlbum, id])

  return <Fragment>
    <Head>
      <title>qw - album</title>
    </Head>
    <Container>
      <div className="albums">
        {
          albumState && album
            ? <Fragment>
                <Heading name={album.name} span={album.location}/>
                <p className="album-info">{album.info}</p>
              </Fragment>
            : <Heading name="Album" />
        }
        <div className="album">
          {
            albumState && album
              ? album.images.map(image => <img key={image} src={image} alt=""/>)
              : 'null'
          }
        </div>
      </div>
    </Container>
  </Fragment>
}
