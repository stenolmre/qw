import React, { Fragment, useState } from 'react'
import axios from 'axios'
import cookies from 'next-cookies'
import Head from './../../components/utils/head'
import MobileLayout from './../../components/mobile/layout'
import Slideshow from './../../components/utils/slideshow'

function Album({ language, album }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [showSlideshow, setShowSlideshow] = useState(false)
  const user_lang = language === 'eng' ? true : false

  return <Fragment>
    <Head title={user_lang ? album.name : album.nimi} description={user_lang ? album.info : album.infoEst} image={album.images[0]} url={`https://stenolmre.com/albums/${album._id}`} />
    <MobileLayout userLanguage={user_lang} heading={user_lang ? album.name : album.nimi} subheading={user_lang ? album.info : album.infoEst} id={album._id}>
      <div className="mobile-album-page-images">
      {
        album.images.map((e, i) => <img key={e} src={e} alt={album.name} onClick={() => {
          setShowSlideshow(!showSlideshow)
          setCurrentPage(i + 1)
        }}/>)
      }
      </div>
    </MobileLayout>
    {
      showSlideshow && <Slideshow currentPage={currentPage} setCurrentPage={setCurrentPage} close={() => setShowSlideshow(!showSlideshow)} gallery={album.images}/>
    }
  </Fragment>
}

Album.getInitialProps = async ctx => {
  const { lan } = cookies(ctx)
  const { id } = ctx.query

  const { data } = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? await axios.get(`http://localhost:3000/api/albums/get?albumId=${id}`)
    : await axios.get(`https://stenolmre.com/api/albums/get?albumId=${id}`)

  return { language: lan, album: data }
}

export default Album
