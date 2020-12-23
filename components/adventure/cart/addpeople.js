import React, { useState, useEffect, Fragment } from 'react'

export default function AddPeople({ userLanguage, order, setOrder }) {
  function Input({ name, person, reduce, add }) {
    return <Fragment>
      <label className="adventure-cart-label">{name}</label>
      <div className="cart-inputs">
        <span
          onClick={reduce}>-</span>
        <input disabled type="number" min="0" value={person} name={person} onChange={e => setOrder({ ...order, [e.target.name]: e.target.value })}/>
        <span onClick={add}>+</span>
      </div>
    </Fragment>
  }

  return <Fragment>
    <Input
      name={userLanguage ? 'Adult' : 'Täiskasvanu'}
      person={order.adults}
      reduce={() => order.adults === 0 || order.adults < 0
        ? setOrder({ ...order, adults: 0 })
        : setOrder({ ...order, adults: order.adults - 1 })}
      add={() => setOrder({ ...order, adults: order.adults + 1 })}/>

    <Input
      name={userLanguage ? 'Youth' : 'Nooruk'}
      person={order.youth}
      reduce={() => order.youth === 0 || order.youth < 0
        ? setOrder({ ...order, youth: 0 })
        : setOrder({ ...order, youth: order.youth - 1 })}
      add={() => setOrder({ ...order, youth: order.youth + 1 })}/>

    <Input
      name={userLanguage ? 'Child' : 'Laps'}
      person={order.children}
      reduce={() => order.children === 0 || order.children < 0
        ? setOrder({ ...order, children: 0 })
        : setOrder({ ...order, children: order.children - 1 })}
      add={() => setOrder({ ...order, children: order.children + 1 })}/>
  </Fragment>
}
