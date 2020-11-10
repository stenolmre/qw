import React, { useState } from 'react'

export default function D() {
  const array = ['aurora.jpeg', 'särkitunturi.JPG']
  const numbers = []
  const [namesPerPage] = useState(1)
  const [currentPage, setCurrentPage] = useState(1);
  const totalNames = array.length

  for (let i = 1; i <= Math.ceil(totalNames / namesPerPage); i++) {
    numbers.push(i);
  }

  const indexOfLastPost = currentPage * namesPerPage;
  const indexOfFirstPost = indexOfLastPost - namesPerPage;
  const currentPosts = array.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(array.length / namesPerPage);

  const paginate = number => {
    setCurrentPage(number)
  }

  const paginateToNext = () => {
    if (currentPage === totalPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  }

  const paginateToPrevious = () => {
    if (currentPage === 1) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(currentPage - 1)
    }
  }

  return <div className="something-container">
    <div className="something">
      <img src={currentPosts} alt=""/>
      <div>
        <button className="something-left" onClick={number => paginateToPrevious(number)}>↞</button>
        <div className="something-number">
          {
            numbers.map(number => <div key={number} style={currentPage === number ? { background: 'rgba(250, 250, 250, .2)'} : { background: 'rgba(250, 250, 250, .7)'} } onClick={() => paginate(number)}></div>)
          }
        </div>
        <button className="something-right" onClick={number => paginateToNext(number)}>↠</button>
      </div>
    </div>
  </div>
}
