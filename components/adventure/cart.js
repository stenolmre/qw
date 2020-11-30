import React, { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import Cookies from 'js-cookie'

export default function Cart({ adventure }) {
  const [radio, setRadio] = useState(false)
  const [orderData, setOrderData] = useState({ id: '', adults: 1, youth: 0, children: 0, day: null, time: null })
  const { adults, youth, children, date, time, price } = orderData
  const [error, setError] = useState('')
  const router = useRouter()
  const userLanguage = Cookies.get('lan') === 'eng'

  useEffect(() => {
    setOrderData({ ...orderData, id: adventure._id })
  }, [])

  function onChange(e) {
    setOrderData({ ...orderData, [e.target.name]: e.target.value })
  }

  function onClick() {
    // if (time === null) {
    //   setError('Please choose the preferred time of the event.')
    //
    //   setTimeout(() => {
    //     setError('')
    //   }, 5000)
    //
    //   return
    // }
    //
    // if (date === '' || date === undefined) {
    //   setError('Please choose the preferred date of the event.')
    //
    //   setTimeout(() => {
    //     setError('')
    //   }, 5000)
    //
    //   return
    //
    // Cookies.set('order', orderData)
    //
    // router.push('/checkout')
    console.log(orderData)
    Cookies.set('order', orderData)
  }

  const order = Cookies.get('order') ? JSON.parse(Cookies.get('order')) : null

  const adultFee = (adventure.prices[0].price / 100).toFixed(2)
  const youthFee = (adventure.prices[1].price / 100).toFixed(2)
  const childFee = (adventure.prices[2].price / 100).toFixed(2)
  const totalPrice = ((adultFee * adults) + (youthFee * youth) + (childFee * children)).toFixed(2)

  return <div className="adventure-cart-container" id="cart">
    <div className="adventure-cart">
      <h3>{userLanguage ? 'Prices' : 'Hinnakiri'}</h3>
      <table>
        <tbody>
          <tr>
            <td>{userLanguage ? 'Adult' : 'Täiskasvanu'}</td>
            <td><strong>{adultFee}</strong> €</td>
          </tr>
          <tr>
            <td>{userLanguage ? 'Youth' : 'Teismeline'} (12-18)</td>
            <td><strong>{youthFee}</strong> €</td>
          </tr>
          <tr>
            <td>{userLanguage ? 'Child' : 'Laps'} (6-11)</td>
            <td><strong>{childFee}</strong> €</td>
          </tr>
        </tbody>
      </table>
      <hr/>
      <p>{order.day}</p>
      <h3>{userLanguage ? 'Book an adventure' : 'Osta Elamusmatk'}</h3>

      <div className="cart-input-container">
        <label className="adventure-cart-label">{userLanguage ? 'Adult' : 'Täiskasvanu'}</label>
        <div className="cart-inputs">
          <span
            onClick={() => {
              if (adults === 0 || adults < 0) {
                setOrderData({ ...orderData, adults: 0 })
              } else {
                setOrderData({ ...orderData, adults: adults - 1 })
              }
            }}>-</span>
          <input type="number" min="0" value={adults} name="adults" onChange={onChange}/>
          <span onClick={() => setOrderData({ ...orderData, adults: adults + 1 })}>+</span>
        </div>
      </div>

      <div className="cart-input-container">
        <label className="adventure-cart-label">{userLanguage ? 'Youth' : 'Teismeline'}</label>
        <div className="cart-inputs">
          <span
            onClick={() => {
              if (youth === 0 || youth < 0) {
                setOrderData({ ...orderData, youth: 0 })
              } else {
                setOrderData({ ...orderData, youth: youth - 1 })
              }
            }}>-</span>
          <input type="number" min="0" value={youth} name="youth" onChange={onChange}/>
          <span onClick={() => setOrderData({ ...orderData, youth: youth + 1 })}>+</span>
        </div>
      </div>

      <div className="cart-input-container">
        <label className="adventure-cart-label">{userLanguage ? 'Child' : 'Laps'}</label>
        <div className="cart-inputs">
          <span
            onClick={() => {
              if (children === 0 || children < 0) {
                setOrderData({ ...orderData, children: 0 })
              } else {
                setOrderData({ ...orderData, children: children - 1 })
              }
            }}>-</span>
          <input type="number" min="0" value={children} name="children" onChange={onChange}/>
          <span onClick={() => setOrderData({ ...orderData, children: children + 1 })}>+</span>
        </div>
      </div>

      <div className="cart-input-container" style={{margin: '30px 0 0 0'}}>
        <label className="adventure-cart-label">{userLanguage ? 'Date' : 'Kuupäev'}</label>
        <DatePicker dateFormat="dd/MM/yyyy" selected={orderData.day} onChange={date => setOrderData({ ...orderData, day: date })} includeDates={adventure.availability.days.map(date => new Date(date))} />
      </div>

      <div className="cart-input-container">
        <label className="adventure-cart-label">{userLanguage ? 'Time' : 'Kellaaeg'}</label>
        <div className="booking-times">
          {
            adventure.availability.time.map(clock => {
              return <Fragment key={clock}>
                <input type="radio" id={clock} name="time" value={clock} onClick={() => setOrderData({ ...orderData, time: clock })} required/>
                <label style={ time === clock ? { background: 'rgba(33, 33, 33)', color: 'white' } : null } className="booking-time" htmlFor={clock}>{clock}</label>
              </Fragment>
            })
          }
        </div>
      </div>

      <div className="cart-input-container" style={{margin: '30px 0 0 0'}}>
        <h4>{userLanguage ? 'Total Price' : 'Hind Kokku'}</h4>
        <h4>{ totalPrice } €</h4>
      </div>

      <div className="cart-display-right">
        <button className="adventure-cart-button" disabled={price < 1} onClick={onClick}>{userLanguage ? 'Checkout' : 'Kassa'}</button>
      </div>
      <p style={{ color: 'red', fontWeight: '600', marginTop: '30px' }}>{ error }</p>
    </div>
  </div>
}

//   const day = new Date(date).getUTCDay()
