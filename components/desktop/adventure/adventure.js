import React, { Fragment } from 'react'
import DesktopLayout from './../layout'
import Details from './../../adventure/details'
import Cart from './cart'
import share from './../../arrays/share'

export default function Adventure({ adventure, userLanguage }) {
  return <DesktopLayout sidebar={<Cart userLanguage={userLanguage}/>}>
    <div className="desktop-adventure-page">
      <h1 className="desktop-page-heading">{userLanguage ? adventure.name : adventure.nimi}</h1>
      <Details />
    </div>
  </DesktopLayout>
}
