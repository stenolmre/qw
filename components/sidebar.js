import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import Search from './search'
import Spinner from './spinner'
import { useAdventureState, useAdventureDispatch } from './../context/adventure'
import { getAdventures } from './../actions/adventure'

export default function Sidebar() {
  const [search, setSearch] = useState('')
  const dispatchAdventures = useAdventureDispatch()
  const adventureState = useAdventureState()
  const { adventures } = adventureState

  useEffect(() => {
    getAdventures(dispatchAdventures)
  }, [dispatchAdventures])

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
              <img src="särkitunturi.JPG" alt=""/>
            </div>
          </div>
        </div>
        <div className="sidebar-button">
          <Link href="/adventures"><a>Explore all adventures ↠</a></Link>
        </div>
      </div>
    </div>
  </Fragment>
}
