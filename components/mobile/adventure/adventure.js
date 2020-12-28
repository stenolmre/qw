import React, { Fragment, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import MobileLayout from './../layout'
import Details from './../../adventure/details'
import Cart from './../../adventure/cart'
import Prices from './../../adventure/prices'
import { useAdventureState, useAdventureDispatch } from './../../../context/adventure'
import { getAdventure } from './../../../actions/adventure'

export default function MobileAdventure({ userLanguage }) {
  const { query } = useRouter()
  const { adventure } = useAdventureState()
  const dispatchAdventure = useAdventureDispatch()
  const cart = useRef()

  const scrollTo = () => cart.current.scrollIntoView()

  useEffect(() => {
    getAdventure(dispatchAdventure, query.id)
  }, [dispatchAdventure, query])
  return <Fragment>
    {
      adventure && <MobileLayout userLanguage={userLanguage} adventure paragraph heading={userLanguage ? adventure.name : adventure.nimi} subheading={userLanguage ? adventure.description : adventure.kirjeldus} id={adventure._id} buttonName={userLanguage ? 'Book an Adventure' : 'Broneeri Elamusmatk'} buttonAction={scrollTo}>
        <div className="mobile-adventure-page">
          <Details mobile userLanguage={userLanguage}/>
          <div ref={cart} className="mobile-adventure-page-cart">
            <Prices />
            <h4>{userLanguage ? 'Book an Adventure' : 'Broneeri Elamusmatk'}</h4>
            <Cart />
          </div>
        </div>
      </MobileLayout>
    }
  </Fragment>
}
