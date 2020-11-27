import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import emailjs from 'emailjs-com'
import Heading from './utils/heading'
import SuccessIcon from './utils/successicon'

export default function Contact() {
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [text, setText] = useState({ name: '', textarea: '' })
  const [formData, setFormData] = useState({ name: '', email: '', textarea: ''})
  const { name, email, textarea } = formData
  const userLanguage = Cookies.get('lan') === 'eng'

  useEffect(() => {
    if (userLanguage) {
      setText({ name: 'Name', textarea: 'Please write your questions, recommendations or requests here and we will get back to you during the day.' })
    } else {
      setText({ name: 'Nimi', textarea: 'Kirjuta oma küsimused, soovid või tagasiside siia ning me vastame Sulle esimesel võimalusel.' })
    }
  }, [])

  function onChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function send(e) {
    e.preventDefault()

    const templateParams = {
      client_name: name,
      client_email: email,
      client_message: textarea
    }

    if (!name || !email || ! textarea) {
      userLanguage ? setError('Please fill all fields with valid information.') : setError('Palun sisestage korrektne info kõikidesse väljadesse.')

      setTimeout(() => {
        setError(null)
      }, 5000)

      return
    }

    try {
      await emailjs.send('gmail', 'northseason', templateParams, 'user_d35Shv7J12m9DhmwjDmiA')

      setSuccess(true)
      setFormData({ name: '', email: '', textarea: ''})

      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    } catch {
      console.log('Error');
    }
  }
  return <div className="contact-container">
    <div className="contact">
      <Heading name={userLanguage ? 'contact' : 'kontakt'}/>
      <div className="contact-info">
        <p><a href="tel:37258553625"><i className="fas fa-phone"/> +372 5855 3625</a></p>
        <p><a href="mailto:stenolmre@icloud.com"><i className="fas fa-envelope"/> stenolmre@icloud.com</a></p>
        <p><i className="fas fa-map-pin"/> Levi, Lapland</p>
      </div>
      <Heading name={userLanguage ? 'write to us' : 'kirjuta meile'}/>
      {
        !success
          ? <form className="contact-form">
              <input type="text" name="name" value={name} onChange={onChange} placeholder={text.name}/>
              <input type="email" name="email" value={email} onChange={onChange} placeholder="Email"/>
              <textarea name="textarea" value={textarea} onChange={onChange} placeholder={text.textarea}/><br/>
              <button onClick={send}>{userLanguage ? 'Send' : 'Saada'}</button>
              <p>{error}</p>
            </form>
          : <div className="contact-form-successicon">
              <SuccessIcon/>
              <h4>{userLanguage ? 'Thank You!' : 'Suur Aitäh!'}</h4>
            </div>
      }
    </div>
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362.71851578978425!2d24.80773896521732!3d67.80406628103867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45d24d51b880851b%3A0x9e1d3e75ebfb4e6f!2sOy%20Levi%20Ski%20Resort!5e0!3m2!1sen!2sfi!4v1603366555120!5m2!1sen!2sfi" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
    </div>
  </div>
}
