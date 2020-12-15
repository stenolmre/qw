import React, { Fragment, useEffect } from 'react'
import { useRouter } from 'next/router'
import Loading from './../utils/loading'
import Container from './../container'
import Sidebar from './sidebar'
import { useAdventureState, useAdventureDispatch } from './../../context/adventure'
import { getAdventures, getAdventuresByCategory } from './../../actions/adventure'

export default function Adv_Layout({ children, userLanguage, onChange }) {
  const { pathname } = useRouter()
  const { adventures, loading } = useAdventureState()
  const dispatchAdventure = useAdventureDispatch()

  useEffect(() => {
    if (pathname === '/adventures') {
      getAdventures(dispatchAdventure)
    } else {
      getAdventuresByCategory(dispatchAdventure, pathname.slice(12))
    }
  }, [dispatchAdventure, pathname])

  return <Fragment>
    {
      loading
        ? <Loading/>
        : adventures && <Container>
            <div className="adventures">
              <Sidebar userLanguage={userLanguage} onChange={onChange}/>
              { children }
            </div>
          </Container>
    }
  </Fragment>
}
