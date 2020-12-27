import React, { Fragment, useState } from 'react'
import Link from 'next/link'
import DesktopLayout from './layout'
import AdventureSidebar from './sidebars/adventuresidebar'
import Slideshow from './../utils/slideshow'

export default function DesktopAlbum({ userLanguage, album }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [showSlideshow, setShowSlideshow] = useState(false)

  return <DesktopLayout sidebar={<AdventureSidebar/>}>
    {
      album && <Fragment>
        <h1 className="desktop-page-heading">{userLanguage ? album.name : album.nimi}</h1>
        <p className="desktop-page-description">{userLanguage ? album.info : album.infoEst}</p>
        <div className="desktop-album-page">
          {
            album.images.map((e, i) => <img key={i} src={e} alt={e} onClick={() => {
              setShowSlideshow(!showSlideshow)
              setCurrentPage(i + 1)
            }}/>)
          }
        </div>
      </Fragment>
    }
    {
      showSlideshow && <Slideshow currentPage={currentPage} setCurrentPage={setCurrentPage} close={() => setShowSlideshow(!showSlideshow)} gallery={album.images}/>
    }
  </DesktopLayout>
}
