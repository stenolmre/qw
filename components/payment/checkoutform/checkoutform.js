import React from 'react'
import cookies from 'next-cookies'

function CheckoutForm({ paymentIntent }) {
  return (
    <pre>{paymentIntent}</pre>
  )
}

const getInitialProps = async ctx => {
  const stripe = new Stripe(`${process.env.STRIPE_SK_TEST}`)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: "eur"
  })

  console.log(paymentIntent);

  return { paymentIntent }
}

export default CheckoutForm
