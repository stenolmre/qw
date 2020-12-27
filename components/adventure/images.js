import React, { Fragment, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Slideshow from './../utils/slideshow'
import { useRouter } from 'next/router'
import { useAdventureDispatch, useAdventureState } from './../../context/adventure'
import { getAdventure } from './../../actions/adventure'

export default function Images() {
  const [currentPage, setCurrentPage] = useState(1)
  const [showSlideshow, setShowSlideshow] = useState(false)
  const user_lang = Cookies.get('lan') === 'eng' ? true : false
  const { query } = useRouter()

  const dispatchAdventure = useAdventureDispatch()
  const { adventure } = useAdventureState()

  useEffect(() => { getAdventure(dispatchAdventure, query.id) }, [dispatchAdventure, query])

  return <Fragment>
    {
      adventure && <div className="adventure-images">
        {
          adventure.images.map((e, i) => <div key={i} className="adventure-image">
            <img src={e} alt={adventure.name} onClick={() => {
              setShowSlideshow(!showSlideshow)
              setCurrentPage(i + 1)
            }}/>
          </div>)
        }
      </div>
    }
    {
      adventure && showSlideshow && <Slideshow currentPage={currentPage} setCurrentPage={setCurrentPage} close={() => setShowSlideshow(!showSlideshow)} gallery={adventure.images}/>
    }
  </Fragment>
}
