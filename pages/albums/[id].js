import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import cookies from 'next-cookies'
import MobileLayout from './../../components/mobile/layout'
import Navbar from './../../components/mobile/navbar'
import Slideshow from './../../components/utils/slideshow'

function Album({ language, album }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [showSlideshow, setShowSlideshow] = useState(false)
  const user_lang = language === 'eng' ? true : false

  return <Fragment>
    <MobileLayout heading={user_lang ? album.name : album.nimi} subheading={user_lang ? album.info : album.infoEst} id={album._id}>
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

  const { data } = await axios.get(`https://stenolmre.com/api/albums/get?albumId=${id}`)

  return { language: lan, album: data }
}

export default Album
