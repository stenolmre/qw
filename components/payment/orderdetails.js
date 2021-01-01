import React, { Fragment } from 'react'
import Loader from './../mobile/components/loader'

export default function OrderDetails({ userLanguage, adventure, loading, order, accepted }) {
  const calculatePrice = (person, num) => (person * adventure.prices[num].price / 100)

  return <Fragment>
    {
      loading
        ? <Loader/>
        : adventure && <Fragment>
            {
              accepted ? null : <h1 className="desktop-page-heading">{userLanguage ? 'Order' : 'Tellimus'}</h1>
            }
            <div className="desktop-order-details-table">
              <div>
                <p>{userLanguage ? 'Adventure' : 'Elamusmatk'}</p>
                <p style={{ width: '200px', justifyContent: 'flex-end', textAlign: 'right' }}>{userLanguage ? adventure.name : adventure.nimi}</p>
              </div>
              <div style={{ margin: '25px 0 0 0' }}>
                <p>{userLanguage ? 'Date' : 'Kuupäev'}</p>
                <p></p>
                <p>{order.date.day}/{order.date.month}/{order.date.year}</p>
              </div>
              <div style={{ margin: '0 0 25px 0' }}>
                <p>{userLanguage ? 'Time' : 'Kellaaeg'}</p>
                <p></p>
                <p>{order.time}</p>
              </div>
              <div>
                <p>{userLanguage ? 'Adult' : 'Täiskasvanu'}</p>
                <p>{order.adult}</p>
                <p>{calculatePrice(order.adult, 0).toFixed(2)}€</p>
              </div>
              <div>
                <p>{userLanguage ? 'Youth' : 'Nooruk'}</p>
                <p>{order.youth}</p>
                <p>{calculatePrice(order.youth, 1).toFixed(2)}€</p>
              </div>
              <div>
                <p>{userLanguage ? 'Child' : 'Laps'}</p>
                <p>{order.child}</p>
                <p>{calculatePrice(order.child, 2).toFixed(2)}€</p>
              </div>
              {
                accepted
                  ? null
                  : <Fragment>
                      <div style={{ margin: '25px 0' }}>
                        <p>{userLanguage ? 'Tax' : 'Käibemaks'}</p>
                        <p>0%</p>
                        <p>0€</p>
                      </div>
                      <div style={{ fontWeight: '600' }}>
                        <p>{userLanguage ? 'Total' : 'Kokku'}</p>
                        <p></p>
                        <p>{(calculatePrice(order.adult, 0) + calculatePrice(order.youth, 1) + calculatePrice(order.child, 2)).toFixed(2)}€</p>
                      </div>
                    </Fragment>
              }
            </div>

          </Fragment>
    }
  </Fragment>
}
