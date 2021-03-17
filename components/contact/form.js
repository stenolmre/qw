import React, { useState } from 'react'

import validateEmail from '@/utils/validateemail'

import { useContactDispatch } from '@/context/contact'
import { sendMessage } from '@/actions/contact'

const Form = ({ user_lang }) => {
  const dispatchContact = useContactDispatch()

  const [data, setData] = useState({ email: '', message: '' })
  const { email, message } = data
  const onChange = e => setData({ ...data, [e.target.name]: e.target.value })

  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState({ err: false, email_err_eng: '', email_err_est: '', message_err_eng: '', message_err_est: '' })

  const sendNewMessage = () => {
    setProcessing(true)
    sendMessage(dispatchContact, data, () => {
      setSuccess(true)
      setError({ err: false, email_err_eng: '', email_err_est: '', message_err_eng: '', message_err_est: '' })
      setData({ email: '', message: '' })
    }, () => {
      if (!validateEmail(email) && message === '') {
        setError({ err: true, email_err_eng: 'Valid email is required.', email_err_est: 'Palun lisage korrektne email.', message_err_eng: 'Please add message.', message_err_est: 'Palun lisage sõnum.' })
      } else if (!validateEmail(email)) {
        setError({ err: true, email_err_eng: 'Valid email is required.', email_err_est: 'Palun lisage korrektne email.', message_err_eng: '', message_err_est: '' })
      } else if (message === '') {
        setError({ err: true, email_err_eng: '', email_err_est: '', message_err_eng: 'Please add message.', message_err_est: 'Palun lisage sõnum.' })
      } else {
        setError({ err: false, email_err_eng: '', email_err_est: '', message_err_eng: '', message_err_est: '' })
      }
    })
    setProcessing(false)
  }

  return <div className="contact_form">
    <label>Email <span style={{ color: 'red' }}>*</span></label>
    <input name="email" value={data.email} onChange={onChange} autoComplete="false"/>
    <p className="form_error">{error.err && user_lang ? error.email_err_eng : error.email_err_est}</p>
    <label>{user_lang ? 'Message' : 'Sõnum'} <span style={{ color: 'red' }}>*</span></label>
    <textarea name="message" value={data.message} onChange={onChange} autoComplete="false"/>
    <p className="form_error">{error.err && user_lang ? error.message_err_eng : error.message_err_est}</p>
    <button disabled={processing} onClick={sendNewMessage}>{user_lang ? processing ? 'Sending..' : 'Send' : processing ? 'Saadan..' : 'Saada'}</button>
    {success && <p style={{ color: '#00b100' }}>{user_lang ? 'Your message is successfully sent. Thank you!' : 'Teie sõnum on edukalt meieni jõudnud. Aitäh!'}</p>}
  </div>
}

export default Form
