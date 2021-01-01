import React from 'react'
import DesktopLayout from './../layout'
import Details from './../../adventure/details'
import Cart from './cart'
import Images from './../../adventure/images'
import Loader from './../../mobile/components/loader'
import { useAdventureState } from './../../../context/adventure'

export default function Adventure({ userLanguage }) {
  const { adventure, loading } = useAdventureState()

  return <DesktopLayout sidebar={<Cart userLanguage={userLanguage}/>}>
    {
      loading
        ? <Loader />
        : adventure && <div className="desktop-adventure-page">
            <h1 className="desktop-page-heading">{userLanguage ? adventure.name : adventure.nimi}</h1>
            <Images />
            <Details />
          </div>
    }
  </DesktopLayout>
}
