import { useState } from 'react'
import Cookies from 'js-cookie'
import Heading from './heading'
import SuccessIcon from './successicon'

export default function Contact() {
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', textarea: ''})
  const { name, email, textarea } = formData
  const userLanguage = Cookies.get('lan') === 'eng'

  function onChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function send(e) {
    e.preventDefault()
    console.log(formData);
    setSuccess(true)

    setFormData({ name: '', email: '', textarea: ''})

    setTimeout(() => {
      setSuccess(false)
    }, 5000)
  }
  return <div className="mobile-contact">
    <Heading name={userLanguage ? 'contact' : 'kontakt'}/>
    <div className="contact-info">
      <a href="tel:37253461027">tel: <span>+372 5346 1027</span></a><br/>
      <a href="mailto:stenolmre@icloud.com">email: <span>stenolmre@icloud.com</span></a><br/>
      <a href="">{userLanguage ? 'location' : 'asukoht'}: <span>Levi, Lapland</span></a>
    </div>
    <Heading name={userLanguage ? 'location' : 'asukoht'}/>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362.71851578978425!2d24.80773896521732!3d67.80406628103867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45d24d51b880851b%3A0x9e1d3e75ebfb4e6f!2sOy%20Levi%20Ski%20Resort!5e0!3m2!1sen!2sfi!4v1603366555120!5m2!1sen!2sfi" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
    <br/><br/>
    <Heading name={userLanguage ? 'write to us' : 'kirjuta meile'}/>
    {
      !success
        ? <form className="contact-form">
            <label>{userLanguage ? 'Name' : 'Nimi'}</label>
            <input type="text" name="name" value={name} onChange={onChange} />
            <label>Email</label>
            <input type="email" name="email" value={email} onChange={onChange} />
            <label>{userLanguage ? 'Please write your questions, recommendations or requests here and we will get back to you during the day.' : 'Kirjuta oma küsimused, soovitused, ettepanekud ja/või tagasiside siia ning me vastame Teile esimesel võimalusel.'}</label>
            <textarea name="textarea" value={textarea} onChange={onChange}/><br/>
            <button onClick={send}>{userLanguage ? 'Send' : 'Saada'}</button>
          </form>
        : <div className="contact-form-successicon">
            <SuccessIcon/>
            <h4>{userLanguage ? 'Thank You!' : 'Suur Aitäh!'}</h4>
          </div>
    }

  </div>
}
