import React, { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Order from './../components/payment/order'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.STRIPE_PK_TEST)

// export async function getServerSideProps() {
//   const stripe = new Stripe(process.env.STRIPE_SK_TEST)
//
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: 1000,
//     currency: 'usd'
//   })
//
//   return { props: { paymentIntent } }
// }

function Checkout() {
  return <Fragment>
    <Head>
      <title>qw - adventure</title>
    </Head>
    <Order/>
  </Fragment>
}

export default Checkout
