import React, { Fragment, useState } from 'react'
import Slideshow from './../utils/slideshow'

export default function Images({ adventure }) {
  const [showModal, toggleModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  return <Fragment>
    <div className="adventure-images">
      {
        adventure.images.map((image, i) => <img
          onClick={() => {
            setCurrentPage(i + 1)
            toggleModal(!showModal)
          }}
          key={image} src={image} alt='Illustration'/>)
      }
    </div>
    {
      showModal && <Slideshow currentPage={currentPage} setCurrentPage={setCurrentPage} gallery={adventure.images} close={() => toggleModal(!showModal)}/>
    }
  </Fragment>
}
