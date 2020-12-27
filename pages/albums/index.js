import React, { Fragment, useEffect } from 'react'
import cookies from 'next-cookies'
import Head from './../../components/utils/head'
import { useAlbumState, useAlbumDispatch } from './../../context/album'
import { getAlbums } from './../../actions/album'
import { landingeng, landingest } from './../../components/texts/landing'
import DesktopAlbums from './../../components/desktop/albums'
import MobileAlbums from './../../components/mobile/albums/albums'

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
      albums && <Fragment>
        <div className="desktop">
          <DesktopAlbums userLanguage={user_lang} albums={albums}/>
        </div>
        <div className="mobile">
          <MobileAlbums userLanguage={user_lang}/>
        </div>
      </Fragment>
    }
  </Fragment>
}

Albums.getInitialProps = async ctx => {
  const { lan } = cookies(ctx)
  return { language: lan }
}

export default Albums
