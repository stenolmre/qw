import React, { useState, useEffect, useCallback } from 'react'

const Slideshow = ({ totalImages, imagesPerPage = 1, images, currentPage, setCurrentPage, close }) => {
  const numbers = []

  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
    numbers.push(i)
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const paginateToNext = () => currentPage === totalImages ? setCurrentPage(totalImages) : setCurrentPage(currentPage + 1)

  const paginateToPrevious = () => currentPage === 1 ? setCurrentPage(1) : setCurrentPage(currentPage - 1)

  const indexOfLastImage = currentPage * imagesPerPage
  const indexOfFirstImage = indexOfLastImage - imagesPerPage

  return <div className="slideshow">
    <i className="fas fa-times" onClick={close}/>
    {
      images.map(el => <img key={el} src={el} alt={el}/>).slice(indexOfFirstImage, indexOfLastImage)
    }
    <button disabled={currentPage === 1} onClick={paginateToPrevious}>
      <i className="fas fa-chevron-left"/>
    </button>
    <div className="slideshow_dots">
      {
        numbers.map(number => <div key={number + 1} onClick={() => paginate(number)} style={currentPage === number ? { background: '#fff' } : null}/>)
      }
    </div>
    <button disabled={totalImages === currentPage} onClick={paginateToNext}>
      <i className="fas fa-chevron-right"/>
    </button>
  </div>
}

export default Slideshow
