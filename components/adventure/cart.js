import React, { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import Cookies from 'js-cookie'

export default function Cart({ adventure }) {
  const [radio, setRadio] = useState(false)
  const [orderData, setOrderData] = useState({ id: '', adults: 1, youth: 0, children: 0, day: null, time: null, totalPrice: totalPrice })
  const { adults, youth, children, day, time, price } = orderData
  const [error, setError] = useState('')
  const router = useRouter()
  const userLanguage = Cookies.get('lan') === 'eng'

  const adultFee = (adventure.prices[0].price / 100).toFixed(2)
  const youthFee = (adventure.prices[1].price / 100).toFixed(2)
  const childFee = (adventure.prices[2].price / 100).toFixed(2)
  const totalPrice = ((adultFee * adults) + (youthFee * youth) + (childFee * children)).toFixed(2)

  useEffect(() => {
    setOrderData({ ...orderData, id: adventure._id })
  }, [])

  const onChange = e => setOrderData({ ...orderData, [e.target.name]: e.target.value })

  function onClick() {
    if (time === null) {
      userLanguage
        ? setError('Please choose the preferred time of the event.')
        : setError('Palun valige elamusmatka toimumise kellaaeg.')

      setTimeout(() => {
        setError('')
      }, 5000)

      return
    }

    if (day === '' || day === undefined) {
      userLanguage
        ? setError('Please choose the preferred date of the event.')
        : setError('Palun valige kalendrist kuupäev.')

      setTimeout(() => {
        setError('')
      }, 5000)

      return
    }

    if (totalPrice > 1) {
      Cookies.set('order', orderData)

      router.push('/checkout')
    } else {
      userLanguage
        ? setError('You haven\'t chosed any tickets.')
        : setError('Palun valige endale pilet enne kassasse siirdumist.')

      setTimeout(() => {
        setError('')
      }, 5000)
    }
  }

  return <div className="adventure-cart-container">
    <div className="adventure-cart">
      <h4>{userLanguage ? 'Prices' : 'Hinnakiri'}</h4>
      <div className="adventure-cart-prices">
        <p>{userLanguage ? 'Adult' : 'Täiskasvanu'}</p>
        <p>{adultFee} €</p>
      </div>
      <div className="adventure-cart-prices">
        <p>{userLanguage ? 'Youth' : 'Nooruk'} (12-18)</p>
        <p>{youthFee} €</p>
      </div>
      <div className="adventure-cart-prices">
        <p>{userLanguage ? 'Child' : 'Laps'} (6-11)</p>
        <p>{childFee} €</p>
      </div>

      <h4>{userLanguage ? 'Book an adventure' : 'Osta Elamusmatk'}</h4>
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
        <label className="adventure-cart-label">{userLanguage ? 'Youth' : 'Nooruk'}</label>
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
        <label className="adventure-cart-label">{userLanguage ? 'Date' : 'Kuupäev'}*</label>
        <DatePicker minDate={new Date()} dateFormat="dd/MM/yyyy" selected={orderData.day} onChange={date => setOrderData({ ...orderData, day: date })} includeDates={adventure.availability.days.map(x => new Date(x))}/>
      </div>

      <div className="cart-input-container">
        <label className="adventure-cart-label">{userLanguage ? 'Time' : 'Kellaaeg'}*</label>
        <div className="booking-times">
          {
            adventure.availability.time.length === 1
              ? <p style={{ paddingRight: '5px' }}>{adventure.availability.time[0]}</p>
              : adventure.availability.time.map(clock => {
                return <Fragment key={clock}>
                  <input type="radio" id={clock} name="time" value={clock} onClick={() => setOrderData({ ...orderData, time: clock })} required/>
                  <label style={ time === clock ? { background: 'rgba(33, 33, 33)', color: 'white' } : null } className="booking-time" htmlFor={clock}>{clock}</label>
                </Fragment>
              })
          }
        </div>
      </div>

      <br/>
      <small>* {userLanguage ? 'If your preferred date or time is different than what is offered, then please contact us and we try to find the best solution for you.' : 'Kui meie poolt pakutud kuupäev või kellaaeg ei kattu sinu omaga, siis palun võta ühendust meiega ja leiame parima lahenduse.'}</small>

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
