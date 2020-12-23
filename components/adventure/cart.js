import React, { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import Prices from './cart/prices'
import AddPeople from './cart/addpeople'
import DateTime from './cart/datetime'

export default function Cart({ adventure }) {
  const userLanguage = Cookies.get('lan') === 'eng'
  const router = useRouter()

  const [order, setOrder] = useState({
    id: '', adults: 1, youth: 0, children: 0, day: null, time: null
  })
  const [error, setError] = useState('')
  const [processing, setProcessing] = useState(false)


  const calculateFee = num => (adventure.prices[num].price / 100).toFixed(2)
  const totalPrice = ((calculateFee(0) * order.adults) + (calculateFee(1) * order.youth) + (calculateFee(2) * order.children)).toFixed(2)

  useEffect(() => { setOrder({ ...order, id: adventure._id }) }, [])

  function Input({ name, person, reduce, add }) {
    return <Fragment>
      <label className="adventure-cart-label">{name}</label>
      <div className="cart-inputs">
        <span
          onClick={reduce}>-</span>
        <input disabled type="number" min="0" value={person} name={person} onChange={onChange}/>
        <span onClick={add}>+</span>
      </div>
    </Fragment>
  }

  return <div className="adventure-cart-container">
    <div className="adventure-cart">
      <Prices userLanguage={userLanguage} adult={calculateFee(0)} youth={calculateFee(1)} child={calculateFee(2)}/>
      <h4>{userLanguage ? 'Book an adventure' : 'Osta Elamusmatk'}</h4>
      <AddPeople userLanguage={userLanguage} order={order} setOrder={setOrder} />
      <DateTime userLanguage={userLanguage} adventure={adventure} order={order} setOrder={setOrder}/>

      <div className="cart-input-container" style={{margin: '30px 0 0 0'}}>
        <h4>{userLanguage ? 'Total Price' : 'Hind Kokku'}</h4>
        <h4>{totalPrice} €</h4>
      </div>

      <div className="cart-display-right">
        <button className="adventure-cart-button" disabled={totalPrice < 1 || processing} onClick={() => console.log(order)}>{userLanguage ? 'Checkout' : 'Kassa'}</button>
      </div>
      <p style={{ color: 'red', fontWeight: '600', marginTop: '30px' }}>{ error }</p>
    </div>
  </div>
}


// function onClick() {
//   if (time === null) {
//     userLanguage
//       ? setError('Please choose the preferred time of the event.')
//       : setError('Palun valige elamusmatka toimumise kellaaeg.')
//
//     setTimeout(() => {
//       setError('')
//     }, 5000)
//
//     return
//   }
//
//   if (day === '' || day === undefined) {
//     userLanguage
//       ? setError('Please choose the preferred date of the event.')
//       : setError('Palun valige kalendrist kuupäev.')
//
//     setTimeout(() => {
//       setError('')
//     }, 5000)
//
//     return
//   }
//
//   if (totalPrice > 1) {
//     Cookies.set('order', order)
//
//     router.push('/checkout')
//   } else {
//     userLanguage
//       ? setError('You haven\'t chosed any tickets.')
//       : setError('Palun valige endale pilet enne kassasse siirdumist.')
//
//     setTimeout(() => {
//       setError('')
//     }, 5000)
//   }
// }
