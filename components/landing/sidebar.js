import React, { useEffect } from 'react'
import Link from 'next/link'

import { useAdventureState, useAdventureDispatch } from '@/context/adventure'
import { getAdventures } from '@/actions/adventure'
import { useAlbumState, useAlbumDispatch } from '@/context/album'
import { getAlbums } from '@/actions/album'

import Loader from '@/components/loader'

const Sidebar = ({ language }) => {
  const dispatchAdventure = useAdventureDispatch()
  const { adventures, loading: loading_adventures } = useAdventureState()
  const dispatchAlbum = useAlbumDispatch()
  const { albums, loading: loading_albums } = useAlbumState()

  useEffect(() => {
    getAdventures(dispatchAdventure)
    getAlbums(dispatchAlbum)
  }, [dispatchAdventure, dispatchAlbum])

  const categories = adventures && adventures.map(el => el.type)
  const uniqueCategories = categories.filter((c, index) => categories.indexOf(c) === index)

  return <div className="landing_sidebar">
    <h5>{language ? 'Choose your adventure' : 'Vali endale elamusmatk'}</h5>
    {
      loading_adventures ? <div className="landing_sidebar_loader"><Loader/></div> : adventures && uniqueCategories.map(el => <Link href={`/adventures?category=${el}`} key={el}><a className="landing_sidebar_category">
        <p>{el.slice(0, 1).toUpperCase()}{el.slice(1)}</p>
        <i className="fas fa-chevron-right landing_sidebar_category_icon"/>
      </a></Link>)
    }
    <h5>{language ? 'Explore adventures through our eyes' : 'Koge elamusmatku läbi meie silmade'}</h5>
    {
      loading_albums ? <div className="landing_sidebar_loader"><Loader/></div> : albums && albums.map(el => <Link key={el._id} href={`/galleries/${el._id}?name=${language ? el.name.toLowerCase().replaceAll(' ', '-') : el.nimi.toLowerCase().replaceAll(' ', '-')}`}><a className="landing_sidebar_album">
        <div className="landing_sidebar_album_images">
          {
            el.thumbnails.map(_el => <img key={_el} src={_el} alt={_el}/>).slice(0, 3)
          }
          <div>
            {
              el.thumbnails.map(_el => <img key={_el} src={_el} alt={_el}/>).slice(3)
            }
            <p>+{el.images.length}</p>
          </div>
        </div>
        <div className="landing_sidebar_album_name">
          <p>{language ? el.name : el.nimi}</p>
          <i className="fas fa-chevron-right"/>
        </div>
      </a></Link>).slice(0, 2)
    }
  </div>
}

export default Sidebar
