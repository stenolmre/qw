import React from 'react'
import Link from 'next/link'
import Info from './../contact/info'
import Form from './../contact/form'

export default function MobileContact({ userLanguage }) {
  return <div className="mobile-contact">
    <div className="mobile-landing-heading">
      <h2>{userLanguage ? 'Contact with us' : 'Võta meiega ühendust'}</h2>
      <i className="fas fa-arrow-right"/>
    </div>
    <br/>
    <Info />
    <Form />
  </div>
}
