import React, { useEffect, Fragment } from 'react'
import Loading from './../utils/loading'
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
            <h2>{userLanguage ? 'YOUR ORDER' : 'SINU TELLIMUS'}</h2>
            <img src="northseason.png" alt="NorthSeason"/>
          </div>
          {
            order.adults === 0
              ? null
              : <div className="order-line">
                <p>Adults</p>
                <p>{order.adults} x {(adventure.prices[0].price / 100).toFixed(2)}€</p>
              </div>
          }
          {
            order.youth === 0
              ? null
              : <div className="order-line">
                <p>Youth</p>
                <p>{order.youth} x {(adventure.prices[1].price / 100).toFixed(2)}€</p>
              </div>
          }
          {
            order.children === 0
              ? null
              : <div className="order-line">
                <p>Child</p>
                <p>{order.children} x {(adventure.prices[2].price / 100).toFixed(2)}€</p>
              </div>
          }
          <br/>
          <div className="order-line">
            <p>Date</p>
            <p>{order.date.slice(8, 10)}/{order.date.slice(5, 7)}/{order.date.slice(0, 4)}</p>
          </div>
          <div className="order-line">
            <p>Time</p>
            <p>{order.time}</p>
          </div>
          <br/>
          <div className="order-line">
            <p>Tax</p>
            <p>No additional Tax</p>
          </div>
          <br/>
          <div className="order-line">
            <p><strong>Total Price</strong></p>
            <p><strong>{((adventure.prices[0].price * order.adults + adventure.prices[1].price * order.youth + adventure.prices[2].price * order.children) / 100).toFixed(2)}€</strong></p>
          </div>
        </div>
    }
  </Fragment>
}
