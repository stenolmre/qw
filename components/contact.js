import { useState } from 'react'
import Heading from './heading'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', textarea: ''})
  const { name, email, textarea } = formData

  function onChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function send(e) {
    e.preventDefault()
    console.log(formData);
  }
  return <div className="mobile-contact">
    <Heading name="contact"/>
    <div className="contact-info">
      <a href="tel:37253461027">tel: <span>+372 5346 1027</span></a><br/>
      <a href="mailto:stenolmre@icloud.com">email: <span>stenolmre@icloud.com</span></a><br/>
      <a href="">location: <span>Levi, Lapland</span></a>
    </div>
    <Heading name="location"/>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362.71851578978425!2d24.80773896521732!3d67.80406628103867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45d24d51b880851b%3A0x9e1d3e75ebfb4e6f!2sOy%20Levi%20Ski%20Resort!5e0!3m2!1sen!2sfi!4v1603366555120!5m2!1sen!2sfi" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
    <br/><br/>
    <Heading name="write to us"/>
    <form className="contact-form">
      <input type="text" name="name" value={name} onChange={onChange} placeholder="Name" />
      <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" />
      <textarea name="textarea" value={textarea} onChange={onChange} placeholder="Please write your questions, recommendations or requests here and we will get back to you during the day." /><br/>
      <button onClick={send}>Send</button>
    </form>
  </div>
}
