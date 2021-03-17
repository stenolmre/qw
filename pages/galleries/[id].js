import React, { Fragment, useEffect, useState } from 'react'
import cookies from 'next-cookies'
import axios from 'axios'
import Head from '@/utils/head'

import Layout from '@/components/layout'
import Slideshow from '@/components/slideshow'

const Index = ({ language, album }) => {
  const user_lang = language === 'eng' ? true : false

  const [currentPage, setCurrentPage] = useState(1)
  const [showSlideshow, setShowSlideshow] = useState(false)

  return <Fragment>
    <Head title={user_lang ? album.name : album.nimi}/>
    <Layout>
      <div className="gallery_layout">
        <h1>{user_lang ? album.name : album.nimi}</h1>
        <small>{album.location}</small>
        <p>{user_lang ? album.info : album.infoEst}</p>
        <div className="gallery_images">
          {
            album.images.map((el, i) => <img src={el} alt={el} key={el} onClick={() => {
              setCurrentPage(i + 1)
              setShowSlideshow(true)
            }}/>)
          }
        </div>
      </div>
    </Layout>
    {
      showSlideshow && <Slideshow totalImages={album.images.length} images={album.images} currentPage={currentPage} setCurrentPage={setCurrentPage} close={() => setShowSlideshow(false)}/>
    }
  </Fragment>
}

Index.getInitialProps = async ctx => {
  const { lan } = cookies(ctx)

  const id = ctx.query.id

  const { data } = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? await axios.get(`http://localhost:3000/api/albums/get?albumId=${id}`)
    : await axios.get(`https://etreeningud.ee/api/posts/get?albumId=${id}`)

  return { language: lan, album: data }
}

export default Index
