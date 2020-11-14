import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'
import Search from './search'
import Spinner from './spinner'
import gallery from './utils/gallery'
import { useAdventureState, useAdventureDispatch } from './../context/adventure'
import { getAdventures } from './../actions/adventure'

export default function Sidebar() {
  const [search, setSearch] = useState('')
  const dispatchAdventures = useAdventureDispatch()
  const adventureState = useAdventureState()
  const { adventures } = adventureState
  const userLanguage = Cookies.get('lan') === 'eng'

  useEffect(() => {
    getAdventures(dispatchAdventures)
  }, [dispatchAdventures])

  const numbers = []
  const [imagesPerPage] = useState(1)
  const [currentPage, setCurrentPage] = useState(1);
  const totalImages = gallery.length

  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
    numbers.push(i);
  }

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = gallery.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(totalImages / imagesPerPage);

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

  return <Fragment>
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-posts-container">
          <Search onChange={e => setSearch(e.target.value)}/>
          <div className="sidebar-posts">
            {
              adventureState && adventures
                ? adventures.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map((post, i) => <div className="sidebar-post" key={i}>
                    <Link href={`/adventures/${post._id}`}><a><h3><span>0{i + 1}</span> { post.name }</h3></a></Link>
                    <p>{(post.price / 100).toFixed(2)}€</p>
                  </div>).slice(0, 2)
                : null
            }
          </div>
        </div>
        <div className="sidebar-media-container">
          <div className="sidebar-media">
            <Link href="/albums" className="sidebar-media-button"><a>+</a></Link>
            <div className="sidebar-media-images">
              <img src={currentImages} alt=""/>
              <div>
                <button className="something-left" onClick={number => paginateToPrevious(number)}>↞</button>
                <div className="something-number">
                  {
                    numbers.map(number => <div key={number} style={currentPage === number ? { background: 'rgba(250, 250, 250, .7)'} : { background: 'rgba(250, 250, 250, .2)'} } onClick={() => paginate(number)}></div>)
                  }
                </div>
                <button className="something-right" onClick={number => paginateToNext(number)}>↠</button>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-button">
          <Link href="/adventures"><a>{userLanguage ? 'Explore all adventures' : 'Vaata kõiki elamusmatku'} ↠</a></Link>
        </div>
      </div>
    </div>
  </Fragment>
}
