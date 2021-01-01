import { Fragment, useState } from 'react'
import axios from 'axios'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

export default function CheckoutForm({ amount, success, description, userLanguage }) {
  const [paymentData, setPaymentData] = useState({ name: '', email: '' })
  const { name, email } = paymentData
  const [error, setError] = useState('')
  const [isProcessing, setProcessingTo] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const onChange = e => setPaymentData({ ...paymentData, [e.target.name]: e.target.value })

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
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

        console.log(data);

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
    <h5>{userLanguage ? 'Billing Information' : 'Kliendi Info'}</h5>
    <label>{userLanguage ? 'Full Name' : 'Ees- ja Perekonnanimi'}</label><br/>
    <input type="text" name="name" value={name} onChange={onChange}/><br/>
    <label>Email</label><br/>
    <input type="text" name="email" value={email} onChange={onChange}/><br/>
    <h5>{userLanguage ? 'Payment Information' : 'Makse Info'}</h5>
    <label>{userLanguage ? 'Card Info' : 'Kaardi Andmed'}</label><br/>
    <div className="desktop-checkout-card-form">
      <CardElement options={CARD_ELEMENT_OPTIONS}/>
    </div>
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
        color: 'rgba(33, 33, 33, .8)',
      }
    },
    invalid: {
      color: '#ff4500',
      iconColor: '#ff4500'
    }
  },
  hidePostalCode: true
};
