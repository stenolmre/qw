import React, { Fragment, useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default function Cart({ adventure }) {
  const [radio, setRadio] = useState(false)
  const [orderData, setOrderData] = useState({ title: '', adults: 1, children: 0, date: '', time: null })
  const { adults, children, date, time, price } = orderData
  const [error, setError] = useState('')

  const array = [
    '2020-12-2', '2020-12-4', '2020-12-6', '2021-1-2', '2021-1-7'
  ]
  const days = () => array.map(date => new Date(date))

  useEffect(() => {
    setOrderData({ ...orderData, date: new Date(array[0]) })
  }, [])

  function onChange(e) {
    setOrderData({ ...orderData, [e.target.name]: e.target.value })
  }

  function onClick() {
    console.log(orderData);
  }

  const adultFee = adventure.price / 100
  const childFee = Math.ceil(adultFee * 0.7)
  const totalPrice = ((adultFee * adults) + (childFee * children)).toFixed(2)

  return <div className="adventure-cart-container" id="cart">
    <div className="adventure-cart">
      <h3>Prices:</h3>
      <table>
        <tbody>
          <tr>
            <td>Adult:</td>
            <td><strong>{(adultFee).toFixed(2)}</strong> €</td>
          </tr>
          <tr>
            <td>Child (6-11):</td>
            <td><strong>{(childFee).toFixed(2)}</strong> €</td>
          </tr>
        </tbody>
      </table>
      <hr/>
      <h3>Book an adventure:</h3>
      <label className="adventure-cart-label">Adults:</label>
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
      <br/>
      <label className="adventure-cart-label">Children:</label>
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
      <br/>
      <DatePicker dateFormat="dd/MM/yyyy" selected={orderData.date} onChange={date => setOrderData({ ...orderData, date: date })} includeDates={days()} />

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
      <h4>Price: { totalPrice } €</h4>
      <button className="adventure-cart-button" disabled={price < 1} onClick={onClick}>Buy Now</button>
      <br/>
      <p style={{ color: 'red', fontWeight: '600', marginTop: '30px' }}>{ error }</p>
    </div>
  </div>
}


// function onClick() {
//   const day = new Date(date).getUTCDay()
//
//   if (time === null) {
//     setError('Please choose the preferred time of the event.')
//
//     setTimeout(() => {
//       setError('')
//     }, 5000)
//
//     return
//   }
//
//   if (date === '') {
//     setError('Please choose the preferred date of the event.')
//
//     setTimeout(() => {
//       setError('')
//     }, 5000)
//
//     return
//   }
//
//   Cookies.set('order', orderData)
//
//   router.push('/checkout')
// }
