import React, { useState } from 'react'

export default function Slideshow({ gallery, close, currentPage, setCurrentPage }) {
  const numbers = []
  const [imagesPerPage] = useState(1)
  const totalImages = gallery.length

  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
    numbers.push(i);
  }

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = gallery.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  const paginate = number => setCurrentPage(number)

  const paginateToNext = () => currentPage === totalPages ? setCurrentPage(1) : setCurrentPage(currentPage + 1)

  const paginateToPrevious = () => currentPage === 1 ? setCurrentPage(totalPages) : setCurrentPage(currentPage - 1)

  if (process.browser) {
    document.onkeydown = e => {
      if (e.which == 39) {
        paginateToNext()
        return false
      } else if (e.which == 37) {
        paginateToPrevious()
        return false
      } else {
        return false
      }
    }
  }

  return <div className="slideshow">
    <i onClick={number => paginateToPrevious(number)} className="fas fa-chevron-left slideshow-left-button"/>
    <img src={currentImages} alt=""/>
    <div className="slideshow-numbers">
      {
        numbers.map(number => <div key={number} style={currentPage === number ? { background: 'rgba(250, 250, 250, .7)'} : { background: 'rgba(250, 250, 250, .2)'} } onClick={() => paginate(number)}></div>)
      }
    </div>
    <i onClick={number => paginateToNext(number)} className="fas fa-chevron-right slideshow-right-button"/>
    <i className="fas fa-times close-slideshow" onClick={close}/>
  </div>
}
