import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Head from './../../components/utils/head'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import Container from './../../components/container'
import Slideshow from './../../components/utils/slideshow'
import Heading from './../../components/utils/heading'
import Spinner from './../../components/utils/spinner'
import { useAlbumState, useAlbumDispatch } from './../../context/album'
import { getAlbum } from './../../actions/album'

function Album(props) {
  const dispatchAlbum = useAlbumDispatch()
  const albumState = useAlbumState()
  const { album } = albumState
  const router = useRouter()
  const { id } = router.query
  const [openSlideshow, setOpenSlideshow] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const userLanguage = Cookies.get('lan') === 'eng'

  useEffect(() => {
    getAlbum(dispatchAlbum, id)
  }, [dispatchAlbum, id])

  return <Fragment>
    <Head title={userLanguage ? `${props.data.name}` : `${props.data.nimi}`} description={userLanguage ? `${props.data.description}` : props.data.kirjeldus} image="https://etreeningud.ee/media/images/stenolmre/OG_IMG_2946.jpg" url="https://stenolmre.com/albums/1" />
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
              ? album.images.map((image, i) => <img onClick={() => {
                  setOpenSlideshow(true)
                  setCurrentPage(i + 1)
                }} key={image} src={image} alt=""/>)
              : <Spinner/>
          }
        </div>
      </div>
    </Container>
    {
      openSlideshow && <Slideshow currentPage={currentPage} setCurrentPage={setCurrentPage} gallery={albumState && album && album.images} close={() => setOpenSlideshow(false)}/>
    }
  </Fragment>
}

Album.getInitialProps = async ({ req, query }) => {
  const { id } = query

  const { data } = await axios.get(`https://stenolmre.com/api/albums/get/?albumId=${id}`)

  return { data }
}

export default Album
