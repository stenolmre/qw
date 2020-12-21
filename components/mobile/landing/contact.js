import React from 'react'
import Link from 'next/link'
import Info from './../contact/info'
import Form from './../contact/form'

export default function MobileContact({ userLanguage }) {
  return <div className="mobile-contact">
    <h2 className="mobile-landing-heading">{userLanguage ? 'Contact with us' : 'Võta meiega ühendust'}</h2>
    <br/>
    <Info />
    <Form />
  </div>
}
