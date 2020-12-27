import React, { Fragment, useState } from 'react'
import MobileLayout from './layout'
import Slideshow from './../utils/slideshow'

export default function Album({ userLanguage, album }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [showSlideshow, setShowSlideshow] = useState(false)

  return <Fragment>
    <MobileLayout userLanguage={userLanguage} heading={userLanguage ? album.name : album.nimi} subheading={userLanguage ? album.info : album.infoEst} id={album._id}>
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
