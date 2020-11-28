import { Fragment, useState } from 'react'
import axios from 'axios'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

export default function CheckoutForm({ amount, success, description }) {
  const [paymentData, setPaymentData] = useState({ name: '', email: '' })
  const { name, email } = paymentData
  const [error, setError] = useState('')
  const [isProcessing, setProcessingTo] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  function onChange(e) {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value })
  }

  async function payFor(e) {
    e.preventDefault()
    setProcessingTo(true)

    const billingDetails = { name, email }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: billingDetails
    });

    if (!error) {
      const { id } = paymentMethod

      try {
        const { data } = await axios.post('/api/charge', {
          id,
          amount: amount,
          email,
          description: description
        })

        success()
      } catch (err) {
        setProcessingTo(false)
        setError(err.response.data.msg);
      }
    } else {
      setProcessingTo(false)
      setError(error.msg)
    }
  }

  return <Fragment>
    <h3>billing information</h3>
    <input type="text" name="name" value={name} placeholder="Full Name" onChange={onChange}/>
    <input type="email" name="email" value={email} placeholder="Email" onChange={onChange}/>
    <h3>payment information</h3>
    <CardElement options={CARD_ELEMENT_OPTIONS}/>
    <button onClick={payFor} disabled={isProcessing || !stripe}>
      {
        isProcessing
          ? 'Processing..'
          : 'Pay Now'
      }
    </button>
    { error }
  </Fragment>
}

export const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: 'black',
      fontSmoothing: 'antialiased',
      fontSize: '14px',
      '::placeholder': {
        color: 'rgba(33, 33, 33, .8)'
      }
    },
    invalid: {
      color: '#ff4500',
      iconColor: '#ff4500'
    }
  },
  hidePostalCode: true
};
