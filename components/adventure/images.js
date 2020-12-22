import React, { Fragment, useState } from 'react'
import Slideshow from './../utils/slideshow'

export default function Images({ adventure }) {
  const [showModal, toggleModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  function openImage(el) {
    setCurrentPage(el)
    toggleModal(!showModal)
  }

  return <Fragment>
    <div className="adventure-images">
      {
        adventure.images.map((image, i) => <div className="adventure-image" key={image}>
          <img onClick={() => openImage(i + 1)} src={image} alt='Illustration'/>
        </div>)
      }
    </div>
    {
      showModal && <Slideshow currentPage={currentPage} setCurrentPage={setCurrentPage} gallery={adventure.images} close={() => toggleModal(!showModal)}/>
    }
  </Fragment>
}
