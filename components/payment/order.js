import React, { Fragment, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import DesktopLayout from './../desktop/layout'
import AdventureSidebar from './../desktop/sidebars/adventuresidebar'
import OrderDetails from './orderdetails'
import CheckoutForm from './checkoutform'
import PaymentAccepted from './paymentaccepted'
import { useAdventureState, useAdventureDispatch } from './../../context/adventure'
import { getAdventure } from './../../actions/adventure'

const stripePromise = loadStripe(`${process.env.STRIPE_PK_TEST}`)

export default function Order() {
  const dispatchAdventure = useAdventureDispatch()
  const { adventure, loading } = useAdventureState()
  const [payment, setPayment] = useState('processing')
  const user_lang = Cookies.get('lan') === 'eng' ? true : false

  const order = Cookies.get('cus_order') ? JSON.parse(Cookies.get('cus_order')) : null
  const id = order && order.id

  useEffect(() => { getAdventure(dispatchAdventure, id) }, [dispatchAdventure, id])

  const amount = order && adventure && (order.adult * adventure.prices[0].price + order.youth * adventure.prices[1].price + order.child * adventure.prices[2].price)

  return <DesktopLayout sidebar={<AdventureSidebar/>}>
    {
      payment !== 'success'
        ? <PaymentAccepted adventure={adventure} loading={loading}/>
        : <div className="desktop-checkout-page">
          <OrderDetails userLanguage={user_lang} adventure={adventure} loading={loading} order={order}/>
          <h2>{user_lang ? 'Checkout' : 'Kassa'}</h2>
          <Elements stripe={stripePromise}>
            <CheckoutForm userLanguage={user_lang} amount={amount} description={adventure && adventure.title} success={() => setPayment('success')}/>
          </Elements>
        </div>
    }
  </DesktopLayout>
}
