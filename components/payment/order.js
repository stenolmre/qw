import { Fragment, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Head from 'next/head'
import Link from 'next/link'
import Container from './../container'
import CheckoutForm from './checkoutform'
import PaymentAccepted from './paymentaccepted'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(`${process.env.STRIPE_PK_TEST}`)

function Order({ success }) {
  const [orderData, setOrderData] = useState({ adults: 1, children: 0, date: '', time: '' })
  const { adults, children, date, time, price } = orderData
  const [payment, setPayment] = useState('processing')

  const order = Cookies.get('order') ? JSON.parse(Cookies.get('order')) : null
  const eventDate = order && `${order.date.slice(8, 10)}.${order.date.slice(5, 7)}.${order.date.slice(0, 4)}`

  if (payment === 'success') {
    return <PaymentAccepted/>
  }

  return <Fragment>
    <Head>
      <title>qw - order</title>
    </Head>
    <Container>
      <div className="order-container">
        <div className="order">
          <div className="order-header">
            <h2>YOUR ORDER</h2>
            <img src="northseason.png" alt="northseason"/>
          </div>
          <h3>{order && order.title}</h3>
          <table>
            {
              order && <tbody>
                <tr>
                  <td>Adults: </td>
                  <td>{order.adults} x {(order.adultFee / 100).toFixed(2)}€</td>
                </tr>
                <tr>
                  <td>Children: </td>
                  <td>{order.children} x {Math.ceil((order.childFee / 100)).toFixed(2)}€</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Date: </td>
                  <td>{eventDate}</td>
                </tr>
                <tr>
                  <td>Time: </td>
                  <td>{order.time}</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Tax:</td>
                  <td>No additional Tax</td>
                </tr>
                <tr>
                  <td>Total Price: </td>
                  <td><strong>{order.price}€</strong></td>
                </tr>
              </tbody>
            }
          </table>
        </div>
        <br/>
        <div className="order">
          <Elements stripe={stripePromise}>
            <CheckoutForm amount={order && Math.floor(order.price * 100)} description={order && order.title} success={() => setPayment('success')}/>
          </Elements>
        </div>
      </div>
    </Container>
  </Fragment>
}

export default Order
