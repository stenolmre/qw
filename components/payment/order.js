import { Fragment, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Head from 'next/head'
import Link from 'next/link'
import Container from './../container'
import OrderDetails from './orderdetails'
import CheckoutForm from './checkoutform'
import PaymentAccepted from './paymentaccepted'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { useAdventureState, useAdventureDispatch } from './../../context/adventure'
import { getAdventure } from './../../actions/adventure'

const stripePromise = loadStripe(`${process.env.STRIPE_PK_TEST}`)

function Order({ success }) {
  const dispatchAdventure = useAdventureDispatch()
  const adventureState = useAdventureState()
  const [orderData, setOrderData] = useState({ adults: 1, children: 0, date: '', time: '' })
  const { adults, children, date, time, price } = orderData
  const [payment, setPayment] = useState('processing')
  const userLanguage = Cookies.get('lan') === 'eng'

  const order = Cookies.get('order') ? JSON.parse(Cookies.get('order')) : null
  const eventDate = order && new Date(order.day).toLocaleDateString()
  const id = order && `${order.id}`

  useEffect(() => {
    getAdventure(dispatchAdventure, id)
  }, [dispatchAdventure, id])

  if (payment === 'success') {
    return <PaymentAccepted/>
  }

  return <Fragment>
    <Head>
      <title>qw - order</title>
    </Head>
    <Container>
      <div className="order-container">
        <OrderDetails order={order} userLanguage={userLanguage}/>
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
