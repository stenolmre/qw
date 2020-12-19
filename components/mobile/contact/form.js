import React, { Fragment, useState } from 'react'

export default function Form() {
  const [response, setResponse] = useState({ message: null, color: null })
  const [data, setData] = useState({ email: '', message: '' })
  const { email, message } = data

  const onChange = e => setData({ ...data, [e.target.name]: e.target.value })

  function sendMessage(e) {
    e.preventDefault()

    if (email !== '' && message !== '') {
      console.log(data)

      setData({ email: '', message: '' })
      setResponse({ message: 'Thanks for your message! We make sure to get back to your during the day.', color: '#00b100' })

      setTimeout(() => {
        setResponse({ message: null, color: null })
      }, 9000)
    } else if (email === '') {
      setResponse({ message: 'Please enter valid email.', color: '#ff4500' })
    } else if (message === '') {
      setResponse({ message: 'Message is empty.', color: '#ff4500' })
    } else {
      setResponse({ message: 'Oops. Something went wrong. Please try again.', color: '#ff4500' })
    }
  }

  return <Fragment>
    <form onSubmit={sendMessage}>
      <input type="email" name="email" value={email} onChange={onChange} placeholder="Please enter your email."/>
      <textarea name="message" value={message} onChange={onChange} placeholder="Please type your message here."/>
      <button>Send</button>
    </form>
    <p style={{ color: response.color, fontWeight: '600' }} className="mobile-contact-page-form-response">
      { response.message }
    </p>
  </Fragment>
}
