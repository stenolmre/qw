import React, { Fragment } from 'react'
import Cookies from 'js-cookie'

export default function PersonalInfo({ personalData, setPersonalData }) {
  const user_lang = Cookies.get('lan') === 'eng' ? true : false

  const onChange = e => setPersonalData({ ...personalData, [e.target.name]: e.target.value })

  return <Fragment>
    <h5>{user_lang ? 'Billing Information' : 'Kliendi Info'}</h5>
    <label>{user_lang ? 'Full Name' : 'Ees- ja Perekonnanimi'}</label><br/>
    <input type="text" name="name" value={personalData.name} onChange={onChange}/><br/>
    <label>Email</label><br/>
    <input type="text" name="email" value={personalData.email} onChange={onChange}/><br/>
  </Fragment>
}
