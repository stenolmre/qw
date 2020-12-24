import React, { useEffect, Fragment } from 'react'
import { useAdventureState, useAdventureDispatch } from './../../context/adventure'
import { getAdventure } from './../../actions/adventure'

export default function OrderDetails({ order, userLanguage }) {
  const dispatchAdventure = useAdventureDispatch()
  const adventureState = useAdventureState()
  const { adventure } = adventureState
  const id = order && `${order.id}`

  useEffect(() => {
    getAdventure(dispatchAdventure, id)
  }, [dispatchAdventure, id])

  return <Fragment>
    {
      !adventureState && loading
      ? <Loading/>
      : adventure && <div className="order">
          <div className="order-header">
            <h2>{userLanguage ? 'ORDER' : 'TELLIMUS'}</h2>
            <img src="northseason.png" alt="NorthSeason"/>
          </div>
          {
            order.adults === 0
              ? null
              : <div className="order-line">
                <p>{userLanguage ? 'Adult' : 'Täiskasvanu'}</p>
                <p>{order.adults} x {(adventure.prices[0].price / 100).toFixed(2)}€</p>
              </div>
          }
          {
            order.youth === 0
              ? null
              : <div className="order-line">
                <p>{userLanguage ? 'Youth' : 'Nooruk'}</p>
                <p>{order.youth} x {(adventure.prices[1].price / 100).toFixed(2)}€</p>
              </div>
          }
          {
            order.children === 0
              ? null
              : <div className="order-line">
                <p>{userLanguage ? 'Child' : 'Laps'}</p>
                <p>{order.children} x {(adventure.prices[2].price / 100).toFixed(2)}€</p>
              </div>
          }
          <br/>
          <div className="order-line">
            <p>{userLanguage ? 'Date' : 'Kuupäev'}</p>
            <p>{new Date(order.day).toLocaleDateString()}</p>
          </div>
          <div className="order-line">
            <p>{userLanguage ? 'Time' : 'Kellaaeg'}</p>
            <p>{order.time}</p>
          </div>
          <br/>
          <div className="order-line">
            <p>{userLanguage ? 'Tax' : 'Käibemaks'}</p>
            <p>{userLanguage ? 'No additional Tax' : 'Hind sisaldab käibemaksu'}</p>
          </div>
          <br/>
          <div className="order-line">
            <p><strong>{userLanguage ? 'Total Price' : 'Hind Kokku'}</strong></p>
            <p><strong>{((adventure.prices[0].price * order.adults + adventure.prices[1].price * order.youth + adventure.prices[2].price * order.children) / 100).toFixed(2)}€</strong></p>
          </div>
        </div>
    }
  </Fragment>
}
