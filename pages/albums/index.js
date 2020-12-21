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
