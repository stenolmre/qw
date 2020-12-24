import React, { Fragment, useState } from 'react'
import Cookies from 'js-cookie'

export default function Form() {
  const [error, setError] = useState({ email: null, message: null })
  const [success, setSuccess] = useState('')
  const [data, setData] = useState({ email: '', message: '' })
  const { email, message } = data
  const userLanguage = Cookies.get('lan') === 'eng'

  const onChange = e => setData({ ...data, [e.target.name]: e.target.value })

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function sendMessage(e) {
    e.preventDefault()

    if (validateEmail(email) && message !== '') {
      console.log(data)

      setError({ email: null, message: null })
      setData({ email: '', message: '' })
      setSuccess(userLanguage ? 'Thanks for your message! We make sure to get back to your during the day.' : 'Aitäh sõnumi eest. Me teeme endast oleneva, et saaksime teile tagasi kirjutada päeva jooksul.')

    } else if (!validateEmail(email) && message === '') {
      setError({ email: userLanguage ? 'Please enter valid email.' : 'Palun sisestage korrektne emaili aadress.', message: userLanguage ? 'Message is empty.' : 'Sõnumi väli on tühi.' })
    } else if (!validateEmail(email)) {
      setError({ email: userLanguage ? 'Please enter valid email.' : 'Palun sisestage korrektne emaili aadress.' })
    } else if (message === '') {
      setError({ message: userLanguage ? 'Message is empty.' : 'Sõnumi väli on tühi.' })
    } else {
      setError({ message: userLanguage ? 'Oops. Something went wrong. Please try again. We apologize for your inconvenience' : 'Oops. Midagi on läinud valesti. Palun proovige uuesti kiri teele saata. Vabandame ebameeldivuste pärast.' })
    }
  }

  return <Fragment>
    <form className="mobile-contact-form" onSubmit={sendMessage}>
      <label>Email<span>*</span></label>
      <input type="text" name="email" value={email} onChange={onChange}/>
      <p>{error.email}</p>
      <label>{userLanguage ? 'Please type your message here.' : 'Kirjuta oma küsimused, soovid või tagasiside siia ning me vastame Sulle esimesel võimalusel.'}<span>*</span></label>
      <textarea name="message" value={message} onChange={onChange}/>
      <p>{error.message}</p>
      <button>{userLanguage ? 'Send' : 'Saada'}</button>
    </form>
    <p style={{ color: '#00b100', fontWeight: '600', margin: '25px 0 0 0' }}>{success}</p>
  </Fragment>
}


// async function send(e) {
//   e.preventDefault()
//
//   const templateParams = {
//     client_name: name,
//     client_email: email,
//     client_message: textarea
//   }
//
//   if (!name || !email || ! textarea) {
//     userLanguage ? setError('Please fill all fields with valid information.') : setError('Palun sisestage korrektne info kõikidesse väljadesse.')
//
//     setTimeout(() => {
//       setError(null)
//     }, 5000)
//
//     return
//   }
//
//   try {
//     await emailjs.send('gmail', 'northseason', templateParams, 'user_d35Shv7J12m9DhmwjDmiA')
//
//     setSuccess(true)
//     setFormData({ name: '', email: '', textarea: ''})
//   } catch {
//     console.log('Error');
//   }
// }
