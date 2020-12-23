import React, { Fragment, useEffect } from 'react'
import cookies from 'next-cookies'
import Head from './../../components/utils/head'
import { useAlbumState, useAlbumDispatch } from './../../context/album'
import { getAlbums } from './../../actions/album'
import { landingeng, landingest } from './../../components/texts/landing'

import MobileGalleries from './../../components/mobile/gallery/galleries'

function Albums({ language }) {
  const user_lang = language === 'eng' ? true : false
  const dispatchAlbum = useAlbumDispatch()
  const { albums } = useAlbumState()

  useEffect(() => {
    getAlbums(dispatchAlbum)
  }, [dispatchAlbum])

  return <Fragment>
    <Head title={user_lang ? 'North Season - Gallery' : 'North Season - Galerii'} description={user_lang ? landingeng : landingest} image="https://etreeningud.ee/media/images/stenolmre/OG_IMG_2946.jpg" url="https://stenolmre.com/albums" />
    {
      albums && <MobileGalleries userLanguage={user_lang}/>
    }
  </Fragment>
}

Albums.getInitialProps = async ctx => {
  const { lan } = cookies(ctx)
  return { language: lan }
}

export default Albums
