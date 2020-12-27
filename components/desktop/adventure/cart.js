import React, { Fragment } from 'react'
import CartDetails from './../../adventure/cart'
import Prices from './../../adventure/prices'

export default function Cart({ userLanguage }) {
  return <Fragment>
    <div className="desktop-layout-header">
      <div className="desktop-layout-sidebar-header">
        <Prices />
        <h4>{userLanguage ? 'Book an adventure' : 'Broneeri elamusmatk'}</h4>
        <br/>
        <CartDetails />
      </div>
    </div>
  </Fragment>
}
