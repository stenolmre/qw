import React from 'react'
import Link from 'next/link'
import Info from './../contact/info'

export default function MobileContact({ userLanguage }) {
  return <div className="mobile-contact-container">
    <div className="mobile-contact">
      <h2 className="mobile-landing-heading">CONTACT</h2>
        <br/>
        <Info />
    </div>
  </div>
}
