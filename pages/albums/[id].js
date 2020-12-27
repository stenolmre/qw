import React, { Fragment, useState } from 'react'
import axios from 'axios'
import cookies from 'next-cookies'
import Head from './../../components/utils/head'
import DesktopAlbum from './../../components/desktop/album'
import MobileAlbum from './../../components/mobile/album'

function Album({ language, album }) {
  const user_lang = language === 'eng' ? true : false

  return <Fragment>
    <Head title={user_lang ? album.name : album.nimi} description={user_lang ? album.info : album.infoEst} image={album.images[0]} url={`https://stenolmre.com/albums/${album._id}`} />
    <div className="desktop">
      <DesktopAlbum userLanguage={user_lang} album={album}/>
    </div>
    <div className="mobile">
      <MobileAlbum userLanguage={user_lang} album={album}/>
    </div>
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
