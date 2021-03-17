import React, { Fragment, useEffect } from 'react'
import cookies from 'next-cookies'
import Link from 'next/link'
import Head from '@/utils/head'

import { useAlbumState, useAlbumDispatch } from '@/context/album'
import { getAlbums } from '@/actions/album'

import Layout from '@/components/layout'
import Loader from '@/components/loader'

const Index = ({ language }) => {
  const dispatchAlbum = useAlbumDispatch()
  const { albums, loading } = useAlbumState()

  useEffect(() => { getAlbums(dispatchAlbum) }, [dispatchAlbum])

  const user_lang = language === 'eng' ? true : false

  return <Fragment>
    <Head title={user_lang ? 'Galleries' : 'Galeriid'}/>
    <Layout>
      <h1 className="galleries_layout_title">{user_lang ? 'Galleries' : 'Galeriid'}</h1>
      <div className="galleries_layout">
        {
          loading ? <div className="galleries_loader"><Loader/></div> : albums && albums.map(el => <Link href={`/galleries/${el._id}?name=${user_lang ? el.name.toLowerCase().replaceAll(' ', '-') : el.nimi.toLowerCase().replaceAll(' ', '-')}`} key={el._id}><a className="gallery_preview">
            <div className="gallery_preview_images">
              {
                el.thumbnails.map(_el => <img key={_el} src={_el} alt={_el}/>).slice(0, 3)
              }
              <div className="gallery_preview_last_image">
                {
                  el.thumbnails.map(_el => <img key={_el} src={_el} alt={_el}/>).slice(3)
                }
                <p>+{el.images.length}</p>
              </div>
            </div>
            <h4>{user_lang ? el.name : el.nimi}</h4>
          </a></Link>)
        }
      </div>
    </Layout>
  </Fragment>
}

Index.getInitialProps = async ctx => {
  const { lan } = cookies(ctx)
  return { language: lan }
}

export default Index
