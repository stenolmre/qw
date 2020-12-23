import React, { Fragment } from 'react'

export default function Prices({ adult, youth, child, userLanguage }) {
  return <Fragment>
    <h4>{userLanguage ? 'Prices' : 'Hinnakiri'}</h4>
    <div className="adventure-cart-prices">
      <p>{userLanguage ? 'Adult' : 'Täiskasvanu'}</p>
      <p>{adult} €</p>
    </div>
    <div className="adventure-cart-prices">
      <p>{userLanguage ? 'Youth' : 'Nooruk'} (12-18)</p>
      <p>{youth} €</p>
    </div>
    <div className="adventure-cart-prices">
      <p>{userLanguage ? 'Child' : 'Laps'} (6-11)</p>
      <p>{child} €</p>
    </div>
  </Fragment>
}
