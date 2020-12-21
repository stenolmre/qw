import React from 'react'
import Link from 'next/link'
import Info from './../contact/info'
import Form from './../contact/form'
import Heading from './../components/landingheading'

export default function MobileContact({ userLanguage }) {
  return <div className="mobile-contact">
    <Heading name={userLanguage ? 'Contact with us' : 'Võta meiega ühendust'} link="/contact"/>
    <br/>
    <Info />
    <Form />
  </div>
}
