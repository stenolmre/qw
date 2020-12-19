import React, { Fragment, useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from './../navbar'
import Images from './images'
import Social from './social'
import Details from './details'
import Info from './info'
import { useAdventureState, useAdventureDispatch } from './../../../context/adventure'
import { getAdventure } from './../../../actions/adventure'

export default function MobileAdventure() {
  const { query } = useRouter()
  const { adventure } = useAdventureState()
  const dispatchAdventure = useAdventureDispatch()

  useEffect(() => {
    getAdventure(dispatchAdventure, query.id)
  }, [dispatchAdventure, query])
  return <Fragment>
    {
      adventure && <div className="mobile-adventure-page">
        <Navbar/>
        <Images/>
        <h1 style={{ marginTop: '50px' }} className="mobile-page-heading">{adventure.name}</h1>
        <Social/>
        <p className="mobile-adventure-page-description">{adventure.description}</p>
        <Details/>
        <Info/>
      </div>
    }
  </Fragment>
}
