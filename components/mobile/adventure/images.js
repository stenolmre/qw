import React, { useState, useEffect, useRef } from 'react'
import { useAdventureState } from './../../../context/adventure'
import Slideshow from './../../utils/slideshow'

export default function Images() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [showSlideshow, setShowSlideshow] = useState(false)
  const { adventure } = useAdventureState()
  const image = useRef()
  const [dimensions, setDimensions] = useState()

  useEffect(() => {
    if (image.current) {
      setDimensions(image.current.getBoundingClientRect());
    }
  }, [])

  const numbers = []
  const [imagesPerPage] = useState(1)
  const [currentPage, setCurrentPage] = useState(1);
  const totalImages = adventure && adventure.images.length

  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
    numbers.push(i);
  }

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  const paginate = number => setCurrentPage(number)

  const paginateToNext = () => currentPage === totalPages ? setCurrentPage(1) : setCurrentPage(currentPage + 1)

  const paginateToPrevious = () => currentPage === 1 ? setCurrentPage(totalPages) : setCurrentPage(currentPage - 1)

  return <div className="mobile-adventure-page-images">
    <div style={{ height: dimensions !== undefined && dimensions.width * .7 }} ref={image} className="mobile-adventure-page-image">
      <img src={adventure.images.slice(indexOfFirstImage, indexOfLastImage)} alt="" onClick={() => {
        setShowSlideshow(!showSlideshow)
        setCurrentSlide(currentPage)
      }}/>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button style={{ top: dimensions !== undefined && dimensions.width / 2 }} onClick={paginateToNext}><i className="fas fa-arrow-left"/></button>
      <button style={{ top: dimensions !== undefined && dimensions.width / 2 }} onClick={paginateToNext}><i className="fas fa-arrow-right"/></button>
    </div>
    {
      showSlideshow && <Slideshow currentPage={currentSlide} setCurrentPage={setCurrentSlide} close={() => setShowSlideshow(!showSlideshow)} gallery={adventure.images}/>
    }
  </div>
}
