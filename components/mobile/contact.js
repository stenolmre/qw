import React from 'react'

export default function MobileContact({ userLanguage }) {
  return <div className="mobile-contact-container">
    <div className="mobile-contact">
      <div style={{ marginLeft: '6%' }} className="mobile-landing-heading">
        <h1>{ userLanguage ? 'Contact' : 'Kontakt' }</h1>
        <i className="fas fa-ellipsis-h"/>
      </div>
    </div>
  </div>
}
