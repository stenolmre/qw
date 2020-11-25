import React, { useState } from 'react'

export default function Modal({ onClick, src, images }) {
  const numbers = []
  const [imagesPerPage] = useState(1)
  const [currentPage, setCurrentPage] = useState(1);
  const totalImages = images.length

  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
    numbers.push(i);
  }

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  const paginate = number => {
    setCurrentPage(number)
  }

  return <div className="modal">
    <img src={src} alt="" />
    <i className="far fa-times-circle" onClick={onClick}/>
  </div>
}
